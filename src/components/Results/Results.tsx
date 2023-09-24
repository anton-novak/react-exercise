import { NasaSearchParams } from "../../types";
import useNasaQuery from "../../hooks/useNasaQuery";
import ImageGallery from "../ImageGallery/ImageGallery";
import AudioPlaylist from "../AudioPlaylist/AudioPlaylist";
import VideoPlaylist from "../VideoPlaylist/VideoPlaylist";

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
      {searchParams && searchParams.mediaType === "image" && data &&
        <ImageGallery
          // TODO: Introduce pagination.
          data={data.collection.items.slice(0, 10)}
        />
      }
      {searchParams && searchParams.mediaType === "audio" && data &&
        <AudioPlaylist
          // TODO: Introduce pagination.
          data={data.collection.items.slice(0, 10)}
        />
      }
      {searchParams && searchParams.mediaType === "video" && data &&
        <VideoPlaylist
          // TODO: Introduce pagination.
          data={data.collection.items.slice(0, 10)}
        />
      }
    </>
  );
};

export default Results;
