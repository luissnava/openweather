import { createContext } from "react";
import { GlobalContext } from "../../../types";

export const globalContext = createContext<GlobalContext | undefined>(undefined)