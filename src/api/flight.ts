import axios, { AxiosResponse } from "axios";
import { Results } from "../types/Response";

export default class FlightService {
  static async getFlights(): Promise<AxiosResponse<Results>> {
    return axios.get<Results>("./flights.json");
  }
}
