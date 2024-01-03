import {CSSProperties, ReactNode} from "react";
import {CarouselItem} from "@/components/ui/carousel";

function CarouselPage({children, style}: { children: ReactNode, style: CSSProperties }) {
  return (
    <CarouselItem
      className={"relative h-72 w-60 max-w-60 p-4 border border-accent rounded-lg shadow shadow-accent"}
      style={style}
    >
      <div className={"absolute top-0 left-0 flex flex-col items-center justify-center z-10 w-full h-full"}>
        {children}
      </div>
      <div className={"absolute top-0 left-0 w-full h-full bg-white/70 z-0"}></div>
    </CarouselItem>
  );
}

// Background style css retrieved from magicpattern.design
export const WavyPage = ({children}: { children: ReactNode }) => <CarouselPage
  style={{background: "repeating-radial-gradient( circle at 0 0, transparent 0, #ffffff 12px ), repeating-linear-gradient( #f78845, #f78845 )"}}>{children}</CarouselPage>;
export const RhombusPage = ({children}: { children: ReactNode }) => <CarouselPage style={{
  backgroundColor: "#fff",
  backgroundImage: "linear-gradient(135deg, #f78845 25%, transparent 25%), linear-gradient(225deg, #f78845 25%, transparent 25%), linear-gradient(45deg, #f78845 25%, transparent 25%), linear-gradient(315deg, #f78845 25%, #fff 25%)",
  backgroundPosition: "10px 0, 10px 0, 0 0, 0 0",
  backgroundSize: "10px 10px",
  backgroundRepeat: "repeat",
}}>{children}</CarouselPage>;
export const ZigZagPage = ({children}: { children: ReactNode }) => <CarouselPage style={{
  backgroundColor: "#fff",
  backgroundImage: "linear-gradient(135deg, #f78845 25%, transparent 25%), linear-gradient(225deg, #f78845 25%, transparent 25%), linear-gradient(45deg, #f78845 25%, transparent 25%), linear-gradient(315deg, #f78845 25%, #ffffff 25%)", backgroundPosition: "10px 0, 10px 0, 0 0, 0 0",
  backgroundSize: "20px 20px",
  backgroundRepeat: "repeat",
}}>{children}</CarouselPage>;
export const ZigZag3DPage = ({children}: { children: ReactNode }) => <CarouselPage style={{
  backgroundColor: "#fff",
  background: "linear-gradient(135deg, #f7884555 25%, transparent 25%) -10px 0/ 20px 20px, linear-gradient(225deg, #f78845 25%, transparent 25%) -10px 0/ 20px 20px, linear-gradient(315deg, #f7884555 25%, transparent 25%) 0px 0/ 20px 20px, linear-gradient(45deg, #f78845 25%, #ffffff 25%) 0px 0/ 20px 20px",
}}>{children}</CarouselPage>;
export const CirclesPage = ({children}: { children: ReactNode }) => <CarouselPage style={{
  backgroundColor: "#fff",
  backgroundImage: "radial-gradient(circle at center center, #f78845, #ffffff), repeating-radial-gradient(circle at center center, #f78845, #f78845, 10px, transparent 20px, transparent 10px)",
  backgroundBlendMode: "multiply"
}}>{children}</CarouselPage>;
export const IsometricPage = ({children}: { children: ReactNode }) => <CarouselPage style={{
  backgroundColor: "#fff",
  backgroundImage: "linear-gradient(30deg, #f78845 12%, transparent 12.5%, transparent 87%, #f78845 87.5%, #f78845), linear-gradient(150deg, #f78845 12%, transparent 12.5%, transparent 87%, #f78845 87.5%, #f78845), linear-gradient(30deg, #f78845 12%, transparent 12.5%, transparent 87%, #f78845 87.5%, #f78845), linear-gradient(150deg, #f78845 12%, transparent 12.5%, transparent 87%, #f78845 87.5%, #f78845), linear-gradient(60deg, #f7884577 25%, transparent 25.5%, transparent 75%, #f7884577 75%, #f7884577), linear-gradient(60deg, #f7884577 25%, transparent 25.5%, transparent 75%, #f7884577 75%, #f7884577)",
  backgroundSize: "20px 35px",
  backgroundPosition: "0 0, 0 0, 10px 18px, 10px 18px, 0 0, 10px 18px",
}}>{children}</CarouselPage>;
