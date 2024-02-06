import ScrollCardAnimation from "@/components/ScrollCardAnimation";
import ImageFallback from "@/helpers/ImageFallback";
import MDXContent from "@/helpers/MDXContent";
import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";
import SeoMeta from "@/partials/SeoMeta";
import { Stories } from "@/types";
import { FaCheck } from "react-icons/fa6";

const About = () => {
  const aboutpage = getListPage("about/_index.md");
  const { frontmatter, content } = aboutpage;
  const { title, meta_title, description, image, alt } = frontmatter;
  const { stories }: { stories: Stories[] } = frontmatter;
  return (
    <>
      <SeoMeta
        title={title}
        meta_title={meta_title}
        description={description}
        image={image}
      />
      <section className="bg-gradient-to-t from-sectionBackgroundColor to-white border-b border-border">
        <div className="text-fontColor">
          {/* Hero Section */}
          <div className="row justify-center">
            <div className="text-center relative">
              {image && (
                <ImageFallback
                  className="mx-auto mb-6 opacity-40"
                  src={image}
                  width={1500}
                  height={1500}
                  alt={alt}
                />
              )}
              <div className="mx-4 md:mx-20 lg:mx-72 bg-secondaryColorHover/25 rounded-lg p-8 lg:absolute inset-x-0 -bottom-24">
                <h1
                  dangerouslySetInnerHTML={markdownify(title)}
                  className="mb-6 text-fontColor"
                />
                <div className="leading-10 text-lg">
                  <MDXContent content={content} />
                </div>
              </div>
            </div>
          </div>

          {/* Story Section */}
          <div className="section lg:mt-24 pt-12">
            {stories.map((story, index: number) => (
              <section
                key={index}
                className={`section-sm bg-gradient-to-b from-sectionBackgroundColor to-white ${index % 2 === 0 && "bg-gradient-to-t from-sectionBackgroundColor to-white"}`}
              >
                <ScrollCardAnimation>
                  <div className="container">
                    <div className="row items-center justify-between">
                      <div
                        className={`mb-6 md:col-5 ${index % 2 !== 0 && "md:order-2"
                          }`}
                      >
                        <ImageFallback
                          className="rounded-lg"
                          src={story.image}
                          height={800}
                          width={800}
                          alt={story.alt}
                        />
                      </div>
                      <div
                        className={`md:col-7 lg:col-6 ${index % 2 !== 0 && "md:order-1"
                          }`}
                      >
                        <h2
                          className="mb-4 text-fontColor"
                          dangerouslySetInnerHTML={markdownify(story.title)}
                        />
                        <p
                          className="mb-8 text-lg leading-10"
                          dangerouslySetInnerHTML={markdownify(story.content)}
                        />
                        <ul>
                          {story.bulletpoints?.map((bullet: string) => (
                            <li className="relative text-lg mb-4 pl-6" key={bullet}>
                              <FaCheck className={"absolute left-0 top-1.5 text-accentColor text-lg"} />
                              <span dangerouslySetInnerHTML={markdownify(bullet)} />
                            </li>
                          ))}
                        </ul>
                        {story.button.enable && (
                          <a
                            className="btn btn-primary mt-5"
                            href={story.button.link}
                          >
                            {story.button.label}
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </ScrollCardAnimation>
              </section>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;