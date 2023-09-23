import { Text } from "@cruk/cruk-react-components";
import { NasaSearchParams } from "../../types";
import useNasaQuery from "../../hooks/useNasaQuery";

type ResultsProps = {
  searchParams: NasaSearchParams;
};

export const Results = ({ searchParams }: ResultsProps) => {
  const { data, error, isFetching } = useNasaQuery(searchParams);

  // TODO: connect isFetching state to the Form button.

  return (
    <>
      <Text>results go here</Text>
      { isFetching ?
        <Text>Fetching data</Text>
        : null
      }
      <Text>{JSON.stringify(data)}</Text>;
    </>
  );
};

export default Results;
