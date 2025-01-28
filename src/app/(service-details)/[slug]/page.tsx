
import AboutHomeFour from '@/components/about/AboutHomeFour';
import DetailsBanner from '@/components/details/DetailsBanner';
import ServiceDetailsFaq from '@/components/faq/ServiceDetailsFaq';
import HeroServiceDetails from '@/components/hero/HeroServiceDetails';
import ServiceAreaDetails from '@/components/service/ServiceAreaDetails';
import Wrapper from '@/layouts/Wrapper';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import { convertSlugToKey } from '@/utils/common';
import { notFound } from 'next/navigation';
import React from 'react';

// export const metadata = {
//   title: "Service Details Vixan - Digital  Creative Agency Next js Template",
// };




const index = ({ params }: { params: { slug: string } }) => {
  const services = [
    "seo",
    "web-development",
    "digital-marketing",
    "video-production",
    "scriptwriting",
    "social-media-management",
    "photography",
    "performance-marketing",
  ]

  const currentService = services.find((service) => service === params.slug);
  if (!currentService) {
    return notFound();
  }

  const key = convertSlugToKey(currentService)
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <HeroServiceDetails service={key} />
            <ServiceAreaDetails service={key} />
            <DetailsBanner />
            <ServiceDetailsFaq selectedService={key} />
            <AboutHomeFour />
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
};

export default index;