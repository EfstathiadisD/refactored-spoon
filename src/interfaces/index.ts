interface Earthquake {
  timestamp: Date;
  latitude: number;
  longitude: number;
  depth: number;
  size: number;
  quality: number;
  humanReadableLocation: string;
}

interface EarthquakesResponse {
  result: Earthquake[];
}

export type { Earthquake, EarthquakesResponse };
