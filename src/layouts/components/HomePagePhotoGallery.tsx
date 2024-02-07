"use client"

import ImageFallback from "@/helpers/ImageFallback"
import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import image from 'public/images/image-placeholder.png'

const HomePagePhotoGallery = () => {
    return (
        <div className="my-9 columns-1 gap-5 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-8">
            <LightGallery
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
            >
                <ImageFallback
                    className="mx-auto  rounded-lg transform transition-all duration-300 hover:scale-105"
                    src={image}
                    width={1500}
                    height={1500}
                    alt="some text"
                />
            </LightGallery>
            <LightGallery
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
            >
                <ImageFallback
                    className="mx-auto my-6 rounded-lg transform transition-all duration-300 hover:scale-105"
                    src={image}
                    width={1500}
                    height={1500}
                    alt="some text"
                />
            </LightGallery>
            <LightGallery
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
            >
                <ImageFallback
                    className="mx-auto my-6 rounded-lg transform transition-all duration-300 hover:scale-105"
                    src={image}
                    width={1500}
                    height={1500}
                    alt="some text"
                />
            </LightGallery>
            <LightGallery
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
            >
                <ImageFallback
                    className="mx-auto my-6 rounded-lg transform transition-all duration-300 hover:scale-105"
                    src={image}
                    width={1500}
                    height={1500}
                    alt="some text"
                />
            </LightGallery>
            <LightGallery
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
            >
                <ImageFallback
                    className="mx-auto my-6 rounded-lg transform transition-all duration-300 hover:scale-105"
                    src={image}
                    width={1500}
                    height={1500}
                    alt="some text"
                />
            </LightGallery>
            <LightGallery
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
            >
                <ImageFallback
                    className="mx-auto my-6 rounded-lg transform transition-all duration-300 hover:scale-105"
                    src={image}
                    width={1500}
                    height={1500}
                    alt="some text"
                />
            </LightGallery>
            <LightGallery
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
            >
                <ImageFallback
                    className="mx-auto my-6 rounded-lg transform transition-all duration-300 hover:scale-105"
                    src={image}
                    width={1500}
                    height={1500}
                    alt="some text"
                />
            </LightGallery>
            <LightGallery
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
            >
                <ImageFallback
                    className="mx-auto my-6 rounded-lg transform transition-all duration-300 hover:scale-105"
                    src={image}
                    width={1500}
                    height={1500}
                    alt="some text"
                />
            </LightGallery>
            <LightGallery
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
            >
                <ImageFallback
                    className="mx-auto my-6 rounded-lg transform transition-all duration-300 hover:scale-105"
                    src={image}
                    width={1500}
                    height={1500}
                    alt="some text"
                />
            </LightGallery>
            <LightGallery
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
            >
                <ImageFallback
                    className="mx-auto my-6 rounded-lg transform transition-all duration-300 hover:scale-105"
                    src={image}
                    width={1500}
                    height={1500}
                    alt="some text"
                />
            </LightGallery>
            <LightGallery
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
            >
                <ImageFallback
                    className="mx-auto my-6 rounded-lg transform transition-all duration-300 hover:scale-105"
                    src={image}
                    width={1500}
                    height={1500}
                    alt="some text"
                />
            </LightGallery>
            <LightGallery
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
            >
                <ImageFallback
                    className="mx-auto my-6 rounded-lg transform transition-all duration-300 hover:scale-105"
                    src={image}
                    width={1500}
                    height={1500}
                    alt="some text"
                />
            </LightGallery>
        </div>
    )
}

export default HomePagePhotoGallery