import ImageFallback from "@/helpers/ImageFallback";
import { getListPage, getSinglePage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";
import SeoMeta from "@/partials/SeoMeta";
import Testimonials from "@/partials/Testimonials";
import { Button } from "@/types";
import RoomCard from "@/components/RoomCard";
import config from "@/config/config.json";
import { sortByDateRooms } from "@/lib/utils/sortFunctions";
import { RoomDetails } from "@/types";
const { rooms_folder, pagination } = config.settings;
import ServicesCard from "@/components/ServicesCard";
import { Services } from "@/types";
import Link from "next/link";
import ScrollCardAnimation from "@/components/ScrollCardAnimation";
import HomePagePhotoGallery from "@/components/HomePagePhotoGallery";

const Home = () => {
  const homepage = getListPage("homepage/_index.md");
  const testimonial = getListPage("sections/testimonial.md");
  const { frontmatter } = homepage;
  const {
    banner,
    about,
    rooms,
    services,
  }: {
    banner: { title: string; image: string; image2: string; image3: string; content?: string; button?: Button };
    about: { title: string; content?: string };
    rooms: { title: string };
    services: { title: string; info: string };
  } = frontmatter;
  const roomsIndex: RoomDetails[] = getSinglePage(rooms_folder);
  const sortedRooms = sortByDateRooms(roomsIndex);
  const currentRooms = sortedRooms.slice(0, pagination);
  const servicesIndex: Services[] = getSinglePage("services");

  return (
    <>
      <SeoMeta />
      <section className="pt-14 pb-6 relative">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${banner.image3}')`, opacity: 0.7 }}></div>
        <div className="container relative z-10">
          <div className="lg:flex justify-between">
            {/* Banner Content and Button on the Left */}
            <div className="mb-16 text-center lg:col-5 lg:order-1 text-white">
              <h1 className="mb-8 text-fontColor">Lakeview Serenity. <span className="bg-gradient-to-r from-primaryColor to-accentColor bg-clip-text text-transparent">Sun 'n' Sand</span> Resort</h1>
              <p className="text-lg mb-16 leading-10 text-fontColor font-bold" dangerouslySetInnerHTML={markdownify(banner.content ?? "")} />

              {/* Banner Image on the Left */}
              <Link href="/rooms">
                <div className="relative transform transition-all duration-300 hover:scale-105">
                  {banner.image && (
                    <ImageFallback
                      src={banner.image}
                      className="mx-auto lg:h-96 rounded-xl mb-8"
                      width={1500}
                      height={1500}
                      alt="A room surrounded by palm trees"
                      priority
                    />
                  )}

                  {/* Banner Button on the Left */}
                  {banner.button!.enable && (
                    <a className="btn btn-primary btn-sm absolute bottom-8 left-1/2 transform -translate-x-1/2" href={banner.button!.link}>
                      {banner.button!.label}
                    </a>
                  )}
                </div>
              </Link>
            </div>

            {/* Banner Image on the Right */}
            {banner.image2 && (
              <div className="relative col-12 lg:col-7 lg:order-2">
                <ImageFallback
                  src={banner.image2}
                  className="mx-auto rounded-xl"
                  width="560"
                  height="560"
                  alt="A girl smiling holding a drink next to a camel on the beach"
                  priority
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="px-4 py-10 bg-gradient-to-b from-sectionBackgroundColor to-white">
        <div className="container text-center">
          {/* <ScrollCardAnimation> */}
          <div className="rounded-2xl">
            <h2 className="mb-8 text-fontColor" dangerouslySetInnerHTML={markdownify(about.title)} />
            <p className="text-lg leading-10 text-fontColor" dangerouslySetInnerHTML={markdownify(about.content ?? "")} />
          </div>
          {/* </ScrollCardAnimation> */}
        </div>
      </section>

      {/* Rooms Section */}
      <section className="section-sm pb-0">
        <div className="container">
          <ScrollCardAnimation>
            <h2 className="mb-16 text-center text-fontColor" dangerouslySetInnerHTML={markdownify(rooms.title)} />
            <div className="row justify-center">
              {currentRooms.map((room: any, index: number) => (
                <div key={index} className="mb-14 md:col-6 lg:col-4">
                  <RoomCard data={room} />
                </div>
              ))}
            </div>
          </ScrollCardAnimation>
        </div>
      </section>

      {/* Testimonials Section */}
      <ScrollCardAnimation>
        <Testimonials data={testimonial} />
      </ScrollCardAnimation>

      {/* Services Section */}
      <section className="section-sm pb-0">
        <div className="container">
          <ScrollCardAnimation>
            <h2 className="mb-16 text-center text-fontColor" dangerouslySetInnerHTML={markdownify(services.title)} />
            <div className="row justify-center">
              {servicesIndex.map((service: Services, index: number) => (
                <div className="mb-14 md:col-6 lg:col-4" key={index}>
                  <ServicesCard data={service} />
                </div>
              ))}
            </div>
          </ScrollCardAnimation>
        </div>
      </section>

      {/* Gallery Section */}
      <div className="bg-gradient-to-t from-sectionBackgroundColor to-white border-b border-border">
        <div className="container mt-24">
          <ScrollCardAnimation>
            <h2 className="mb-16 text-center text-fontColor">Our Visual Showcase</h2>
            <HomePagePhotoGallery />
            <div className="flex justify-center items-center pb-14 pt-4">
              <Link
                className="btn btn-primary btn-md"
                href={"/contact"}
              >
                Save Your Spot
              </Link>
            </div>
          </ScrollCardAnimation>
        </div>
      </div>
    </>
  );
};

export default Home;