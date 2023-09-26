// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable jsx-a11y/media-has-caption */
import { useEffect, useState } from "react";
import { Heading, Box, Text } from "@cruk/cruk-react-components";
import { ItemsType } from "../../types";
import StyledBox from "./styles";

type VideoPlaylistProps = {
    data: ItemsType[];
}

type VideoInfoType = [string, string];

export const VideoPlaylist = ({ data }: VideoPlaylistProps) => {
    const [videoInfo, setVideoInfo] = useState<VideoInfoType[]>([]);

    async function getVideoInfo(item: ItemsType) {
        const response = await fetch(item.href);
        const links = await response.json() as string[];
        return [item.data[0]?.title, links.find(el => el.includes(".mp4"))] as VideoInfoType;
    }

    useEffect(() => {
        Promise.all(data.map(item => getVideoInfo(item)))
            // eslint-disable-next-line promise/always-return
            .then(links => {
                setVideoInfo(links);
            })
            // eslint-disable-next-line no-console
            .catch(err => console.error(err));
    }, [data]);

    return (
        <>
            <Heading h3>Videos</Heading>
            <Text>Select a file to play</Text>
            <StyledBox paddingTop="s" paddingBottom="s">
                {
                    videoInfo.map(item => (
                        <Box key={item[0]}>
                            <video src={item[1]} controls style={{maxWidth: "300px"}}/>
                            <Text marginBottom="none" marginRight="s">{item[0]}</Text>
                        </Box>
                    ))
                }
            </StyledBox>
        </>
    )

};

export default VideoPlaylist;