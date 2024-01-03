import {type BCData, type Bean, type Brew, type Mill, type Preparation} from "@/types/beanconqueror";
import {beanconqueror} from "@/lib/beanconqueror/proto/generated/beanconqueror";
import BeanInformation = beanconqueror.BeanInformation;

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

export type WrappedData = {
  year: number;
  totalBrews: number;
  totalCoffee: number;
  totalWeight: number;
  brewsPerMonth: Record<string, number>;
  averageBrewsPerDay: number;
  mostCommonDrinkingHour: number;
  mostCommonOrigin: string;
  mostCommonVariety: string;
  mostCommonProcessingMethod: string;
  mostUsedGrinder: string;
  mostUsedPreparationMethod: string;
  bestRatedCoffee: string;
  mostBrewsOnDay: string;
  countOfMostBrews: number;
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

export function createWrappedStatistics(data: BCData, year: number): WrappedData {
  const mappings = createMappings(data, year);
  const timeStats = createBrewStats(mappings);

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

  return  {
    year: year,
    totalBrews: mappings.brewMaps.inYear.size,
    totalCoffee: mappings.beanMaps.inYear.size,
    totalWeight: Array.from(beansInYear).reduce((prev, bean) => prev + bean.weight, 0),
    brewsPerMonth: timeStats.countPerMonth,
    averageBrewsPerDay: Object.values(timeStats.brewsPerDay).reduce((prev, curr) => prev + curr, 0) / Object.values(timeStats.brewsPerDay).length,
    mostCommonDrinkingHour: parseInt(mostCommonDrinkingHour),
    mostCommonOrigin: mostCommonValue(origins) ?? "",
    mostCommonVariety: mostCommonValue(varieties) ?? "",
    mostCommonProcessingMethod: mostCommonValue(processings) ?? "",
    mostUsedGrinder: mappings.grinderMap.get(mostCommonValue<string>(grinders) ?? "")?.name ?? "",
    mostUsedPreparationMethod: mappings.preparationMap.get(mostCommonValue(preps) ?? "")?.name ?? "",
    bestRatedCoffee: "",
    mostBrewsOnDay: timeStats.mostBrewsOnDate,
    countOfMostBrews: timeStats.countOfMostBrews,
  } satisfies WrappedData;
}