import {type BCData, type Bean, type Brew, type Mill, type Preparation} from "@/types/beanconqueror";

interface HasConfig {
  config: {uuid: string, unix_timestamp: number}
}

interface HasTimeData extends HasConfig{
  buyDate?: string;
}

type IncludesYearFilter<T extends HasTimeData> = {
  all: Map<string, T>;
  inYear: Map<string, T>;
}

type Mappings = {
  beanMaps: IncludesYearFilter<Bean>;
  brewMaps: IncludesYearFilter<Brew>;
  grinderMap: Map<string, Mill>;
  preparationMap: Map<string, Preparation>;
}

type TimeStats = {
  countPerMonth: Record<number, number>;
  countPerDayOfWeek: Record<number, number> ;
  countPerHour: Record<number, number>;
  brewsPerDay: Record<string, number>;
  mostBrewsOnDate: string;
  countOfMostBrews: number;
}

type BestRated = {
  name: string;
  average: number;
}

export type WrappedData = {
  year: number;
  totalBrews: number;
  totalCoffee: number;
  totalWeight: number;
  totalCost: number;
  hasMissingCosts: boolean;
  brewsPerMonth: Record<string, number>;
  averageBrewsPerDay: number;
  mostCommonDrinkingHour: number;
  mostCommonOrigin: string;
  mostCommonVariety: string;
  mostCommonProcessingMethod: string;
  mostUsedGrinder: string;
  mostUsedPreparationMethod: string;
  mostBrewsOnDay: string;
  countOfMostBrews: number;
  bestRatedBeans: BestRated[],
  bestRatedGrindSetting: BestRated[],
  bestRatedPreparationMethod: BestRated[],
}

/**
 * Creates on object with a modified get function, it returns the initial value if the object doesn't have the key
 * @param initial
 */
function getDefaultDict(initial: number): Record<string | symbol, number> {
  const init: Record<string | symbol, number> = {};
  return new Proxy(init, {
    get: (target, key)  => key in target ? target[key] : initial,
  });
}

function getDefaultForObject<T>(obj: Record<string, T>, key: keyof typeof obj, initial: T): T {
  if (Object.hasOwn(obj, key)) {
    return obj[key];
  }

  obj[key] = initial;
  return obj[key];
}

/**
 * Checks if the provided data has either a buy date equal to the provided year, or
 * a unix timestamp of the provided year.
 * @param data {HasTimeData} an instance of Bean or Brew
 * @param year {number} the year to filter for
 */
function inYear(data: HasTimeData, year: number): boolean {
  if (!!data.buyDate) {
    return new Date(data.buyDate).getFullYear() === year;
  }

  return new Date(data.config.unix_timestamp * 1000).getFullYear() === year;
}

/**
 * Generic function for creating a map of items that have an uuid, where the key is uuid and the
 * value is the item itself.
 * @param data
 */
function createMap<T extends HasConfig>(data: T[]): Map<string, T> {
  const map = new Map<string, T>();
  const length = data.length;
  for (let i = 0; i < length; i++) {
    const item = data[i];
    map.set(item.config.uuid, item);
  }

  return map;
}

/**
 * Creates an object with two maps, one for all data and one filter for the provided year
 * @param data an item that satisfies both HasConfig and HasTimeData interfaces
 * @param year the year to filter for
 */
function createYearFilteredMaps<T extends HasTimeData>(data: T[], year: number): IncludesYearFilter<T> {
  const length = data.length;
  const maps = {all: new Map<string, T>(), inYear: new Map<string, T>()};

  for (let i = 0; i < length; i++) {
    const bean = data[i];
    maps.all.set(bean.config.uuid, bean);

    if (inYear(bean, year)) {
      maps.inYear.set(bean.config.uuid, bean);
    }
  }

  return maps;
}

/**
 * Creates maps for all required data for the Wrapped statistics.
 * @param data the Beanconqueror data
 * @param year the year to filter for
 */
function createMappings(data: BCData, year: number): Mappings {
  const beanMaps = createYearFilteredMaps(data.BEANS, year);
  const brewMaps = createYearFilteredMaps(data.BREWS, year);
  const grinderMap = createMap<Mill>(data.MILL);
  const preparationMap = createMap<Preparation>(data.PREPARATION);

  return {beanMaps, brewMaps, grinderMap, preparationMap};
}

function createBrewStats(mappings: Mappings): TimeStats {
  const countPerMonth = getDefaultDict(0);
  const countPerDayOfWeek = getDefaultDict(0);
  const countPerHour = getDefaultDict(0);
  const brewsPerDay = getDefaultDict(0);

  for (const brew of mappings.brewMaps.inYear.values()) {
    const date = new Date(brew.config.unix_timestamp * 1000);
    const month = date.getMonth().toString();
    const dateStr = date.toISOString().split('T')[0];
    const dayOfWeek = date.getDay().toString();
    const hours = date.getHours().toString();

    countPerMonth[month] += 1;
    countPerDayOfWeek[dayOfWeek] += 1;
    brewsPerDay[dateStr] += 1;
    countPerHour[hours] += 1;
  }

  const [mostBrewsOnDate, countOfMostBrews] = Object.entries(brewsPerDay).reduce((prev, entry) => {
    const [, prevMax] = prev;
    const [, count] = entry;

    if (count > prevMax) {
      return entry;
    }

    return prev;
  }, ["", 0]);

  return {countPerMonth, countPerDayOfWeek, countPerHour, brewsPerDay, mostBrewsOnDate, countOfMostBrews};
}

/**
 * Retrieves the most common value by sorting the data and popping the last element (most common).
 * @param data
 */
function mostCommonValue<T>(data: Array<T | undefined>): T | undefined {
  return data.filter(a => !!a).sort((a,b) => data.filter(v => v === a).length - data.filter(v => v=== b).length).pop();
}

/**
 * Retrieve the top 5 rated objects
 * @param data
 */
function getRating(data: Record<string, number[]>):{name: string, average: number}[] {
  return Object.entries(data).map(value => {
    const [name, ratings] = value;
    return {
      name: name,
      average: ratings.reduce((prev, curr) => prev + curr, 0) / ratings.length,
    };
  }).sort((a, b) => b.average - a.average).filter(entry => {
    return entry.name !== "";
  }).slice(0, 5);
}

/**
 * Retrieve the top 5 rated objects, where the actual name of the rated object
 * is retrieved from the provided map via a property key.
 * @param data
 * @param mapping
 */
function getRatingWithMap(data: Record<string, number[]>, mapping: Map<string, Mill | Preparation>): {name: string, average: number}[] {
  return Object.entries(data).map(value => {
    const [uuid, ratings] = value;
    return {
      entry: uuid,
      average: ratings.reduce((prev, curr) => prev + curr, 0) / ratings.length,
    };
  }).sort((a, b) => b.average - a.average).slice(0, 5).map(value => ({
    name: mapping.get(value.entry)?.name ?? "Unknown",
    average: value.average,
  })).filter(entry => entry.name !== "Unknown").slice(0, 5);
}

function getBestRated(beanMap: Map<string, Bean>, grinderMap: Map<string, Mill>, preparationMap: Map<string, Preparation>, brews: Brew[]) {
  type RatedBean = {
    ratings: number[];
    beanRating: number;
  }
  const ratedBeans: Record<string, RatedBean> = {};
  const ratedGrinderSetting: Record<string, number[]> = {};
  const ratedPreparationMethods: Record<string, number[]> = {};
  for (const brew of brews) {
    const rating = brew.rating;
    if (!rating) continue;

    // Add ratings
    getDefaultForObject(ratedBeans, brew.bean, {ratings: [], beanRating: 0}).ratings.push(rating);
    ratedBeans[brew.bean].beanRating = beanMap.get(brew.bean)?.rating ?? 0;

    if (brew.grind_size !== "") getDefaultForObject(ratedGrinderSetting, `${brew.grind_size} (${grinderMap.get(brew.mill)?.name ?? "unknown"})`, []).push(rating);
    getDefaultForObject(ratedPreparationMethods, brew.method_of_preparation, []).push(rating);
  }

  const bestRatedBeans = Object.entries(ratedBeans).map(value => {
    const [bean, rated] = value;
    return {
      bean: bean,
      average: rated.ratings.reduce((prev, curr: number) => prev + curr, 0) / rated.ratings.length,
      beanRating: rated.beanRating,
    };
  }).sort((a, b) => {
    if (a.average === b.average) {
      // Averages are the same, use bean rating to compare
      return b.beanRating - a.beanRating;
    }

    return b.average - a.average;
  }).map(rated => ({name: beanMap.get(rated.bean)?.name ?? "Unknown", average: rated.average})).filter(entry => entry.name !== "Unknown").slice(0, 5);
  const bestRatedGrinderSetting = getRating(ratedGrinderSetting);
  const bestRatedPreparationMethods = getRatingWithMap(ratedPreparationMethods, preparationMap);
  return {bestRatedBeans, bestRatedGrinderSetting, bestRatedPreparationMethods};
}

/**
 * Create wrapped statistics for the provided year. If the year has no brews or beans, the function
 * will throw a custom object
 * @param data {BCData} the Beanconqueror data from the zip file
 * @param year {number} the year to create statistics for
 */
export function createWrappedStatistics(data: BCData, year: number): WrappedData {
  const mappings = createMappings(data, year);
  const timeStats = createBrewStats(mappings);

  if (mappings.brewMaps.inYear.size === 0 || mappings.beanMaps.inYear.size === 0) {
    throw {wrappedError: "missing brew or bean information for this year."};
  }

  const [mostCommonDrinkingHour,] = Object.entries(timeStats.countPerHour).sort((entry) => {
    const [, count] = entry;
    return count;
  })[0];
  const beansInYear = Array.from(mappings.beanMaps.inYear.values());
  const brewsInYear = Array.from(mappings.brewMaps.inYear.values());
  const origins = beansInYear.flatMap(b => b.bean_information.flatMap(i => i.country));
  const processings = beansInYear.flatMap(b => b.bean_information.flatMap(i => i.processing));
  const varieties = beansInYear.flatMap(b => b.bean_information.flatMap(i => i.variety));
  const grinders = brewsInYear.map(b => b.mill);
  const preps = brewsInYear.map(b => b.method_of_preparation);
  const bestRated = getBestRated(mappings.beanMaps.inYear, mappings.grinderMap, mappings.preparationMap, brewsInYear);

  let hasMissingCosts = false;

  for (const bean of beansInYear) {
    if (!bean.cost) {
      hasMissingCosts = true;
      break;
    }
  }

  return  {
    year: year,
    totalBrews: mappings.brewMaps.inYear.size,
    totalCoffee: mappings.beanMaps.inYear.size,
    totalWeight: Array.from(beansInYear).reduce((prev, bean) => prev + bean.weight, 0),
    totalCost: beansInYear.reduce((prev, curr) => prev + curr.cost, 0),
    hasMissingCosts: hasMissingCosts,
    brewsPerMonth: timeStats.countPerMonth,
    averageBrewsPerDay: Object.values(timeStats.brewsPerDay).reduce((prev, curr) => prev + curr, 0) / Object.values(timeStats.brewsPerDay).length,
    mostCommonDrinkingHour: parseInt(mostCommonDrinkingHour),
    mostCommonOrigin: mostCommonValue(origins) ?? "",
    mostCommonVariety: mostCommonValue(varieties) ?? "",
    mostCommonProcessingMethod: mostCommonValue(processings) ?? "",
    mostUsedGrinder: mappings.grinderMap.get(mostCommonValue<string>(grinders) ?? "")?.name ?? "",
    mostUsedPreparationMethod: mappings.preparationMap.get(mostCommonValue(preps) ?? "")?.name ?? "",
    mostBrewsOnDay: timeStats.mostBrewsOnDate,
    countOfMostBrews: timeStats.countOfMostBrews,
    bestRatedGrindSetting: bestRated.bestRatedGrinderSetting,
    bestRatedPreparationMethod: bestRated.bestRatedPreparationMethods,
    bestRatedBeans: bestRated.bestRatedBeans,
  } satisfies WrappedData;
}