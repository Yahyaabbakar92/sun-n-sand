import { getListPage } from "@/lib/contentParser";
import SeoMeta from "@/partials/SeoMeta";
import { RegularPage } from "@/types";
import { FaMapLocation } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaClock } from "react-icons/fa";
import Image from "next/image";
import image1 from "public/images/close-up-flowers-around-fountain.jpg"
import image2 from "public/images/view-of-beach-and-lake-at-sunset.jpg"
import ScrollCardAnimation from "@/components/ScrollCardAnimation";
import ContactForm from "@/layouts/ContactFormSection";

const Contact = async () => {
  const data: RegularPage = getListPage("contact/_index.md");
  const { frontmatter } = data;
  const { title, description, meta_title, image } = frontmatter;

  return (
    <>
      <SeoMeta
        title={title}
        meta_title={meta_title}
        description={description}
        image={image}
      />
      <div className="rounded-lg relative">
        <Image
          className="mx-auto mb-6 opacity-40"
          src={image1}
          width={1500}
          height={1500}
          alt="close up flowers around fountain"
        />
        <h1
          className="mb-6 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-fontColor"
        >Contact & Reservations</h1>
      </div>
      <section className="mt-8 pb-8 bg-gradient-to-t from-sectionBackgroundColor to-white border-b border-border">
        <div className="container">
          <ScrollCardAnimation>
            <div className="lg:grid grid-cols-2 gap-8">
              <div className="mx-auto mb-8 md:px-20 lg:px-0">
                <h2 className="h2 text-fontColor">Contact Us</h2>
                <ul className="mt-6 ">
                  <li className="flex gap-2 items-center text-lg text-fontColor"><FaMapLocation className="text-accentColor" /> Address Along Lake Malawi Beach, Mangochi</li>
                  <li className="flex gap-2 items-center text-lg text-fontColor mt-4"><FaPhone className="text-accentColor" /> Telephone: +265 996 492 399</li>
                  <li className="flex gap-2 items-center text-lg text-fontColor mt-4"><MdEmail className="text-accentColor" /> E-mail: gm@sunnsandmw.com</li>
                  <li className="flex gap-2 items-center text-lg text-fontColor mt-4"><FaClock className="text-accentColor" /> Office Hours: Monday – Sunday, 08:00 – 17:00</li>
                </ul>
                <Image
                  className="mb-6 mt-8 rounded-lg"
                  src={image2}
                  width={600}
                  height={300}
                  alt="view of beach and lake at sunset"
                />
                <p className="text-lg leading-8 mt-8 italic text-fontColor">We aim to respond to emails within 24 hours. Please check your spam folder if our response is not found in your inbox. For conference, group, or wedding bookings, email our reservations team directly using the listed contact details.</p>
              </div>
              <ContactForm />
            </div>
          </ScrollCardAnimation>
        </div>
      </section>
    </>
  );
};

export default Contact;