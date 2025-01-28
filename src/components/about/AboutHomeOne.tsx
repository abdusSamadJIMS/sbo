'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

interface DataType {
  img: string;
  sub_title: string;
  title: string;
  des: string;
}[]

const about_slider: DataType[] = [
  {
    img: "/assets/img/about_img.jpg",
    sub_title: "Our Mission",
    title: `Empowering Brands Through Innovation and Strategy`,
    des: `At our agency, we believe every brand has the potential to shine. By blending innovative solutions with data-driven strategies, we help businesses unlock their true potential. From creating stunning websites to crafting impactful marketing campaigns, we’re here to empower your brand and drive meaningful growth in the digital landscape.`,
  },
  {
    img: "/assets/img/about_img.jpg",
    sub_title: "Our Mission",
    title: `Delivering Tailored Digital Solutions to Elevate Your Brand`,
    des: `We understand that every business is unique. That’s why we focus on delivering customized digital solutions designed to fit your specific goals. Whether it’s enhancing your online visibility through SEO, managing your social media, or producing captivating videos, our team is dedicated to elevating your brand and ensuring lasting success.`,
  },
  {
    img: "/assets/img/about_img.jpg",
    sub_title: "Our Mission",
    title: `Turning Ideas Into Impactful Experiences`,
    des: `Our mission is to transform your vision into experiences that resonate with your audience. Through creative storytelling, professional video production, and strategic digital marketing, we craft compelling content that leaves a lasting impression. Let us bring your ideas to life and connect your brand with the people who matter most.`,
  },
]

const AboutHomeOne = () => {
  return (
    <>
      <div className="cs_height_130 cs_height_lg_60"></div>
      <Swiper
        loop={true}
        speed={1000}
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: ".cs_swiper_button_next",
          prevEl: ".cs_swiper_button_prev",
        }}
        pagination={{
          el: ".cs_pagination",
          clickable: true,
          type: "fraction",

          renderFraction: function (currentClass, totalClass) {
            return `<span class="${currentClass}"></span> 
             ${' / '}
             <span class="${totalClass}"></span>`;
          },

        }}
        className="cs_slider cs_slider_2">
        {about_slider.map((item, index) => (
          <SwiperSlide key={index} className="swiper-slide">
            <div className="cs_about cs_style_1">
              <div className="cs_about_bg cs_bg" style={{ backgroundImage: `url(${item.img})` }}></div>
              <div className="container">
                <div className="cs_about_text">
                  <div className="cs_section_heading cs_style_1">
                    <div className="cs_section_heading_text">
                      <div className="cs_section_subtitle">{item.sub_title}</div>
                      <h2 className="cs_section_title">
                        {item.title}
                      </h2>
                    </div>
                  </div>
                  <div className="cs_height_40 cs_height_lg_30"></div>
                  <p className="cs_m0">
                    {item.des}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div className="container">
          <div className="cs_swiper_controll">
            <div className="cs_pagination cs_style2 cs_primary_font"></div>
            <div className="cs_swiper_navigation_wrap">

              <div style={{ cursor: 'pointer' }} className="cs_swiper_button_prev">
                <svg width="82" height="24" viewBox="0 0 82 24" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M82 1H2L24 23" stroke="currentColor" />
                </svg>
              </div>
              <div style={{ cursor: 'pointer' }} className="cs_swiper_button_next">
                <svg width="82" height="24" viewBox="0 0 82 24" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 23H80L58 1" stroke="currentColor" />
                </svg>
              </div>

            </div>
          </div>
        </div>
      </Swiper>
    </>
  );
};

export default AboutHomeOne;