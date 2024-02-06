import ImageFallback from "@/helpers/ImageFallback";
import { plainify } from "@/lib/utils/textConverter";
import Link from "next/link";

const ServicesCard = ({ data }: { data: any }) => {
    const { title, image } = data.frontmatter;
    return (
        <div className="text-center md:flex justify-between items-center md:my-12">
            {image && (
                <ImageFallback
                    className="mx-auto mb-2 rounded md:w-1/2 lg:w-full"
                    src={image}
                    alt={title}
                    width={500}
                    height={500}
                />
            )}
            <div className="p-7">
                <h4 className="mb-3">
                    <Link href={`/services/${data.slug}`}>{title}</Link>
                </h4>
                <p className="mb-4">{plainify(data.content?.slice(0, 200))}</p>
            </div>
        </div>
    );
};

export default ServicesCard;