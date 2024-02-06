import ImageFallback from "@/helpers/ImageFallback";
import { plainify } from "@/lib/utils/textConverter";
import Link from "next/link";

const ConferenceRoomCard = ({ data }: { data: any }) => {
    const { title, image, capacity } = data.frontmatter;
    return (
        <Link href={`conference-rooms/${data.slug}`}>
            <div className="rounded-lg px-4 pb-8 pt-3 bg-primaryCardBackgroundColor border border-primaryCardBackgroundColor shadow-sm text-center dark:bg-darkmode-theme-light hover:shadow-md transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-100 duration-300">
                <Link href={`conference-rooms/${data.slug}`}>
                    {image && (
                        <ImageFallback
                            className="mx-auto w-full mb-6 rounded-lg hover:opacity-80"
                            src={image}
                            alt={title}
                            width={500}
                            height={500}
                        />
                    )}
                    <div className="px-3">
                        <h4 className="mb-3 text-fontColor hover:text-fontColorHover">
                            {title}
                        </h4>
                        <p className="pb-2 text-fontColor text-lg">{capacity}</p>
                        <p className="mb-4 text-fontColor text-lg">{plainify(data.content?.slice(0, 109))}</p>
                    </div>
                </Link>
            </div>
        </ Link>
    );
};

export default ConferenceRoomCard;