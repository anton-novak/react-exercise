import { Heading } from "@cruk/cruk-react-components";
import StyledBox from "./styles";
import { ItemsType } from "../../types";

type ImageGalleryProps = {
    data: ItemsType[];
};

export const ImageGallery = ({ data }: ImageGalleryProps) => (
    <>
        <Heading h3>Image Gallery</Heading>
        <StyledBox paddingBottom="m">
            {
                data.map((item) => (
                    // TODO: Figure out how to implement Next.js <Image> component or fix its bugs.
                    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/img-redundant-alt
                    <img
                        key={item.links[0]?.href}
                        src={item.links[0]?.href}
                        alt="NASA Image"
                    />
                ))
            }
        </StyledBox>
    </>
);

export default ImageGallery;