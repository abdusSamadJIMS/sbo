'use client'

import Link from 'next/link';
import React, { useState } from 'react';



interface DataType {
  id: number;
  title: string;
  link: string;
  has_dropdown: boolean;
  sub_menu?: {
    id: number;
    title: string;
    link: string;
  }[]
}


const menu_data: DataType[] = [
  {
    id: 1,
    title: "Home",
    link: "/",
    has_dropdown: false
  },
  {
    id: 2,
    title: "About",
    link: '/about',
    has_dropdown: false
  },
  {
    id: 3,
    title: "Services",
    link: "/service",
    has_dropdown: true,
    sub_menu: [
      {
        id: 1,
        title: "SEO Services",
        link: "/seo",
      },
      {
        id: 2,
        title: "Web Development",
        link: "/web-development",
      },
      {
        id: 3,
        title: "Digital Marketing",
        link: "/digital-marketing",
      },
      {
        id: 4,
        title: "Video Production",
        link: "/video-production",
      },
      {
        id: 5,
        title: "Scriptwriting",
        link: "/scriptwriting",
      },
      {
        id: 6,
        title: "Social Media Management",
        link: "/social-media-management",
      },
      {
        id: 7,
        title: "Photography",
        link: "/photography",
      },
      {
        id: 8,
        title: "Performance Marketing",
        link: "/performance-marketing",
      },
      {
        id: 6,
        title: "Service Detail",
        link: "/service-detail",
      },
    ]
  },
  {
    id: 4,
    title: "Portfolio",
    link: "/portfolio",
    has_dropdown: false,
    sub_menu: [
      {
        id: 1,
        title: "Portfolio",
        link: "/portfolio",
      },
      {
        id: 2,
        title: "Portfolio Details",
        link: "/portfolio-details",
      }
    ]
  },
  {
    id: 5,
    title: "Team",
    link: "/team",

    has_dropdown: false,
  },
  {
    id: 6,
    title: "Blog",
    link: "/blog",
    has_dropdown: false,
    sub_menu: [
      {
        id: 1,
        title: "Blog",
        link: "/blog",
      },
      {
        id: 2,
        title: "Blog Details",
        link: "/blog-details",
      }
    ]
  },
  {
    id: 7,
    title: "Contact",
    link: "/contact",
    has_dropdown: false,
  }


]


const MobileMenu = ({ active, navTitle, openMobileMenu }: any) => {

  return (
    <>
      <ul className="cs_nav_list" style={{ display: active ? "block" : "none" }}>
        {menu_data.map((menu) => (
          <li key={menu.id} className={`${menu.has_dropdown ? "menu-item-has-children" : ""} ${navTitle === menu.title ? "active" : ""}`}>
            <Link href={menu.link}>{menu.title}</Link>
            {menu.has_dropdown && (
              <>
                <ul className="cs_mega_wrapper" style={{ display: navTitle === menu.title ? "block" : "none", }}>
                  {menu.sub_menu?.map((subMenu) => (
                    <li key={subMenu.id}>
                      <Link href={subMenu.link}>{subMenu.title}</Link>
                    </li>
                  ))}
                </ul>
                <span onClick={() => openMobileMenu(menu.title)} className={`cs_munu_dropdown_toggle ${navTitle === menu.title ? "active" : ""}`}></span>
              </>
            )}
          </li>
        ))}
      </ul>


    </>
  );
};

export default MobileMenu;