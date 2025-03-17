import React, { createContext, ReactNode } from "react";

interface FetchContextProps {
  useFetch: (resource: string, options: RequestInit) => Promise<Response>;
}

const FetchContext = createContext<FetchContextProps>({} as FetchContextProps);

export const FetchProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  return (
    <FetchContext.Provider value={{ useFetch }}>
      {children}
    </FetchContext.Provider>
  );
};

const baseUrl = "http://localhost:5007";

export const useFetch = (
  resource: string,
  options: RequestInit
): Promise<Response> => {
  return fetch(`${baseUrl}/${resource}`, options);
};
