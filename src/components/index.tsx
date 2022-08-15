import * as React from "react";
import { useEarthquakes } from "../services/useServices";

export function Earthquakes() {
  const { data } = useEarthquakes();

  return (
    <React.Fragment>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </React.Fragment>
  );
}
