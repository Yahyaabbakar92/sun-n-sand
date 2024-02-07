import SeoMeta from "@/partials/SeoMeta";
import Image from "next/image";
import ScrollCardAnimation from "@/components/ScrollCardAnimation";
import { getListPage } from "@/lib/contentParser";
import GalleryPagePhotoGallery from "@/components/GalleryPagePhotoGallery";

const Gallery = () => {
    const galleryPage = getListPage("gallery/_index.md");

    return (
        <>
            <SeoMeta title={"Sun 'n' Sand Resort Gallery | Capturing Moments by Lake Malawi in Mangochi, Malawi"} />
            <div className="rounded-lg relative">
                <Image
                    className="mx-auto mb-6 opacity-40"
                    src={galleryPage.frontmatter.gallery.image}
                    width={1500}
                    height={1500}
                    alt="close up of flowers with view of hall"
                />
                <h1
                    className="mb-6 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-fontColor"
                >Gallery</h1>
            </div>
            <div className="bg-gradient-to-t from-sectionBackgroundColor to-white border-b border-border">
                <section className="container mt-10 pb-10">
                    <ScrollCardAnimation>
                        <p className="text-lg mt-12 pb-12 leading-10 text-fontColor">Explore the gallery and let the vibrant snapshots tell tales of the unforgettable moments waiting for you at Sun 'n' Sand. Get a sneak peek into the fun-filled memories created here. Scroll, smile, and get ready to make your own stories!</p>
                        <GalleryPagePhotoGallery />
                    </ScrollCardAnimation>
                </section>
            </div>
        </>
    );
};

export default Gallery;