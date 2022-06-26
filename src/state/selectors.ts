import { useAppSelector } from "./store";
import { selectCount, selectStatus } from "./counterSlice";

export const useCounter = () => useAppSelector(selectCount);
export const useStatus = () => useAppSelector(selectStatus);
