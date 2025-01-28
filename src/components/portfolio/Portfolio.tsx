'use client'

import React, { useState } from 'react';
// import portfolio_data from '@/data/portfolio_data';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';


import scrapUncle from '@/assets/img/portfolio/scrapUncle.png';
import tabbsz from '@/assets/img/portfolio/tabbsz.png';
import ecokaari from '@/assets/img/portfolio/ecokaari.png';
import amwoodo from '@/assets/img/portfolio/amwoodo.png';


interface DataType {
  id: number;
  category: string[];
  img: StaticImageData;
  title: string;
  des: string;
}

const portfolio_data: DataType[] = [
  // portfolio pages
  {
    id: 1,
    category: ["Video Production", "Scriptwriting", 'Social Media Management', "Photography"],
    img: scrapUncle,
    title: "Scrap Uncle",
    des: "Video Production / Branding",
  },
  {
    id: 2,
    category: ["Performance Marketing", "Video Production", "Scriptwriting", 'Social Media Management', "Photography", "SEO"],
    img: tabbsz,
    title: "Tabbsz",
    des: "Digital Marketing / SEO / Branding",
  },
  {
    id: 3,
    category: ["Video Production", "Scriptwriting", 'Social Media Management', "Photography"],
    img: ecokaari,
    title: "EcoKaari",
    des: "Video Production / Branding",
  },
  {
    id: 4,
    category: ["Video Production", "Scriptwriting", 'Social Media Management', "Photography"],
    img: amwoodo,
    title: "Amwoodo",
    des: "Graphic Designing / Video Production",
  },
  // {
  //   id: 5,
  //   category: ['SEO'],
  //   img: portfolio_img_10,
  //   title: "Project 5",
  //   des: "Digital Services / App Design",
  // },
  // {
  //   id: 6,
  //   category: ['SEO', "Digital Marketing"],
  //   img: portfolio_img_11,
  //   title: "Project 6",
  //   des: "Digital Services / App Design",
  // },
]

// data
// const categories = ["All", ...new Set(portfolio_data.map((item) => item.category))];
const categories = [
  "All",
  "SEO",
  "Digital Marketing",
  "Video Production",
  "Web Development",
  "Scriptwriting",
  "Social Media Management",
  "Photography",
  "Performance Marketing"
]

const Portfolio = () => {

  const [activeCategory, setActiveCategory] = useState("All");
  const [items, setItems] = useState(portfolio_data);

  const filterItems = (cateItem: string) => {
    setActiveCategory(cateItem);
    if (cateItem === "All") {
      return setItems(portfolio_data);
    } else {
      const findItems = portfolio_data.filter((findItem) => {
        return findItem.category.includes(cateItem);
      });
      setItems(findItems);
    }
  };


  return (
    <>
      <div className="cs_height_219 cs_height_lg_120"></div>

      <section>
        <div className="container">
          <div className="cs_section_heading cs_style_1 cs_type_1">
            <div className="cs_section_heading_text">
              <h2 className="cs_section_title anim_text_writting">
                Some Recent Project We Successfully Done
              </h2>
            </div>
          </div>
        </div>
      </section>


      <div className="cs_height_50 cs_height_lg_25"></div>
      <section className="cs_ui_design">
        <div className="container">
          <div>
            <div className="row">
              <div className="cs_isotop_item_menu col-md-12">
                <ul className="anim_div_ShowZoom style_active"
                  style={{ alignItems: "center", lineHeight: "1.1lrem" }}
                >
                  {categories.map((cate, i) => (
                    <React.Fragment key={i}>
                      <li
                        onClick={() => filterItems(cate)}
                        className={`${cate === activeCategory ? "active" : ""}`}
                      >
                        {cate}
                      </li>  {' '}
                    </React.Fragment>
                  ))}
                </ul>
              </div>
            </div>
            <div className="cs_isotop_items_details row">
              {items.map((item, i) => (
                <div key={i} className="col-md-4 cs_item cs_ui_design cs_development">
                  {/* <Link href="/portfolio-details" className="cs_portfolio cs_style_1"> */}
                  <div className="cs_portfolio cs_style_1" style={{ cursor: "pointer" }}>
                    <div className="cs_portfolio_img">
                      <Image src={item.img} className="img-fluid" alt="Thumb" />
                    </div>
                    <div className="cs_portfolio_overlay"></div>
                    <div className="cs_portfolio_info">
                      <h2 className="cs_portfolio_title">
                        {item.title}
                      </h2>
                      <div className="cs_portfolio_subtitle">
                        {item.des}
                      </div>
                    </div>
                  </div>
                </div>
              ))}

            </div>
          </div>
          <div className="cs_height_70 cs_height_lg_30"></div>
          {/* <div>
            <div className="cs_hero_btn_wrap text-center">
              <div className="cs_round_btn_wrap">
                <a href="#" className="cs_hero_btn cs_round_btn btn-item"><span></span> Load More</a>
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default Portfolio;