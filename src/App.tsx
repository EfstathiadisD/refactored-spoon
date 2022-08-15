import * as React from "react";

import { Provider as SpectrumProvider, defaultTheme } from "@adobe/react-spectrum";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ClerkProvider } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

import { Earthquakes } from "./components";

const QUERY_CLIENT = new QueryClient();
const CLERK_FRONTEND_DOMAIN = import.meta.env.VITE_CLERK_FRONTEND_DOMAIN_KEY;

function App() {
  const navigate = useNavigate();

  const navigateTo = React.useCallback((to: string) => navigate(to), [navigate]);

  return (
    <SpectrumProvider theme={defaultTheme}>
      <QueryClientProvider client={QUERY_CLIENT}>
        <ClerkProvider frontendApi={CLERK_FRONTEND_DOMAIN} navigate={navigateTo}>
          <Earthquakes />
        </ClerkProvider>
      </QueryClientProvider>
    </SpectrumProvider>
  );
}

export default App;
