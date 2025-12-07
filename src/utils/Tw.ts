import clsx from "clsx";
import { twMerge } from "tw-merge";

export const tw = (...inputs: any[]) => {
  return twMerge(clsx(inputs));
};
