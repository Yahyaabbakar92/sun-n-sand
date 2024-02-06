import ImageFallback from "@/helpers/ImageFallback";
import Link from "next/link";

const ServicesCard = ({ data }: { data: any }) => {
    const { title, image, info, alt } = data.frontmatter;
    return (
        <Link href={`/${data.slug}`}>
            <div className="rounded-lg px-4 pb-8 pt-3 bg-primaryCardBackgroundColor border border-primaryCardBackgroundColor shadow-sm text-center dark:bg-darkmode-theme-light hover:shadow-md transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-100 duration-300 hover:opacity-80">
                {image && (
                    <ImageFallback
                        className="mx-auto w-full mb-6 rounded-lg"
                        src={image}
                        alt={alt}
                        width={445}
                        height={230}
                    />
                )}
                <div className="px-3">
                    <h4 className="mb-3 text-fontColor hover:text-fontColorHover">
                        <Link href={`/${data.slug}`}>{title}</Link>
                    </h4>
                    <p className="mb-4 text-fontColor text-lg line-clamp-6">{info}</p>
                </div>
            </div>
        </Link>
    );
};

export default ServicesCard;