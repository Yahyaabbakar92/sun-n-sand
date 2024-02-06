import { getListPage, getSinglePage } from "@/lib/contentParser";
import SeoMeta from "@/partials/SeoMeta";
import { Events } from "@/types";
import Image from "next/image";
import image1 from "public/images/image-placeholder.png"
import EventsCard from "@/components/EventsCard";
import ScrollCardAnimation from "@/components/ScrollCardAnimation";

const EventsPage = () => {
    const eventsPageIndex: Events = getListPage("events/_index.md");
    const events: Events[] = getSinglePage("events");
    const { title, description, meta_title, image } = eventsPageIndex.frontmatter;

    return (
        <>
            <SeoMeta
                title={title}
                meta_title={meta_title}
                description={description}
                image={image}
            />
            <div className="bg-gradient-to-t from-sectionBackgroundColor to-white border-b border-border">
                <div className="rounded-lg relative">
                    <Image
                        className="mx-auto mb-6"
                        src={image1}
                        width={1500}
                        height={1500}
                        alt="Hero image"
                    />
                    <h1
                        className="mb-6 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-fontColor"
                    >Events and Exclusive Offers</h1>
                </div>
                <div className="container">
                    <p className="text-lg text-fontColor leading-10 my-10">Exclusive Offers, Exceptional Events - Elevate your experience with Sun 'n' Sand Holiday Resort. Indulge in our exclusive event spaces and discover unmatched offers. Immerse yourself in modern comfort paired with the unique charm of Africa. Make your gatherings extraordinary on the picturesque shores of Lake Malawi.</p>
                    <div className="row justify-center">
                        {events.map((event: Events, index: number) => (
                            <div className="mb-14 md:col-6 lg:col-4" key={index}>
                                <ScrollCardAnimation>
                                    <EventsCard data={event} />
                                </ScrollCardAnimation>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default EventsPage;