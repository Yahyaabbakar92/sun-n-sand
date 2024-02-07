import ImageFallback from "@/helpers/ImageFallback";
import { getSinglePage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";
import SeoMeta from "@/partials/SeoMeta";
import { Events } from "@/types";

// remove dynamicParams
export const dynamicParams = false;

// generate static params
export const generateStaticParams: () => { single?: string }[] = () => {
    const events: Events[] = getSinglePage("events");
    const paths = events.map((event) => ({
        single: event.slug,
    }));

    return paths;
};

const Event = ({ params }: { params: { single: string } }) => {

    const events: Events[] = getSinglePage("events");
    const event = events.filter((event) => event.slug === params.single)[0];
    const { frontmatter } = event;
    const { title, meta_title, description, image, info } = frontmatter;

    return (
        <>
            <SeoMeta
                title={title}
                meta_title={meta_title}
                description={description}
                image={image}
            />
            <section className="section-sm bg-gradient-to-t from-sectionBackgroundColor to-white border-b border-border">
                <div className="container">
                    <div className="row justify-center">
                        <div className="text-center md:col-10 lg:col-7">
                            {image && (
                                <ImageFallback
                                    className="mx-auto mb-6 rounded-lg"
                                    src={image}
                                    width={1000}
                                    height={1000}
                                    alt={title}
                                />
                            )}
                            <h2
                                dangerouslySetInnerHTML={markdownify(title)}
                                className="h2 mb-6 text-fontColor"
                            />
                            <div className="content">
                                <p
                                    dangerouslySetInnerHTML={markdownify(info)}
                                    className="text-lg leading-10 text-fontColor"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Event;