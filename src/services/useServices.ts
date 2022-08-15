import { useQuery } from "@tanstack/react-query";
import { httpGet } from "../shared";

import type { EarthquakesResponse } from "../interfaces";

function useEarthquakes() {
  return useQuery(["api", "earthquakes"], () => httpGet<EarthquakesResponse>("earthquake/is"));
}

export { useEarthquakes };
