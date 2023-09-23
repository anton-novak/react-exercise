// import { Carousel } from "@cruk/cruk-react-components";
import { useState, useEffect } from "react";
import Image from "next/image";
import { ItemsType } from "../../types";
// https://www.npmjs.com/package/react-responsive-carousel

type ImageGalleryProps = {
    data: ItemsType[];
};

export const ImageGallery = ({ data }: ImageGalleryProps) => (
        <section>
            {
                data.map((item, index) => (
                        <Image
                            // eslint-disable-next-line react/no-array-index-key
                            key={index}
                            src={item.links[0]?.href || ''}
                            alt="NASA image"
                            width={500}
                            height={500}
                        />
                    ))
            }
        </section>
    );

export default ImageGallery;