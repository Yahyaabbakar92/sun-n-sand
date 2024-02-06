import { getSinglePage, getListPage } from "@/lib/contentParser";
import ConferenceRoomCard from "@/components/ConferenceRoomCard";
import { ConfRoomDetails } from "@/types";
import SeoMeta from "@/partials/SeoMeta";
import ScrollCardAnimation from "@/components/ScrollCardAnimation";
import { humanize } from "@/lib/utils/textConverter";
import ImageFallback from "@/helpers/ImageFallback";

const ConferenceRooms = () => {
    const confRoomsIndex: ConfRoomDetails = getListPage("confRooms/_index.md");
    const rooms: ConfRoomDetails[] = getSinglePage("confRooms");
    const { title, meta_title, description, image, info } = confRoomsIndex.frontmatter;

    return (
        <>
            <SeoMeta
                title={title}
                meta_title={meta_title}
                description={description}
                image={image}
            />
            <div className="bg-gradient-to-t from-sectionBackgroundColor to-white border-b border-border">
                <section>
                    <div className="container text-center relative">
                        <ImageFallback
                            src={image}
                            height={500}
                            width={500}
                            alt="conference room view"
                            className="w-full rounded-2xl opacity-40"
                        />
                        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-fontColor">{humanize(title)}</h1>
                    </div>
                </section>
                <p className="container text-lg mt-9 leading-10 text-fontColor">{info}</p>
                <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-14 gap-6">
                    {rooms.map((room: ConfRoomDetails, index: number) => (
                        <div className="pb-10" key={index}>
                            <ScrollCardAnimation>
                                <ConferenceRoomCard data={room} />
                            </ScrollCardAnimation>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default ConferenceRooms;