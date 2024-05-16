import config from "@/config/config.json";
import { getSinglePage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";
import SeoMeta from "@/partials/SeoMeta";
import { RoomDetails } from "@/types";
import Link from "next/link";
import { FaUsers } from "react-icons/fa6";
import { IoIosBed } from "react-icons/io";
import { FaMoneyBill } from "react-icons/fa";
import ScrollCardAnimation from "@/components/ScrollCardAnimation";
import RoomPageHeaderImages from "@/layouts/RoomPageHeaderImages";

const { rooms_folder } = config.settings;

// remove dynamicParams
// export const dynamicParams = false;

// generate static params
export const generateStaticParams: () => { single: string }[] = () => {
    const rooms: RoomDetails[] = getSinglePage(rooms_folder);
    const paths = rooms.map((room) => ({
        single: room.slug!,
    }));

    return paths;
};

const Room = ({ params }: { params: { single: string } }) => {
    const rooms: RoomDetails[] = getSinglePage(rooms_folder);
    const room = rooms.filter((page) => page.slug === params.single)[0];

    const { frontmatter } = room;
    const {
        title,
        meta_title,
        description,
        image,
        amenities,
        guests,
        beds,
        price,
        room_info,
        general_information,
        pictures
    } = frontmatter;

    return (
        <>
            <SeoMeta
                title={title}
                meta_title={meta_title}
                description={description}
                image={image}
            />
            <section className="section pt-7 bg-gradient-to-t from-sectionBackgroundColor to-white border-b border-border">
                <div className="container">
                    <div className="row justify-center">
                        <article className="lg:col-10">
                            <div className="grid grid-cols-2 gap-1">
                                <h2
                                    dangerouslySetInnerHTML={markdownify(title)}
                                    className="mb-4 text-fontColor"
                                />
                                <Link href="/contact" className="btn btn-primary btn-sm justify-self-end place-self-start">Book Now</Link>
                            </div>
                            <RoomPageHeaderImages data={pictures} />
                            <div className="content mb-10">
                                <ScrollCardAnimation>
                                    <h3 className="text-fontColor">Overview</h3>
                                    <p className="text-lg leading-10 text-fontColor">{room_info}</p>
                                    <div className="md:p-20">
                                        <div className="flex justify-between md:justify-between items-center">
                                            <FaUsers className="w-12 h-16 text-accentColor" />
                                            <div>
                                                <p className="text-lg italic text-right text-fontColorHover">Max Guests</p>
                                                <p className="font-bold text-right text-lg text-fontColor">{guests}</p>
                                            </div>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <IoIosBed className="w-12 h-16 text-accentColor" />
                                            <div>
                                                <p className="text-lg italic text-right text-fontColorHover">Bed Sizes</p>
                                                <p className="font-bold text-right text-lg text-fontColor">{beds}</p>
                                            </div>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <FaMoneyBill className="w-12 h-16 text-accentColor" />
                                            <div>
                                                <p className="text-lg italic text-right text-fontColorHover">Room Price</p>
                                                <p className="font-bold text-right text-lg text-fontColor">{price}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <h3 className="text-fontColor">Room Amenities include</h3>
                                    <ul className="grid grid-cols-2 lg:grid-cols-3 marker:text-accentColor">
                                        {amenities.map((amenity: any, index: number) => (
                                            <li className="text-lg text-fontColor" key={index}>
                                                {amenity}
                                            </li>
                                        ))}
                                    </ul>
                                    <h3 className="mt-10 text-fontColor">General Information</h3>
                                    <div className="grid md:grid-cols-2 bg-secondaryCardBackgroundColor border border-secondaryCardBackgroundColor p-8 rounded-lg">
                                        {general_information.map((info: any, index: number) => (
                                            <p className="text-lg text-fontColor" key={index}>
                                                {info}
                                            </p>
                                        ))}
                                    </div>
                                </ScrollCardAnimation>
                            </div>
                            <Link href="/rooms" className="btn btn-secondary">See More Rooms</Link>
                        </article>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Room;