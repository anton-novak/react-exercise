import { useQuery } from "@tanstack/react-query";

import urlNasaSearch from "../services/nasa";
import { NasaResponse, NasaSearchParams } from "../types";

export const useNasaQuery = (params: NasaSearchParams | undefined) => {
  const urlNasaSearchUrl = params ? urlNasaSearch(params) : "";

  // if params is empty then no request happens
  return useQuery<NasaResponse>(
    // Commented out this line because it treated all requests as the same
    // for caching purposes. Used URLs unique to each request instead.
    // https://tanstack.com/query/latest/docs/react/guides/query-keys
    // ["nasaSearch"],
    [urlNasaSearchUrl],
    () => fetch(urlNasaSearchUrl).then((res) => res.json()),
    { enabled: !!params }
  );
};

export default useNasaQuery;
