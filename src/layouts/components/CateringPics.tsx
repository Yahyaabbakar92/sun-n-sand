"use client"

import ImageFallback from "@/helpers/ImageFallback";
import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

const CateringPics = ({ src, alt }: { src?: string, alt: string }) => {
    return (
        <LightGallery
            speed={500}
            plugins={[lgThumbnail, lgZoom]}
        >
            <ImageFallback
                className="mx-auto my-6 rounded-lg transform transition-all duration-300 hover:scale-105"
                src={src}
                width={1500}
                height={1500}
                alt={alt}
            />
        </LightGallery>
    )
}

export default CateringPics