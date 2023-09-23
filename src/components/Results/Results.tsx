import { Text } from "@cruk/cruk-react-components";
import { NasaSearchParams } from "../../types";
import useNasaQuery from "../../hooks/useNasaQuery";

type ResultsProps = {
  searchParams: NasaSearchParams;
  setIsFetching: (isFetching: boolean) => void;
};

export const Results = ({ searchParams, setIsFetching }: ResultsProps) => {
  const { data, error, isFetching } = useNasaQuery(searchParams);

  // A setter from the HomePage needed to signal 
  // the fetching state to the form button.
  if (isFetching) {
    setIsFetching(true);
  } else if (!isFetching || error) {
    setIsFetching(false);
  };

  return (
    <>
      <Text>results go here</Text>
      <Text>{JSON.stringify(data)}</Text>;
    </>
  );
};

export default Results;
