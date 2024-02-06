import ImageFallback from "@/helpers/ImageFallback";
import Link from "next/link";

const EventsCard = ({ data }: { data: any }) => {
    const { title, image, info } = data.frontmatter;
    return (
        <Link href={`events/${data.slug}`}>
            <div className="rounded-lg px-4 pb-8 pt-3 bg-primaryCardBackgroundColor border border-primaryCardBackgroundColor shadow-sm text-center dark:bg-darkmode-theme-light hover:shadow-md transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-100 duration-300">
                {image && (
                    <ImageFallback
                        className="mx-auto w-full mb-6 rounded-lg"
                        src={image}
                        alt={title}
                        width={1000}
                        height={1000}
                    />
                )}
                <div className="px-3">
                    <h4 className="mb-3 text-fontColor hover:text-fontColorHover">
                        {title}
                    </h4>
                    <p className="mb-4 text-fontColor text-lg">{info}</p>
                </div>
            </div>
        </Link>
    );
};

export default EventsCard;