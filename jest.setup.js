import "@testing-library/jest-dom";
import {enableFetchMocks} from "jest-fetch-mock";
import { TextDecoder} from "util";

enableFetchMocks();
global.TextDecoder = TextDecoder;
