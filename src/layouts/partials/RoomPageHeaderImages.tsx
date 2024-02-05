"use client";

import ImageFallback from "@/helpers/ImageFallback";
import "swiper/css";
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

const RoomPageHeaderImages = ({ data }: any) => {
    return (
        <>
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                style={{
                    '--swiper-navigation-color': '#233F80',
                } as React.CSSProperties}
                pagination={{ clickable: true }}
                navigation={true}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                className="mySwiper"
            >
                {data.map(
                    (picture: any, index: number) => (
                        <SwiperSlide key={index}>
                            <div className="mb-10">
                                <LightGallery
                                    speed={500}
                                    plugins={[lgThumbnail, lgZoom]}
                                >
                                    <ImageFallback
                                        src={picture.url}
                                        height={2000}
                                        width={2000}
                                        alt={picture.alt}
                                        className="w-full rounded"
                                    />
                                </LightGallery>
                            </div>
                        </SwiperSlide>
                    ),
                )}
            </Swiper>
        </>
    );
};

export default RoomPageHeaderImages;