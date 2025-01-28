'use client'
import React from 'react';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';

import { Swiper, SwiperSlide } from "swiper/react";

import portfolio_img_1 from '@/assets/img/portfolio/scrapUncle.png';
import portfolio_img_2 from '@/assets/img/portfolio/tabbsz.png';
import portfolio_img_3 from '@/assets/img/portfolio/ecokaari.png';
import portfolio_img_4 from '@/assets/img/portfolio/amwoodo.png';

interface DataType {
  img: StaticImageData;
  title: string;
  category: string;
}[]

const portfolio_slider: DataType[] = [
  {
    img: portfolio_img_1,
    title: `Scrap Uncle`,
    category: `Social Media Management / Video Production / Scrip Writing`,
  },
  {
    img: portfolio_img_2,
    title: `Tabbsz E-Store`,
    category: `Performance Marketing / Video Production / Scrip Writing`,
  },
  {
    img: portfolio_img_3,
    title: `Ecokaari`,
    category: `Video Production / Scrip Writing`,
  },
  {
    img: portfolio_img_4,
    title: `Amwoodo`,
    category: `Video Production / Scrip Writing`,
  },
]


const PortfolioHomeOne = () => {
  return (
    <>
      <div className="cs_horizontal_scroll_wrap">
        <div className="cs_height_145 cs_height_lg_60"></div>
        <div className="container">
          <div className="cs_section_heading cs_style_1 cs_type_2">
            <div className="cs_section_heading_text">
              <div className="cs_section_subtitle anim_div_ShowZoom">
                Portfolio
              </div>
              <h2 className="cs_section_title anim_heading_title">
                Some Recent Project We Successfully Done
              </h2>
            </div>
          </div>
          <div className="cs_height_100 cs_height_lg_60"></div>
        </div>
        <Swiper
          loop={true}
          speed={1000}
          slidesPerView="auto"
          pagination={{
            el: ".cs_pagination",
            clickable: true,
          }}
          className="cs_horizontal_scrolls anim_div_ShowDowns">
          {portfolio_slider.map((item, i) =>
            <SwiperSlide key={i} className="swiper-slide">
              <div className="cs_horizontal_scroll ">
                {/* <Link href="/portfolio-details" className="cs_portfolio cs_style_1 "> */}
                <div className="cs_portfolio cs_style_1 " style={{ cursor: "pointer" }}>
                  <div className="cs_portfolio_img ">
                    <Image src={item.img} alt="Thumb" />
                  </div>
                  <div className="cs_portfolio_overlay"></div>
                  <div className="cs_portfolio_info">
                    <h2 className="cs_portfolio_title">
                      {item.title}
                    </h2>
                    <div className="cs_portfolio_subtitle">
                      {item.category}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          )}

        </Swiper>
      </div>
      <div className="cs_height_100 cs_height_lg_60"></div>
      <div className="cs_section_heading_right cs_btn_anim text-lg-center container">
        <Link href="/portfolio" className="cs_btn cs_style_1">
          <span>View All Projects</span>
          <svg width="19" height="13" viewBox="0 0 19 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M18.5303 7.03033C18.8232 6.73744 18.8232 6.26256 18.5303 5.96967L13.7574 1.1967C13.4645 0.903806 12.9896 0.903806 12.6967 1.1967C12.4038 1.48959 12.4038 1.96447 12.6967 2.25736L16.9393 6.5L12.6967 10.7426C12.4038 11.0355 12.4038 11.5104
                12.6967 11.8033C12.9896 12.0962 13.4645 12.0962 13.7574 11.8033L18.5303 7.03033ZM0 7.25H18V5.75H0V7.25Z"
              fill="currentColor"></path>
          </svg>
        </Link>
      </div>
      <div className="cs_height_150 cs_height_lg_60"></div>

    </>
  );
};

export default PortfolioHomeOne;