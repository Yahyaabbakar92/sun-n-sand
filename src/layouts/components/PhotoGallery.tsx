"use client";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import PhotoAlbum from "react-photo-album";
import NextJsImage from "@/components/NextJsImage";
import images from "@/components/photos";

export default function PhotoGallery() {
    const [index, setIndex] = useState(-1);
    return (
        <>
            <PhotoAlbum
                photos={images}
                layout="rows"
                renderPhoto={NextJsImage}
                defaultContainerWidth={1200}
                onClick={({ index }) => setIndex(index)}
                sizes={{
                    size: "calc(100vw - 40px)",
                    sizes: [
                        { viewport: "(max-width: 299px)", size: "calc(100vw - 10px)" },
                        { viewport: "(max-width: 599px)", size: "calc(100vw - 20px)" },
                        { viewport: "(max-width: 1199px)", size: "calc(100vw - 30px)" },
                    ],
                }}
            />

            <Lightbox
                slides={images}
                open={index >= 0}
                index={index}
                close={() => setIndex(-1)}
                plugins={[Fullscreen, Zoom]}
            />
        </>
    );
}