"use client"

import ImageFallback from "@/helpers/ImageFallback"
import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

const HomePagePhotoGallery = ({ data }: any) => {
    const { images } = data

    return (
        <div className="my-9 columns-1 gap-5 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-8">
            {images.map(
                (image: any) => (
                    <LightGallery
                        key={image.url}
                        speed={500}
                        plugins={[lgThumbnail, lgZoom]}
                    >
                        <ImageFallback
                            className="mx-auto my-4 rounded-lg transform transition-all duration-300 hover:scale-105"
                            src={image.url}
                            width={500}
                            height={500}
                            alt={image.alt}
                        />
                    </LightGallery>
                )
            )}
        </div>
    )
}

export default HomePagePhotoGallery