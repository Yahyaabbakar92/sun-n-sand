import { getListPage, getSinglePage } from "@/lib/contentParser";
import RoomPageCard from "@/components/RoomPageCard";
import { RoomDetails } from "@/types";
import SeoMeta from "@/partials/SeoMeta";
import ImageFallback from "@/helpers/ImageFallback";
import ScrollCardAnimation from "@/components/ScrollCardAnimation";

// for all regular pages
const Rooms = () => {
    const roomsIndex: RoomDetails = getListPage("rooms/_index.md");
    const rooms: RoomDetails[] = getSinglePage("rooms");
    const { title, meta_title, description, image, alt } = roomsIndex.frontmatter;

    return (
        <>
            <SeoMeta
                title={title}
                meta_title={meta_title}
                description={description}
                image={image}
            />
            <div className="text-center relative">
                <ImageFallback
                    src={image}
                    height={500}
                    width={500}
                    alt={alt}
                    className="w-full opacity-40"
                />
                <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-fontColor">{title}</h1>
            </div>
            <section className="bg-backgroundColor border-b border-border">
                <div className="container mt-12">
                    <p className="text-lg text-fontColor leading-10 my-10">Modern Comfort with African Charm - Unwind in our lake-facing rooms at Sun 'n' Sand Holiday Resort. Immerse yourself in the perfect blend of contemporary luxury and traditional African style for an unforgettable stay on the shores of Lake Malawi.</p>
                    <div className="">
                        {rooms.map((room: any, index: number) => (
                            <div key={index} className="pb-14">
                                <ScrollCardAnimation>
                                    <RoomPageCard data={room} />
                                </ScrollCardAnimation>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Rooms;