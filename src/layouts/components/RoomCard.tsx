import config from "@/config/config.json";
import { RoomDetails } from "@/types";
import Link from "next/link";
import ImageFallback from "../helpers/ImageFallback";

const RoomCard = ({ data }: { data: RoomDetails }) => {
    const { rooms_folder } = config.settings;
    const { title, image, price, room_info } = data.frontmatter;
    return (
        <Link href={`/${rooms_folder}/${data.slug}`}>
            <div className="bg-sectionBackgroundColor px-4 pb-8 pt-3 dark:bg-darkmode-body border border-sectionBackgroundColor shadow-sm rounded-lg">
                {image && (
                    <ImageFallback
                        className="mb-6 w-full rounded-lg hover:opacity-80"
                        src={image}
                        alt={title}
                        width={445}
                        height={230}
                    />
                )}
                <div className="text-center px-3">
                    <p className="mb-2 text-fontColorHover"><span className="font-bold text-fontColor">{price}</span> / Night</p>
                    <h4 className="mb-3 text-fontColor hover:text-fontColorHover">
                        <Link href={`/${rooms_folder}/${data.slug}`}>
                            <span className="border-b-4 border-accentColor hover:border-accentColorHover">{title}</span>
                        </Link>
                    </h4>
                    <p className="mb-6 text-lg line-clamp-4 text-fontColor">
                        {room_info}
                    </p>
                    <Link
                        className="btn btn-primary btn-sm"
                        href={`/${rooms_folder}/${data.slug}`}
                    >
                        Discover More
                    </Link>
                </div>
            </div>
        </Link>
    );
};

export default RoomCard;