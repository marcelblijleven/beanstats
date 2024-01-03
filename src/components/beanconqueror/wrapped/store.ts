import {create} from "zustand";
import {type WrappedData} from "@/components/beanconqueror/wrapped/utils";

interface WrappedStore {
  year: number | null;
  data: WrappedData | null;
  setYear: (year: number) => void;
  setData: (data: WrappedData | null) => void;
}

export const useWrappedStore = create<WrappedStore>()((set) => ({
  year: null,
  data: null,
  setYear: (year: number) => set(() => ({year: year})),
  setData: (data: WrappedData | null) => set(() => ({data: data})),
}));
