
import React from 'react';
interface ProcessStep {
  id: string;
  title: string;
  description: string;
}

const processSteps: Record<string, ProcessStep[]> = {
  seo: [
    {
      id: 'one',
      title: "Understand",
      description: "We begin by understanding your business and analyzing the current state of your website to identify SEO opportunities.",
    },
    {
      id: 'two',
      title: "Design",
      description: "We design a customized SEO strategy to improve visibility, targeting the right keywords and optimizing content accordingly.",
    },
    {
      id: 'three',
      title: "Development",
      description: "Our developers implement technical SEO improvements, ensuring the website is search engine-friendly with fast load times and secure architecture.",
    },
    {
      id: 'four',
      title: "Testing",
      description: "We rigorously test the website for SEO performance, analyzing rankings, site speed, and overall search engine friendliness.",
    },
  ],
  webDevelopment: [
    {
      id: 'one',
      title: "Understand",
      description: "We analyze your business needs and target audience to understand the objectives of your website.",
    },
    {
      id: 'two',
      title: "Design",
      description: "We design user-friendly wireframes and prototypes, ensuring a responsive, modern, and brand-aligned website layout.",
    },
    {
      id: 'three',
      title: "Development",
      description: "Our development team brings the design to life, building a custom website with the latest technologies and performance optimizations.",
    },
    {
      id: 'four',
      title: "Testing",
      description: "We perform extensive testing, including cross-browser and device testing, to ensure your website functions flawlessly.",
    },
  ],
  digitalMarketing: [
    {
      id: 'one',
      title: "Understand",
      description: "We assess your brand, competition, and market to determine the best digital marketing strategies.",
    },
    {
      id: 'two',
      title: "Design",
      description: "We create tailored marketing campaigns, including social media, email marketing, and paid ads to engage your audience.",
    },
    {
      id: 'three',
      title: "Development",
      description: "We set up tracking systems and launch campaigns, optimizing for conversions and engagement.",
    },
    {
      id: 'four',
      title: "Testing",
      description: "We measure the effectiveness of the campaigns, adjusting strategies based on performance metrics and A/B testing results.",
    },
  ],
  videoProduction: [
    {
      id: 'one',
      title: "Understand",
      description: "We dive into understanding your message, goals, and target audience for the video content.",
    },
    {
      id: 'two',
      title: "Design",
      description: "We design a compelling script and storyboard, ensuring the video aligns with your brand voice and objectives.",
    },
    {
      id: 'three',
      title: "Development",
      description: "Our team handles the filming, editing, and post-production, ensuring high-quality video production.",
    },
    {
      id: 'four',
      title: "Testing",
      description: "We test the video with your audience, gather feedback, and make any necessary adjustments to optimize its impact.",
    },
  ],
  scriptwriting: [
    {
      id: 'one',
      title: "Understand",
      description: "We begin by understanding the purpose, audience, and tone of the script, making sure it aligns with your brand’s message.",
    },
    {
      id: 'two',
      title: "Design",
      description: "We design an outline for the script, defining key elements, story structure, and the message that should be conveyed.",
    },
    {
      id: 'three',
      title: "Development",
      description: "Our scriptwriters draft the script, ensuring it is engaging, clear, and aligned with the brand’s voice.",
    },
    {
      id: 'four',
      title: "Testing",
      description: "We review the script, gather feedback, and refine the content to ensure the final version meets the objectives.",
    },
  ],
  socialMediaManagement: [
    {
      id: 'one',
      title: "Understand",
      description: "We analyze your brand's voice, target audience, and objectives to create a personalized social media strategy.",
    },
    {
      id: 'two',
      title: "Design",
      description: "We create a content calendar, including visually engaging posts and campaigns that resonate with your audience.",
    },
    {
      id: 'three',
      title: "Development",
      description: "We schedule and publish posts, monitor audience engagement, and respond to interactions to keep your community engaged.",
    },
    {
      id: 'four',
      title: "Testing",
      description: "We track the performance of posts and campaigns, adjusting strategies based on engagement metrics and feedback.",
    },
  ],
  photography: [
    {
      id: 'one',
      title: "Understand",
      description: "We understand the vision, tone, and goals for the photoshoot, ensuring alignment with your brand’s style and message.",
    },
    {
      id: 'two',
      title: "Design",
      description: "We plan the photoshoot, from location to shot list, ensuring we capture the right moments that highlight your brand.",
    },
    {
      id: 'three',
      title: "Development",
      description: "Our photographers capture high-quality images, focusing on composition, lighting, and attention to detail.",
    },
    {
      id: 'four',
      title: "Testing",
      description: "We review the images, make edits, and gather feedback to ensure the final photos meet your expectations and branding guidelines.",
    },
  ],
  performanceMarketing: [
    {
      id: 'one',
      title: "Understand",
      description: "We analyze your business goals, audience, and performance data to craft a performance-driven marketing strategy.",
    },
    {
      id: 'two',
      title: "Design",
      description: "We design tailored ad campaigns across various platforms, including Google Ads and Facebook, to maximize your ROI.",
    },
    {
      id: 'three',
      title: "Development",
      description: "We set up, monitor, and optimize ads, ensuring they reach the right audience and achieve the desired outcomes.",
    },
    {
      id: 'four',
      title: "Testing",
      description: "We measure the performance of ads, perform A/B testing, and optimize campaigns to achieve better results over time.",
    },
  ],
};



// interface DataType {
//   id: string;
//   title: string;
//   description: string;
// }
// const service_data: DataType[] = [
//   {
//     id: 'one',
//     title: "Understand",
//     description: `Welcome to our digital agency We specialize in helping your business most`,
//   },
//   {
//     id: 'Two',
//     title: "Design",
//     description: `Welcome to our digital agency We specialize in helping your business most`,
//   },
//   {
//     id: 'Three',
//     title: "Development",
//     description: `Welcome to our digital agency We specialize in helping your business most`,
//   },
//   {
//     id: 'Four',
//     title: "Testing",
//     description: `Welcome to our digital agency We specialize in helping your business most`,
//   },
// ]


const ServiceAreaDetails = ({ service }: { service: string }) => {
  const service_data = processSteps[service]
  return (
    <>
      <div className="cs_height_150 cs_height_lg_50"></div>
      <section>
        <div className="container">
          <div className="cs_work cs_work_text">
            <h4 className="anim_heading_title">
              Specialization & Working Process
            </h4>
            <p className="cs_mp0 anim_text">
              Welcome to our digital agency! We specialize in helping businesses like yours succeed online.
              From website design and development to digital marketing and advertising, we have the tools and
              expertise to elevate your online presence.
            </p>
          </div>
          <div className="cs_height_80 cs_height_lg_40"></div>
          <div>
            <div className="cs_work cs_work_1">
              <div className="cs_card_work cs_style_1">
                {service_data.map((item, i) => (
                  <div key={i} className="cs_card cs_mt_nthchild_0 anim_div_ShowLeftSide">
                    <div className="cs_card cs_style_1">
                      <div className="cs_posagation">
                        <div className="cs_work_style_1"></div>
                        <div className="cs_work_style_2"></div>
                      </div>
                      <div className="cs_stroke_number">
                        <span>{item.id}</span>
                      </div>
                    </div>

                    <h6 className="cs_work_title">{item.title}</h6>
                    <p className="cs_work_subtitle">
                      {item.description}
                    </p>
                  </div>
                ))}

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceAreaDetails;