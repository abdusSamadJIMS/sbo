
import React from 'react';
import Image, { StaticImageData } from 'next/image';
import banner_img from '@/assets/img/service_details_banner.jpg';
import seoImage from '@/assets/img/services/seo.jpg';
import webImage from '@/assets/img/services/webDev.jpg';
import digitalImage from '@/assets/img/services/digitalMarketing.jpg';
import performanceImage from '@/assets/img/services/performance.jpg';
import photoImage from '@/assets/img/services/photography.jpg';
import scriptImage from '@/assets/img/services/scriptWriting.jpg';
import videoImage from '@/assets/img/services/videoProduction.jpg';
import socialImage from '@/assets/img/services/socialMedia.jpg';


interface HeroContent {
  title: string;
  description: string;
  features: string[];
  img?: StaticImageData;
}

interface HeroContentCollection {
  [key: string]: HeroContent; // Dynamic keys for services like 'seo', 'webDevelopment', etc.
}
const hero_content: HeroContentCollection = {
  seo: {
    title: "SEO Services",
    description: `Boost your online visibility with our expert SEO services. We help businesses like yours rank higher on search engines, attract more traffic, and drive measurable growth. Let's optimize your website for success!`,
    features: [
      `Keyword research and strategy.`,
      `On-page and off-page SEO optimization.`,
      `Technical SEO improvements.`,
      `Regular performance tracking and reporting.`,
    ],
    img: seoImage
  },
  webDevelopment: {
    title: "Web Development",
    description: `Build a website that truly represents your brand. Our team specializes in creating modern, user-friendly, and responsive websites designed to deliver outstanding experiences and results.`,
    features: [
      `Custom website design and development.`,
      `Mobile-first, responsive designs.`,
      `Seamless user experience and performance.`,
      `Secure and scalable architecture.`,
    ],
    img: webImage
  },
  digitalMarketing: {
    title: "Digital Marketing",
    description: `Drive growth and engagement with our data-driven digital marketing strategies. From content creation to social media ads, we craft campaigns tailored to your goals.`,
    features: [
      `Social media marketing and advertising.`,
      `Email marketing campaigns.`,
      `Content strategy and creation.`,
      `Performance tracking and optimization.`,
    ],
    img: digitalImage
  },
  videoProduction: {
    title: "Video Production",
    description: `Tell your story with powerful visuals. We create engaging, high-quality videos that captivate your audience and communicate your message effectively.`,
    features: [
      `Creative concept and scripting.`,
      `High-definition video production.`,
      `Professional editing and post-production.`,
      `Custom animations and motion graphics.`,
    ],
    img: videoImage
  },
  scriptwriting: {
    title: "Scriptwriting",
    description: `Bring your ideas to life with compelling scripts. Our talented writers craft engaging stories that resonate with your audience and deliver your message effectively.`,
    features: [
      `Creative storyboarding and ideation.`,
      `Tailored scripts for various formats.`,
      `Dialogue that captivates and connects.`,
      `Scripts optimized for video production.`,
    ],
    img: scriptImage
  },
  socialMediaManagement: {
    title: "Social Media Management",
    description: `Grow your brand's presence on social media. From strategy to execution, we manage your platforms to build engagement and drive results.`,
    features: [
      `Social media strategy development.`,
      `Content creation and scheduling.`,
      `Community engagement and management.`,
      `Analytics and performance reporting.`,
    ],
    img: socialImage
  },
  photography: {
    title: "Photography",
    description: `Capture moments that matter. Our professional photography services bring your brand to life with stunning visuals tailored to your needs.`,
    features: [
      `Brand and product photography.`,
      `Event coverage and lifestyle shoots.`,
      `Professional editing and retouching.`,
      `High-resolution images for all platforms.`,
    ],
    img: photoImage
  },
  performanceMarketing: {
    title: "Performance Marketing",
    description: `Achieve measurable results with performance-driven marketing strategies. We focus on ROI, ensuring every campaign delivers maximum impact.`,
    features: [
      `Pay-per-click (PPC) campaigns.`,
      `Performance tracking and analytics.`,
      `Conversion rate optimization.`,
      `Customized marketing strategies.`,
    ],
    img: performanceImage
  },


};




const HeroServiceDetails = ({ service }: { service: string }) => {


  const { title, description, features, img } = hero_content[service]
  return (
    <>
      <div className="cs_height_219 cs_height_lg_120"></div>
      <section>
        <div className="container">
          <div className="cs_section_heading cs_style_1 cs_type_1">
            <div className="cs_section_heading_text">
              <h2 className="cs_section_title anim_text_writting">
                {title}
              </h2>
            </div>
          </div>
          <div className="cs_height_100 cs_height_lg_60"></div>
          <div className="cs_service_details">
            <div className="cs_service_details_img">
              <div className="cs_style_img">
                <Image placeholder='blur' src={img ? img : banner_img} alt="service_details_banner" />
              </div>
            </div>
            <div className="cs_service_details_text">
              <div className="cs_service_details_p">
                <p className="anim_text">{description}</p>
                <ul className="anim_div_ShowDowns">
                  {features.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroServiceDetails;