"use client";

import ImageFallback from "@/helpers/ImageFallback";
import "swiper/css";
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

const RecreationActivitiesPics = ({ data }: any) => {
    return (
        <>
            <Swiper
                modules={[Autoplay, Navigation]}
                style={{
                    '--swiper-navigation-color': '#233F80',
                } as React.CSSProperties}
                navigation={true}
                loop={true}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                className="mySwiper"
            >
                {data.map(
                    (picture: any, index: number) => (
                        <SwiperSlide key={index}>
                            <LightGallery
                                speed={500}
                                plugins={[lgThumbnail, lgZoom]}
                            >
                                <ImageFallback
                                    src={picture.src}
                                    height={2000}
                                    width={2000}
                                    alt={picture.alt}
                                    className="w-full rounded mt-2 swiper-zoom-container"
                                />
                            </LightGallery>
                        </SwiperSlide>
                    ),
                )}
            </Swiper>
        </>
    );
}

export default RecreationActivitiesPics