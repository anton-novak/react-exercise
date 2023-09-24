/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable jsx-a11y/media-has-caption */
import { useEffect, useState } from "react";
import { Heading, Box, Text } from "@cruk/cruk-react-components";
import StyledBox from "./styles";
import { ItemsType } from "../../types";

type AudioPlaylistProps = {
    data: ItemsType[];
}

type AudioInfoType = [string, string];

export const AudioPlaylist = ({ data }: AudioPlaylistProps) => {
    const [audioInfo, setAudioInfo] = useState<AudioInfoType[]>([]);

    async function getAudioInfo(item: ItemsType) {
        const response = await fetch(item.href);
        const links = await response.json() as string[];
        return [item.data[0]?.title, links[0]] as AudioInfoType;
    }

    useEffect(() => {
        Promise.all(data.map(item => getAudioInfo(item)))
            // eslint-disable-next-line promise/always-return
            .then(links => {
                setAudioInfo(links);
            })
            // eslint-disable-next-line no-console
            .catch(err => console.error(err));
    }, [data]);

    return (
        <>
            <Heading h3>Audio Playlist</Heading>
            <Text>Select a file to play</Text>
            <Box paddingTop="s" paddingBottom="s">
                {
                    audioInfo.map(item => (
                        <StyledBox key={item[0]}>
                            <Text marginBottom="none" marginRight="s">{item[0]}</Text>
                            <audio src={item[1]} controls />
                        </StyledBox>
                    ))
                }
            </Box>
        </>
    )

};

export default AudioPlaylist;