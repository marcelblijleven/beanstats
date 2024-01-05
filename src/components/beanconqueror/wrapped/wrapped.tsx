"use client"

import {type ReactNode, useEffect, useRef, useState} from "react";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import {useWrappedStore} from "@/components/beanconqueror/wrapped/store";
import {createWrappedStatistics} from "@/components/beanconqueror/wrapped/utils";
import {readZipFile} from "@/lib/beanconqueror/upload/utils";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {useToast} from "@/components/ui/use-toast";
import {cn} from "@/lib/utils";

import "./backgrounds.css";

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
    <Carousel opts={{
      align: "start",
    }}
              className="w-full max-w-xs mt-4 text-gray-950">
      <CarouselContent className={"h-[300px] text-gray-950"}>
        <CarouselItem className={"flex flex-col items-center justify-center bg-circle-wave"}>
          <Text>In {year} you&apos;ve bought</Text>
          <BigText>{data.totalCoffee}</BigText>
          <Text>bags of coffee</Text>
        </CarouselItem>
        <CarouselItem className={"flex flex-col items-center justify-center bg-wave"}>
          <Text>With a total weight of</Text>
          <BigText>{Math.floor(data.totalWeight * 100) / 100} grams</BigText>
        </CarouselItem>
        {data.totalCost > 0 && (
          <CarouselItem className={"flex flex-col items-center justify-center bg-tiles"}>
            <Text>You&apos;ve spent</Text>
            <BigText>{data.totalCost} 🤫</BigText>
            {data.hasMissingCosts && (<div className={"whitespace-pre-wrap"}>Did you enter everything 😉?</div>)}
          </CarouselItem>
        )}
        <CarouselItem className={"flex flex-col items-center justify-center bg-circle-wave-2"}>
          <Text>You&apos;ve been busy, you made</Text>
          <BigText>{data.totalBrews} brews</BigText>
          <Text>Averaging {Math.floor(data.averageBrewsPerDay * 100) / 100} brews per day</Text>
        </CarouselItem>
        <CarouselItem className={"flex flex-col items-center justify-center bg-pixels"}>
          <Text>You made the most brews on</Text>
          <BigText>{data.mostBrewsOnDay}</BigText>
        </CarouselItem>
        <CarouselItem className={"flex flex-col items-center justify-center bg-chain"}>
          <Text>Your top 5 brews per month</Text>
          <ol className={"text-center text-lg"}>
            {months}
          </ol>
        </CarouselItem>
        <CarouselItem className={"flex flex-col items-center justify-center bg-swirl"}>
            <Text>You usually drank coffee between</Text>
            <BigText>{data.mostCommonDrinkingHour}:00 - {data.mostCommonDrinkingHour + 1}:00</BigText>
        </CarouselItem>
        <CarouselItem className={"flex flex-col items-center justify-center bg-3d-blocks"}>
          <Text>Your most used grinder</Text>
          <BigText>{data.mostUsedGrinder}</BigText>
        </CarouselItem>
        <CarouselItem className={"flex flex-col items-center justify-center bg-pills"}>
          <Text>Your favorite preparation method</Text>
          <BigText>{data.mostUsedPreparationMethod}</BigText>
        </CarouselItem>
        <CarouselItem className={"flex flex-col items-center justify-center bg-arrows"}>
          <Text>Your favorite origin</Text>
          <BigText>{data.mostCommonOrigin}</BigText>
        </CarouselItem>
        <CarouselItem className={"flex flex-col items-center justify-center bg-links"}>
          <Text>Your favorite variety</Text>
          <BigText>{data.mostCommonVariety}</BigText>
        </CarouselItem>
        <CarouselItem className={"flex flex-col items-center justify-center bg-tiles"}>
          <Text>Your favorite processing</Text>
          <BigText>{data.mostCommonProcessingMethod}</BigText>
        </CarouselItem>
      </CarouselContent>
      <div className={"flex items-center justify-center gap-4 m-4"}>
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </Carousel>

  );
}

function Upload() {
  const fileRef = useRef<HTMLInputElement>(null);
  const data = useWrappedStore(state => state.data);
  const setData = useWrappedStore(state => state.setData);
  const year = useWrappedStore(state => state.year)!;
  const {toast} = useToast();
  const [disabled, setDisabled] = useState<boolean>(true);

  const onChange = () => {
    setDisabled(false);
  };

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
    console.log("miaw?")
    } catch (e) {
      const wrappedError = (e as {wrappedError: string}).wrappedError;
      if (wrappedError) {
        toast({
          title: "Error",
          description: wrappedError,
          variant: "destructive",
        });
        return;
      }

      console.error(e);
      toast({
        title: "Error",
        description: "Something went wrong while processing your data",
        variant: "destructive",
      });
    }
  };

  if (!!data) {
    return (
      <Button onClick={() => {
        setData(null);
        setDisabled(true);
      }} className={"w-40"}>Upload new file</Button>
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
          onChange={onChange}
        />
        <Button disabled={disabled} className={"shrink-0"} type={"button"} onClick={callback}>Get stats</Button>
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
      <div className={cn("flex flex-col items-center gap-4 g-red-400", data && "flex-col-reverse")}>
      <Upload />
      {data && <WrappedCarousel/>}
      </div>
    </div>
  );
}