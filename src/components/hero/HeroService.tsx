
import React from 'react';
import Link from 'next/link';


interface DataType {
  id: number;
  link: string;
  title: string;
  des: string;
}

const banner_data: DataType[] = [
  {
    id: 1,
    title: "SEO Services",
    link: "/seo",

    des: "Boost your online visibility with expert SEO strategies. We optimize your website for search engines to ensure your business ranks higher, driving more traffic and improving your online presence.",
  },
  {
    id: 2,
    title: "Web Development",
    link: "/web-development",

    des: "Create stunning, user-friendly websites tailored to your brand's identity. Our web development services ensure a seamless and engaging online experience for your customers, driving growth and success.",
  },
  {
    id: 3,
    title: "Digital Marketing",
    link: "/digital-marketing",

    des: "Reach your target audience with our customized digital marketing campaigns. We use data-driven strategies to help you connect with your audience, increase conversions, and build brand loyalty.",
  },
  {
    id: 4,
    title: "Video Production",
    link: "/video-production",

    des: "Tell your story with high-quality videos that captivate your audience. We manage the entire process from concept to production, helping you communicate your message effectively through visuals.",
  },
  {
    id: 5,
    title: "Scriptwriting Services",
    link: "/scriptwriting",

    des: "Craft compelling scripts that bring your ideas to life. Our expert scriptwriters help you deliver your message with clarity and creativity, ensuring your content resonates with your target audience.",
  },
  {
    id: 6,
    title: "Social Media Management",
    link: "/social-media-management",

    des: "Elevate your social media presence with expert management services. We create engaging content, plan strategic campaigns, and build your community to keep your audience connected and engaged.",
  },
  {
    id: 7,
    title: "Photography Services",
    link: "/photography",

    des: "Capture the essence of your brand with professional photography. We provide high-quality images that showcase your products and services, helping you create a lasting impression on your audience.",
  },
  {
    id: 8,
    title: "Performance Marketing",
    link: "/performance-marketing",

    des: "Maximize your ROI with performance-driven marketing strategies. We focus on measurable results, utilizing channels like paid search, display advertising, and affiliate marketing to drive sales and conversions.",
  },
]

const HeroService = () => {
  return (
    <>
      <div className="cs_height_219 cs_height_lg_120"></div>
      <section className="position-relative">
        <div className="container">
          <div className="cs_section_heading cs_style_1">
            <div className="cs_section_heading_text">
              <h2 className="cs_section_title anim_word_writting">
                Transform Your Online Presence with Our Digital Agency Services
              </h2>
            </div>
          </div>
          <div className="cs_height_100 cs_height_lg_60"></div>
          <div className="cs_card_1_list">
            {banner_data.map((item, i) =>
              <div key={i} className="cs_card cs_style_1 anim_div_ShowDowns">
                <div className="cs_card_left">
                  <div className="cs_card_number cs_primary_font" style={{ backgroundImage: `url('/assets/img/hero_img_1.jpg')` }}>
                    0{i + 1}
                  </div>
                </div>
                <div className="cs_card_right">
                  <div className="cs_card_right_in">
                    <h2 className="cs_card_title">
                      <Link href={item.link}>{item.title}</Link>
                    </h2>
                    <div className="cs_card_subtitle">{item.des}</div>
                  </div>
                </div>
                <div className="cs_card_link_wrap">
                  <Link href={item.link} className="cs_card_link">
                    <span>
                      <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clipRule="evenodd"
                          d="M0.340728 29.2063C0.722095 29.5875 1.34043 29.5875 1.72188 29.2063L29.0656 1.8625C29.4469 1.48106 29.4469 0.862698 29.0656 0.481253C28.6842 0.100002 28.0658 0.100002 27.6844 0.481253L0.340728 27.825C-0.0406592 28.2064 -0.0406592 28.8248 0.340728 29.2063Z"
                          fill="currentColor"></path>
                        <path fill-rule="evenodd" clipRule="evenodd"
                          d="M28.375 26.5625C28.9143 26.5625 29.3516 26.1252 29.3516 25.5859V1.17188C29.3516 0.632618 28.9143 0.195312 28.375 0.195312H3.96094C3.42168 0.195312 2.98438 0.632618 2.98438 1.17188C2.98438 1.71113 3.42168 2.14844 3.96094 2.14844H27.3984V25.5859C27.3984 26.1252 27.8357 26.5625 28.375 26.5625Z"
                          fill="currentColor"></path>
                      </svg>
                    </span>
                    <span>
                      <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clipRule="evenodd"
                          d="M0.340728 29.2063C0.722095 29.5875 1.34043 29.5875 1.72188 29.2063L29.0656 1.8625C29.4469 1.48106 29.4469 0.862698 29.0656 0.481253C28.6842 0.100002 28.0658 0.100002 27.6844 0.481253L0.340728 27.825C-0.0406592 28.2064 -0.0406592 28.8248 0.340728 29.2063Z"
                          fill="currentColor"></path>
                        <path fill-rule="evenodd" clipRule="evenodd"
                          d="M28.375 26.5625C28.9143 26.5625 29.3516 26.1252 29.3516 25.5859V1.17188C29.3516 0.632618 28.9143 0.195312 28.375 0.195312H3.96094C3.42168 0.195312 2.98438 0.632618 2.98438 1.17188C2.98438 1.71113 3.42168 2.14844 3.96094 2.14844H27.3984V25.5859C27.3984 26.1252 27.8357 26.5625 28.375 26.5625Z"
                          fill="currentColor"></path>
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
            )}

          </div>
        </div>
      </section>
    </>
  );
};

export default HeroService;