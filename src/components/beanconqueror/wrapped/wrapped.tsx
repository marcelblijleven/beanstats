"use client"

import {type CSSProperties, type ReactNode, useEffect, useRef} from "react";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import {useWrappedStore} from "@/components/beanconqueror/wrapped/store";
import {createWrappedStatistics} from "@/components/beanconqueror/wrapped/utils";
import {readZipFile} from "@/lib/beanconqueror/upload/utils";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {useToast} from "@/components/ui/use-toast";
import {cn} from "@/lib/utils";
import {
  CirclesPage,
  IsometricPage,
  RhombusPage,
  WavyPage, ZigZag3DPage,
  ZigZagPage
} from "@/components/beanconqueror/wrapped/carousel-pages";

interface Props {
  year: number
}

function Text({children}: { children: ReactNode }) {
  return (
    <div className={"text-md md:text-lg font-semibold"}>{children}</div>
  );
}

function BigText({children}: { children: ReactNode }) {
  return (
    <div className={"text-2xl md:text-5xl font-black"}>
      {children}
    </div>
  );
}

function WrappedCarousel() {
  const data = useWrappedStore(state => state.data);
  const year = useWrappedStore(state => state.year);
  if (!data) {
    return null;
  }

  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "Augustus", "September", "October", "November", "December"];
  const months = Object.entries(data.brewsPerMonth).sort(([, ac], [, bc]) => bc - ac).slice(0, 5).map(entry => {
    const [month, count] = entry;
    const idx = parseInt(month);
    const name = monthNames[idx];
    return (
      <li key={name} className={"text-xl font-black"}>{name}: {count}</li>
    );
  });


  return (
    <Carousel className={"w-[275px] md:w-[500px] text-black"}>
      <CarouselContent>
        <IsometricPage>
          <Text>In {year} you&apos;ve bought</Text>
          <BigText>{data.totalCoffee}</BigText>
          <Text>bags of coffee</Text>
        </IsometricPage>
        <WavyPage>
          <Text>With a total weight of</Text>
          <BigText>{data.totalWeight} grams</BigText>
        </WavyPage>
        <RhombusPage>
          <Text>You&apos;ve been busy, you made</Text>
          <BigText>{data.totalBrews} brews</BigText>
          <Text>Averaging {Math.floor(data.averageBrewsPerDay * 100) / 100} brews per day</Text>
        </RhombusPage>
        <ZigZagPage>
          <Text>You made the most brews on</Text>
          <BigText>{data.mostBrewsOnDay}</BigText>
        </ZigZagPage>
        <CirclesPage>
          <Text>Your top 5 brews per month</Text>
          <ol className={"text-center text-lg"}>
            {months}
          </ol>
        </CirclesPage>
        <ZigZag3DPage>
          <Text>You needed coffee the most between</Text>
          <BigText>{data.mostCommonDrinkingHour}:00 - {data.mostCommonDrinkingHour + 1}:00</BigText>
        </ZigZag3DPage>
        <WavyPage>
          <Text>Your most used grinder</Text>
          <BigText>{data.mostUsedGrinder}</BigText>
        </WavyPage>
        <CirclesPage>
          <Text>Your most used preparation method</Text>
          <BigText>{data.mostUsedPreparationMethod}</BigText>
        </CirclesPage>
        <ZigZag3DPage>
          <Text>Your most common origin</Text>
          <BigText>{data.mostCommonOrigin}</BigText>
        </ZigZag3DPage>
        <CirclesPage>
          <Text>Your most common varieties</Text>
          <BigText>{data.mostCommonVariety}</BigText>
        </CirclesPage>
        <ZigZagPage>
          <Text>Your most common processing</Text>
          <BigText>{data.mostCommonProcessingMethod}</BigText>
        </ZigZagPage>
      </CarouselContent>
      <CarouselPrevious/>
      <CarouselNext/>
    </Carousel>

  );
}

function Upload() {
  const fileRef = useRef<HTMLInputElement>(null);
  const data = useWrappedStore(state => state.data);
  const setData = useWrappedStore(state => state.setData);
  const year = useWrappedStore(state => state.year)!;
  const {toast} = useToast();

  const callback = async () => {
    const file = fileRef.current?.files?.[0];

    if (!file) {
      toast({
        title: "Error",
        description: "Did not receive a file",
        variant: "destructive",
      });
      return;
    }
    try {
      setData(createWrappedStatistics(await readZipFile(file), year));
    } catch (e) {
      toast({
        title: "Error",
        description: "Something went wrong while processing your data",
        variant: "destructive",
      });
    }
  };

  if (!!data) {
    return (
      <Button onClick={() => setData(null)} className={"w-40"}>Upload new file</Button>
    );
  }

  return (
    <section className={"flex flex-col gap-2 my-4"}>
      <h2 className={"text-lg font-semibold self-center"}>Upload</h2>
      <div className={"text-sm md:text-base"}>Get started by uploading your Beanconqueror zip file</div>
      <div className={"flex gap-2"}>
        <Input
          hidden
          required
          ref={fileRef}
          id={"file-beanconqueror"}
          type={"file"}
          multiple={false}
          accept={"application/zip"}
        />
        <Button className={"shrink-0"} type={"button"} onClick={callback}>Get stats</Button>
      </div>
    </section>
  );
}

export default function Wrapped(props: Props) {
  const setYear = useWrappedStore(state => state.setYear);
  const data = useWrappedStore(state => state.data);

  useEffect(() => {
    setYear(props.year);
  }, [setYear, props.year]);

  return (
    <div className={"mx-2"}>
      <div className={"flex flex-col items-center gap-1 lg:gap-2"}>
        <div className={"bg-gradient-to-tr from-amber-700 to-yellow-300 bg-clip-text text-transparent"}>
          <h1 className={"text-4xl lg:text-7xl font-black tracking-tight"}>Wrapped {props.year}</h1>
        </div>
        <div className={"text-md lg:text-xl text-muted-foreground"}>Your year in coffee</div>
      </div>
      <div className={cn("flex flex-col items-center gap-4", data && "flex-col-reverse")}>
      <Upload />
      {data && <WrappedCarousel/>}
      </div>
    </div>
  );
}