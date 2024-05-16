import ScrollCardAnimation from "@/components/ScrollCardAnimation";
import ImageFallback from "@/helpers/ImageFallback";
import RecreationActivitiesPics from "@/layouts/RecreationActivitiesPics";
import { getListPage } from "@/lib/contentParser";
import { humanize } from "@/lib/utils/textConverter";
import SeoMeta from "@/partials/SeoMeta";
import Image from "next/image";

const RecreationActivities = () => {
    const recreation = getListPage("recreation/_index.md");
    const { frontmatter, content } = recreation;
    const { title, meta_title, description, image, video, info, alt } = recreation.frontmatter;
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
                            src={image}
                            height={500}
                            width={500}
                            alt={alt}
                            className="w-full rounded-2xl opacity-40"
                        />
                        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-fontColor">{humanize(title)}</h1>
                    </div>
                </section>
                <div className="container mt-8">
                    <ScrollCardAnimation>
                        <p className="my-12 text-lg leading-10 text-fontColor">{content}</p>
                        {/* <video src={video} width='100%' className="rounded-2xl" /> */}
                        <Image
                            className="mx-auto mb-6 rounded-xl"
                            src="https://gspqgpzyhdhinyvtyugx.supabase.co/storage/v1/object/public/images/homePage/fifi.jpg?t=2024-05-16T12%3A48%3A13.295Z"
                            width={1500}
                            height={1500}
                            alt="Fifi water world"
                        />
                        <p className="my-12 text-lg leading-10 text-fontColor">{info}</p>
                        <div className="rounded-lg p-6 grid grid-cols-1 gap-4 md:grid-cols-2 pb-10">
                            {/* Pool */}
                            <div className="rounded-lg">
                                <h4 className="text-fontColor text-center">Swimming Pool</h4>
                                <RecreationActivitiesPics data={frontmatter.pool} />
                            </div>

                            {/* Camel */}
                            <div className="rounded-lg relative">
                                <h4 className="text-fontColor text-center">Camel Ride</h4>
                                <RecreationActivitiesPics data={frontmatter.camel} />
                            </div>

                            {/* Boat */}
                            <div className="rounded-lg relative">
                                <h4 className="text-fontColor text-center">Boat Cruise</h4>
                                <RecreationActivitiesPics data={frontmatter.boat} />
                            </div>

                            {/* Fifi Water World */}
                            <div className="rounded-lg relative">
                                <h4 className="text-fontColor text-center">Fifi Water World</h4>
                                <RecreationActivitiesPics data={frontmatter.fifi} />
                            </div>

                            {/* Outdoor Games */}
                            <div className="rounded-lg relative">
                                <h4 className="text-fontColor text-center">Outdoor Activities</h4>
                                <RecreationActivitiesPics data={frontmatter.outdoor} />
                            </div>

                            {/* Traditional Dances */}
                            <div className="rounded-lg relative">
                                <h4 className="text-fontColor text-center">Traditional Dances</h4>
                                <RecreationActivitiesPics data={frontmatter.traditional} />
                            </div>
                        </div>
                    </ScrollCardAnimation>
                </div>
            </div>
        </>
    );
};

export default RecreationActivities;