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
import Image from "next/image";

const Home = () => {
  const homepage = getListPage("homepage/_index.md");
  const testimonial = getListPage("sections/testimonial.md");
  const { frontmatter } = homepage;
  const {
    banner,
    about,
    rooms,
    services,
    gallery,
  }: {
    banner: { title: string; image: string; image2: string; image3: string; content?: string; button?: Button };
    about: { title: string; content?: string };
    rooms: { title: string };
    services: { title: string; info: string };
    gallery: { images: any }
  } = frontmatter;
  const roomsIndex: RoomDetails[] = getSinglePage(rooms_folder);
  const sortedRooms = sortByDateRooms(roomsIndex);
  const currentRooms = sortedRooms.slice(0, pagination);
  const servicesIndex: Services[] = getSinglePage("services");

  return (
    <>
      <SeoMeta />
      {/* Hero Section */}
      <section className="pt-14 md:pb-0 pb-6 relative">
        <div className="absolute inset-0 bg-cover md:h-[620px] lg:h-[670px] bg-center" style={{ backgroundImage: `url('${banner.image3}')`, opacity: 0.5 }}></div>
        <div className="container relative z-10 md:mb-10 mb-16 text-center text-white flex flex-col justify-center items-center h-full">
          <h1 className="lg:mb-4 pt-20 md:pt-32 lg:pt-24 text-fontColor text-5xl md:text-6xl lg:text-8xl"><span className="bg-gradient-to-r from-primaryColor to-accentColor bg-clip-text text-transparent">Sun 'n' Sand</span> Resort. Lakeview Serenity.</h1>
          <p className="mb-16 leading-relaxed text-fontColor text-2xl md:text-3xl lg:leading-10 lg:text-4xl pt-10 font-semibold" dangerouslySetInnerHTML={markdownify(banner.content ?? "")} />
          <Link href="/rooms" className="btn btn-primary text-lg md:text-xl">
            Explore Rooms
          </Link>
        </div>
      </section>


      {/* About Us Section */}
      <section className="px-4 pt-32 md:pt-36 lg:pt-52 pb-10 bg-gradient-to-b from-sectionBackgroundColor to-white">
        <div className="container text-center">
          {/* <ScrollCardAnimation> */}
          <div className="rounded-2xl">
            <h2 className="mb-8 text-fontColor" dangerouslySetInnerHTML={markdownify(about.title)} />
            <p className="text-lg leading-10 text-fontColor" dangerouslySetInnerHTML={markdownify(about.content ?? "")} />
          </div>
          {/* </ScrollCardAnimation> */}
        </div>
      </section>

      {/* Fifi Water world section */}
      <section className="px-4 pt-32 md:pt-36 lg:pt-52 pb-10 bg-gradient-to-b from-sectionBackgroundColor to-white">
        <div className="container text-center">
          <Image
            className="mx-auto mb-6 rounded-xl"
            src="https://gspqgpzyhdhinyvtyugx.supabase.co/storage/v1/object/public/images/homePage/fifi.jpg?t=2024-05-16T12%3A48%3A13.295Z"
            width={1500}
            height={1500}
            alt="Fifi water world"
          />
          <p className="text-2xl pt-8 leading-10 text-fontColor">Come Explore Malawi's Largest children's water park</p>
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
            <HomePagePhotoGallery data={gallery} />
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