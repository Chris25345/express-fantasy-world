import axios, { AxiosResponse } from "axios";
import { Humanoid, Occupation, Race } from "../types";

export const Humanoids = {
  getAll: (): Promise<AxiosResponse<Humanoid[], unknown>> => {
    return axios({
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
      url: "/api/humanoids",
    });
  },
};

export const Races = {
  getAll: (): Promise<AxiosResponse<Race[], unknown>> => {
    return axios({
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
      url: "/api/races",
    });
  },
};

export const Occupations = {
  getAll: (): Promise<AxiosResponse<Occupation[], unknown>> => {
    return axios({
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
      url: "/api/occupations",
    });
  },
};
