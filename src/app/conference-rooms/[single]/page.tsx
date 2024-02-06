import ImageFallback from "@/helpers/ImageFallback";
import MDXContent from "@/helpers/MDXContent";
import ConferenceRoomPageHeaderImages from "@/layouts/ConferenceRoomPageHeaderImages";
import { getSinglePage } from "@/lib/contentParser";
import { humanize } from "@/lib/utils/textConverter";
import SeoMeta from "@/partials/SeoMeta";
import { ConfRoomDetails } from "@/types";
import Link from "next/link";

// remove dynamicParams
export const dynamicParams = false;

// generate static params
export const generateStaticParams: () => { single?: string }[] = () => {
    const rooms: ConfRoomDetails[] = getSinglePage("confRooms");
    const paths = rooms.map((room) => ({
        single: room.slug,
    }));

    return paths;
};

const ConferenceSingle = ({ params }: { params: { single: string } }) => {
    const rooms: ConfRoomDetails[] = getSinglePage("confRooms");
    const room = rooms.filter((page) => page.slug === params.single)[0];
    const { frontmatter, content } = room;
    const { title, meta_title, description, image, capacity, pictures, event_type } = frontmatter;

    return (
        <>
            <SeoMeta
                title={title}
                meta_title={meta_title}
                description={description}
                image={image}
            />
            <section className="pb-0 pt-6 bg-gradient-to-t from-sectionBackgroundColor to-white">
                <div className="border-b border-border pb-14 dark:border-darkmode-border">
                    <div className="container lg:px-24">
                        <div className="grid grid-cols-2 gap-1">
                            <h2 className="h2 mb-4 text-fontColor">{humanize(title)}</h2>
                            <Link href="/contact" className="btn btn-primary btn-sm justify-self-end place-self-start">Book Now</Link>
                        </div>
                        <ConferenceRoomPageHeaderImages data={pictures} />
                    </div>
                    <div className="container mt-16 lg:flex justify-between items-center">
                        <div className="lg:w-1/2 lg:pr-4">
                            <div className="flex justify-between border-b-2 p-3">
                                <div><p className="text-lg text-fontColor">Capacity:</p></div>
                                <div><p className="text-lg text-fontColor">{capacity}</p></div>
                            </div>
                            <div className="flex justify-between border-b-2 p-3">
                                <div><p className="text-lg text-fontColor">Event Type:</p></div>
                                <div><p className="text-lg text-fontColor">{event_type}</p></div>
                            </div>
                            <div className="my-8 text-lg text-fontColor leading-8">
                                <MDXContent content={content} />
                            </div>
                        </div>
                        <div className="lg:pl-4 my-10">
                            <ImageFallback
                                src={image}
                                className="mx-auto w-full rounded"
                                width={1000}
                                height={1000}
                                alt={title}
                            />
                        </div>
                    </div>
                    <div className="container text-center">
                        <div className="my-12">
                            <Link
                                className="btn btn-secondary"
                                href={"/conference-rooms"}
                            >
                                See More Conference Rooms
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ConferenceSingle;