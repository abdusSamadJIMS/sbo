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
    has_dropdown: false,

  },
  {
    id: 2,
    title: "About",
    link: '/about',
    has_dropdown: false
  },
  {
    id: 3,
    title: "Pages",
    link: "/about",
    has_dropdown: true,
    sub_menu: [
      {
        id: 1,
        title: "About",
        link: "/about",
      },
      {
        id: 2,
        title: "Team",
        link: "/team",
      },
      {
        id: 3,
        title: "Team Details",
        link: "/team-details",
      },
      {
        id: 4,
        title: "Contact",
        link: "/contact",
      },
      {
        id: 5,
        title: "Faq",
        link: "/faq",
      },
      {
        id: 6,
        title: "Error",
        link: "/error",
      }
    ]
  },
  {
    id: 4,
    title: "Services",
    link: "/service",
    has_dropdown: true,
    sub_menu: [
      {
        id: 1,
        title: "Shooting",
        link: "/shooting",
      },
      {
        id: 2,
        title: "Video Editing",
        link: "/video-editing",
      },
      {
        id: 3,
        title: "Script Writing",
        link: "/script-writing",
      },
      {
        id: 4,
        title: "Graphic Designing",
        link: "/Social Media Management",
      },
      {
        id: 5,
        title: "Performance Marketing",
        link: "/video-editing",
      },
      {
        id: 6,
        title: "Search Engine Optimization",
        link: "/search-engine-optimization",
      },
      {
        id: 6,
        title: "Web Development",
        link: "/web-development",
      },
      {
        id: 6,
        title: "Service Detail",
        link: "/service-detail",
      },
    ]
  },
  {
    id: 5,
    title: "Portfolio",
    link: "/portfolio",
    has_dropdown: true,
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
    id: 6,
    title: "Blog",
    link: "/blog",
    has_dropdown: true,
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