
'use client'

import Link from 'next/link';
import React, { useState } from 'react';


// interface DataType {
//   faq_data: {
//     id: string;
//     question: string;
//     answer: string;
//   }[];
//   title: string;
//   description: string;
//   features: string[];
// }

// const service_faq_content: DataType = {
//   faq_data: [
//     {
//       id: 'One',
//       question: `What is the design process for branding?`,
//       answer: `Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying conse quences lalin karar or one avoids a pain that produces no resultant pleasure.`,
//     },
//     {
//       id: 'Two',
//       question: `What services does your agency offer?`,
//       answer: `Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying conse quences lalin karar or one avoids a pain that produces no resultant pleasure.`,
//     },
//     {
//       id: 'Three',
//       question: `How do you approach a new project?`,
//       answer: `Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying conse quences lalin karar or one avoids a pain that produces no resultant pleasure.`,
//     },
//     {
//       id: 'Four',
//       question: `How do you handle revisions or changes to a project?`,
//       answer: `Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying conse quences lalin karar or one avoids a pain that produces no resultant pleasure.`,
//     },
//   ],
//   title: `Others Services List`,
//   description: `Welcome to our digital agency! We specialize in helping businesses like yours succeed online. From website design and development to digital marketing and advertising, we have the tools and expertise to elevate your online presence.`,
//   features: [
//     `Web Design & Development`,
//     `Digital Marketing`,
//     `Android & IOS Development`,
//     `Digital Business Development`,
//     `Web Design & Development`,
//     `Digital Marketing`,
//   ]
// }
// const {
//   faq_data,
//   title,
//   description,
//   features
// } = service_faq_content

type FAQ = {
  id: string;
  question: string;
  answer: string;
};

type FAQData = {
  seo: FAQ[];
  webDevelopment: FAQ[];
  digitalMarketing: FAQ[];
  videoProduction: FAQ[];
  scriptwriting: FAQ[];
  socialMediaManagement: FAQ[];
  photography: FAQ[];
  performanceMarketing: FAQ[];
};

const faq: FAQData = {
  seo: [
    {
      id: 'One',
      question: 'What is SEO and why is it important?',
      answer: 'SEO, or Search Engine Optimization, is the process of optimizing a website to rank higher in search engine results pages (SERPs), improving visibility and driving more traffic to your site. It helps businesses increase their online presence and attract more customers.',
    },
    {
      id: 'Two',
      question: 'How long does SEO take to show results?',
      answer: 'SEO is a long-term strategy, and it typically takes 3-6 months to see noticeable results. Factors like competition, current website status, and SEO efforts all influence the time frame.',
    },
    {
      id: 'Three',
      question: 'What is on-page vs off-page SEO?',
      answer: 'On-page SEO refers to optimizing elements on your website like content, meta tags, and images. Off-page SEO involves building backlinks and other external signals that help improve your website’s credibility and authority.',
    },
    {
      id: 'Four',
      question: 'Do you offer local SEO services?',
      answer: 'Yes, we specialize in local SEO, which helps businesses target customers in their geographical area. This includes optimizing your Google My Business profile, local keyword targeting, and building local backlinks.',
    },
  ],
  webDevelopment: [
    {
      id: 'One',
      question: 'What is the web development process?',
      answer: 'Our web development process starts with understanding your goals, followed by designing a user-friendly interface, developing the website using the latest technologies, and testing it for performance and security.',
    },
    {
      id: 'Two',
      question: 'Do you provide ongoing website maintenance?',
      answer: 'Yes, we offer website maintenance services to ensure your site is up to date, secure, and performing optimally. This includes regular updates, backups, and performance monitoring.',
    },
    {
      id: 'Three',
      question: 'Can you create custom web applications?',
      answer: 'Yes, we specialize in creating custom web applications tailored to your business needs, whether it\'s an e-commerce platform, CRM system, or other specialized solutions.',
    },
    {
      id: 'Four',
      question: 'What technologies do you use for web development?',
      answer: 'We use a variety of modern web development technologies, including HTML, CSS, JavaScript, React, Next.js, and backend frameworks like Node.js and PHP, depending on your project requirements.',
    },
  ],
  digitalMarketing: [
    {
      id: 'One',
      question: 'What is digital marketing?',
      answer: 'Digital marketing involves using online platforms such as search engines, social media, email, and websites to promote products and services. It helps businesses increase brand awareness and drive customer engagement.',
    },
    {
      id: 'Two',
      question: 'How do you measure the success of a digital marketing campaign?',
      answer: 'We measure success through key performance indicators (KPIs) like website traffic, conversion rates, social media engagement, and return on investment (ROI) to ensure the campaign is effective.',
    },
    {
      id: 'Three',
      question: 'Do you offer pay-per-click (PPC) advertising?',
      answer: 'Yes, we provide PPC advertising services, including Google Ads and social media ads, to drive targeted traffic to your website and achieve measurable results in terms of sales and leads.',
    },
    {
      id: 'Four',
      question: 'What is social media marketing?',
      answer: 'Social media marketing involves using platforms like Facebook, Instagram, Twitter, and LinkedIn to promote your business, engage with customers, and build your brand’s online presence.',
    },
  ],
  videoProduction: [
    {
      id: 'One',
      question: 'What types of videos do you produce?',
      answer: 'We produce a wide range of videos including promotional videos, explainer videos, social media videos, product demos, corporate videos, and more to help you communicate effectively with your audience.',
    },
    {
      id: 'Two',
      question: 'How long does it take to produce a video?',
      answer: 'The timeline for video production depends on the complexity of the project. On average, it takes 2-4 weeks to complete a video, including scriptwriting, filming, editing, and revisions.',
    },
    {
      id: 'Three',
      question: 'Can you handle post-production as well?',
      answer: 'Yes, we provide full post-production services, including video editing, sound design, color grading, and adding special effects to ensure a polished final product.',
    },
    {
      id: 'Four',
      question: 'What should I expect from the video production process?',
      answer: 'We’ll guide you through the entire process, from concept and scriptwriting to filming and final editing. Our goal is to produce a high-quality video that aligns with your objectives and message.',
    },
  ],
  scriptwriting: [
    {
      id: 'One',
      question: 'What types of scripts do you write?',
      answer: 'We write scripts for promotional videos, explainer videos, commercials, social media content, corporate videos, and more, tailored to your target audience and business goals.',
    },
    {
      id: 'Two',
      question: 'How do you develop a script?',
      answer: 'Our scriptwriting process involves understanding your brand, message, and audience, followed by developing a clear structure, writing engaging content, and revising the script until it’s perfect for your needs.',
    },
    {
      id: 'Three',
      question: 'How long does it take to write a script?',
      answer: 'The time required to write a script depends on the complexity and length of the project. Typically, it takes 1-2 weeks to finalize a script, including feedback and revisions.',
    },
    {
      id: 'Four',
      question: 'Can you write scripts for commercials?',
      answer: 'Yes, we specialize in writing scripts for commercials, focusing on delivering your message in an engaging and concise format to captivate your audience.',
    },
  ],
  socialMediaManagement: [
    {
      id: 'One',
      question: 'What is social media management?',
      answer: 'Social media management involves managing and growing your brand’s presence on social media platforms, creating content, engaging with followers, and running campaigns to build relationships with your audience.',
    },
    {
      id: 'Two',
      question: 'How do you create a social media strategy?',
      answer: 'We create a customized social media strategy by analyzing your goals, target audience, and competition, then developing a content plan and engagement strategy to achieve desired outcomes.',
    },
    {
      id: 'Three',
      question: 'What platforms do you manage?',
      answer: 'We manage a variety of social media platforms including Facebook, Instagram, Twitter, LinkedIn, and more, ensuring a tailored approach for each platform to maximize results.',
    },
    {
      id: 'Four',
      question: 'Do you provide analytics and reporting?',
      answer: 'Yes, we provide regular analytics and reports to measure the effectiveness of your social media campaigns, track engagement, and refine strategies based on data.',
    },
  ],
  photography: [
    {
      id: 'One',
      question: 'What types of photography services do you offer?',
      answer: 'We offer a wide range of photography services, including product photography, corporate headshots, event photography, real estate photography, and more, tailored to your business needs.',
    },
    {
      id: 'Two',
      question: 'How do you ensure high-quality photos?',
      answer: 'We use professional-grade cameras and lighting equipment to capture high-quality photos. We also focus on composition, lighting, and attention to detail to ensure the best results.',
    },
    {
      id: 'Three',
      question: 'Do you offer photo editing services?',
      answer: 'Yes, we offer photo editing services, including color correction, retouching, and enhancements, to make sure your photos are polished and meet your expectations.',
    },
    {
      id: 'Four',
      question: 'How long does it take to deliver the photos?',
      answer: 'Delivery times depend on the complexity of the shoot and the number of photos. On average, we deliver the final edited photos within 1-2 weeks after the shoot.',
    },
  ],
  performanceMarketing: [
    {
      id: 'One',
      question: 'What is performance marketing?',
      answer: 'Performance marketing is a digital marketing strategy where businesses pay for specific actions such as clicks, leads, or sales, rather than paying for impressions. It’s designed to drive measurable results.',
    },
    {
      id: 'Two',
      question: 'How does performance marketing differ from traditional marketing?',
      answer: 'Unlike traditional marketing, performance marketing focuses on achieving specific, trackable outcomes such as conversions, sales, or other key actions. It’s more data-driven and results-oriented.',
    },
    {
      id: 'Three',
      question: 'Which platforms do you use for performance marketing?',
      answer: 'We use platforms such as Google Ads, Facebook Ads, LinkedIn Ads, and affiliate marketing to drive targeted traffic and optimize campaigns for performance-based outcomes.',
    },
    {
      id: 'Four',
      question: 'How do you track the performance of a campaign?',
      answer: 'We use advanced analytics tools to track key metrics such as clicks, conversions, cost per acquisition (CPA), return on ad spend (ROAS), and other relevant data to measure the success of your campaigns.',
    },
  ],
};

const services = [
  { "label": "Seo", "href": "/seo" },
  { "label": "Web Development", "href": "/web-development" },
  { "label": "Digital Marketing", "href": "/digital-marketing" },
  { "label": "Video Production", "href": "/video-production" },
  { "label": "Scriptwriting", "href": "/scriptwriting" },
  { "label": "Social Media Management", "href": "/social-media-management" },
  { "label": "Photography", "href": "/photography" },
  { "label": "Performance Marketing", "href": "/performance-marketing" }
];



const ServiceDetailsFaq = ({ selectedService }: { selectedService: string }) => {

  const faq_data = faq[selectedService as keyof FAQData]
  const filteredServices = services.filter(service =>
    service.label.toLowerCase().replace(/\s+/g, '') !== selectedService.toLowerCase()
  );

  // console.log(services[2].label.toLowerCase().replace(/\s+/g, ''))
  // console.log(selectedService)

  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };


  return (
    <>
      <div className="cs_height_150 cs_height_lg_60"></div>
      <div className="container">
        <div className="cs_service_details cs_type_2">
          <div className="cs_service_details_img">
            <div className="cs_accordeon">
              {faq_data.map((item, i) => (
                <div key={i}
                  onClick={() => toggleAccordion(i)}
                  className={`cs_accordion_item ${i === activeIndex ? 'active cs_icon' : ''}`}>
                  <div className="cs_accordion_header">
                    <p className="cs_accordion_title cs_m0" id={`heading${item.id}`}>
                      {item.question}
                    </p>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" width="30" style={{ transform: i === activeIndex ? 'rotate(-90deg)' : 'none' }}>
                      <path
                        d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"
                        data-name="Right" />
                    </svg>
                  </div>

                  <div className={`cs_accordion_body ${i === activeIndex ? '' : 'd-none'}`}>{item.answer}</div>
                </div>
              ))}

            </div>
          </div>
          <div className="cs_service_details_text">
            <div className="cs_specialization cs_section_heading cs_style_1">
              <div className="cs_section_heading_text">
                <h4 className="cs_section_title_4">Others Services List</h4>
              </div>
              <p>We provide SEO, web development, digital marketing, video production, and more to grow your business.</p>
              <div>
                <ul>
                  {filteredServices.map((item, i) => (
                    <li key={i}><Link href={item.href}>{item.label}</Link></li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="cs_back_to_services_btn">
              <Link href="service" className="cs_style_1">
                <span>Back To Services Page</span>
                <svg width="19" height="13" viewBox="0 0 19 13" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M18.5303 7.03033C18.8232 6.73744 18.8232 6.26256 18.5303 5.96967L13.7574 1.1967C13.4645 0.903806 12.9896 0.903806 12.6967 1.1967C12.4038 1.48959 12.4038 1.96447 12.6967 2.25736L16.9393 6.5L12.6967 10.7426C12.4038 11.0355 12.4038 11.5104 12.6967 11.8033C12.9896 12.0962 13.4645 12.0962 13.7574 11.8033L18.5303 7.03033ZM0 7.25H18V5.75H0V7.25Z"
                    fill="currentColor"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetailsFaq;