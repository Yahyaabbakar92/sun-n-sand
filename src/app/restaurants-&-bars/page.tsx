import CateringPics from "@/components/CateringPics";
import ScrollCardAnimation from "@/components/ScrollCardAnimation";
import ImageFallback from "@/helpers/ImageFallback";
import { getListPage } from "@/lib/contentParser";
import { humanize, markdownify } from "@/lib/utils/textConverter";
import PageHeader from "@/partials/PageHeader";
import SeoMeta from "@/partials/SeoMeta";

const RestaurantsBars = () => {
    const catering = getListPage("catering/_index.md");
    const { frontmatter } = catering;
    const { title, meta_title, description, image, alt } = catering.frontmatter;

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
                            src="https://gspqgpzyhdhinyvtyugx.supabase.co/storage/v1/object/public/images/restaurantAndBarsPage/laMirageRestaurant/restaurant.jpg?t=2024-05-16T13%3A08%3A10.296Z"
                            height={500}
                            width={500}
                            alt={alt}
                            className="w-full rounded-2xl opacity-60"
                        />
                        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-fontColor">{humanize(title)}</h1>
                    </div>
                </section>
                <div className="container mt-8 mb-20">
                    {/* La Mirage restaurant */}
                    <ScrollCardAnimation>
                        <h2 className="text-fontColor mt-20" dangerouslySetInnerHTML={markdownify(frontmatter.restaurant.title)} />
                        <p className="text-fontColor mt-2 mb-8 text-lg leading-10" dangerouslySetInnerHTML={markdownify(frontmatter.restaurant.content)} />
                        <div className="my-9 columns-1 gap-5 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-8">
                            {frontmatter.restaurant.images.map((image: any) => (
                                <CateringPics src={image.src} alt={image.alt} key={image.id} />
                            ))}
                        </div>
                    </ScrollCardAnimation>

                    {/* Belle View bar */}
                    <ScrollCardAnimation>
                        <h2 className="text-fontColor mt-20" dangerouslySetInnerHTML={markdownify(frontmatter.bar1.title)} />
                        <p className="text-fontColor mt-2 mb-8 text-lg leading-10" dangerouslySetInnerHTML={markdownify(frontmatter.bar1.content)} />
                        <div className="my-9 columns-1 gap-5 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-8">
                            {frontmatter.bar1.images.map((image: any) => (
                                <CateringPics src={image.src} alt={image.alt} key={image.id} />
                            ))}
                        </div>
                    </ScrollCardAnimation>

                    {/* Ng'ona Pool bar */}
                    {/* <ScrollCardAnimation>
                        <h2 className="text-fontColor mt-20" dangerouslySetInnerHTML={markdownify(frontmatter.bar2.title)} />
                        <p className="text-fontColor mt-2 mb-8 text-lg leading-10" dangerouslySetInnerHTML={markdownify(frontmatter.bar2.content)} />
                        <div className="my-9 columns-1 gap-5 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-8">
                            {frontmatter.bar2.images.map((image: any) => (
                                <CateringPics src={image.src} alt={image.alt} key={image.id} />
                            ))}
                        </div>
                    </ScrollCardAnimation> */}

                    {/* Coffee Shop */}
                    <ScrollCardAnimation>
                        <h2 className="text-fontColor mt-20" dangerouslySetInnerHTML={markdownify(frontmatter.cafe.title)} />
                        <p className="text-fontColor mt-2 mb-8 text-lg leading-10" dangerouslySetInnerHTML={markdownify(frontmatter.cafe.content)} />
                        <div className="my-9 columns-1 gap-5 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-8">
                            {frontmatter.cafe.images.map((image: any) => (
                                <CateringPics src={image.src} alt={image.alt} key={image.id} />
                            ))}
                        </div>
                    </ScrollCardAnimation>
                </div>
            </div>
        </>
    );
};

export default RestaurantsBars;