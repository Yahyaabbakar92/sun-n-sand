import { RoomDetails } from "@/types";
import Link from "next/link";
import ImageFallback from "../helpers/ImageFallback";

const RoomPageCard = ({ data }: { data: RoomDetails }) => {
    const { title, image, price, room_info } = data.frontmatter;
    return (
        <Link href={`/rooms/${data.slug}`}>
            <div className="bg-sectionBackgroundColor flex flex-col md:flex-row justify-between items-center gap-8 border border-sectionBackgroundColor shadow-sm p-5 rounded-lg">
                <div className="flex basis-1/2">
                    {image && (
                        <ImageFallback
                            className="rounded-lg flex-auto hover:opacity-80"
                            src={image}
                            alt={title}
                            width={1000}
                            height={1000}
                        />
                    )}
                </div>
                <div className="basis-1/2">
                    <p className="mb-2 text-fontColorHover"><span className="font-bold text-fontColor">{price}</span> / Night</p>
                    <h4 className="mb-3 text-fontColor hover:text-fontColorHover">
                        <Link href={`/rooms/${data.slug}`}>
                            <span className="border-b-4 border-accentColor hover:border-accentColorHover">{title}</span>
                        </Link>
                    </h4>
                    <p className="mb-6 text-lg line-clamp-2 text-fontColor">
                        {room_info}
                    </p>
                    <Link
                        className="btn btn-primary btn-sm"
                        href={`/rooms/${data.slug}`}
                    >
                        View Room
                    </Link>
                </div>
            </div>
        </Link>
    );
};

export default RoomPageCard;