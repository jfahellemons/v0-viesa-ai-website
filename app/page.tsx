import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { Services } from '@/components/Services'
import { ContactCTA } from '@/components/ContactCTA'
import { LogoSlider } from '@/components/LogoSlider'
import { Appointment } from '@/components/Appointment'
import { Footer } from '@/components/Footer'
import { type SanityDocument } from "next-sanity";

import { client } from "@/sanity/client";

const HOMEPAGE_QUERY = `*[_type == "homepage"][0]{
  title,
  hero {
    title,
    subtitle,
    primaryButtonText,
    secondaryButtonText,
    backgroundImage {
      asset->{ url }
    }
  },
  about {
    title,
    paragraphs,
    bulletPoints,
    statistics
  },
  services {
    title,
    description,
    servicesList
  },
  logoSlider {
    logos[]{
      name,
      font,
      logoImage {
        asset->{ url }
      }
    }
  },
  contactCta {
    title,
    subtitle,
    buttonText,
    image {
      asset->{ url }
    }
  },
  appointment {
    title,
    subtitle
  }
}`;

const FOOTER_QUERY = `*[_type == "footerSettings"][0]`;

const options = { next: { revalidate: 30 } };

export default async function Home() {
  const homepage = await client.fetch<SanityDocument | null>(HOMEPAGE_QUERY, {}, options);
  const footerSettings = await client.fetch<SanityDocument | null>(FOOTER_QUERY, {}, options);

  return (
    <main className="bg-background text-foreground">
      <Hero 
        title={homepage?.hero?.title}
        subtitle={homepage?.hero?.subtitle}
        primaryButtonText={homepage?.hero?.primaryButtonText}
        secondaryButtonText={homepage?.hero?.secondaryButtonText}
        backgroundImage={homepage?.hero?.backgroundImage?.asset?.url}
      />
      <About 
        title={homepage?.about?.title}
        paragraphs={homepage?.about?.paragraphs}
        bulletPoints={homepage?.about?.bulletPoints}
        statistics={homepage?.about?.statistics}
      />
      <Services 
        title={homepage?.services?.title}
        description={homepage?.services?.description}
        servicesList={homepage?.services?.servicesList}
      />
      <LogoSlider logos={homepage?.logoSlider?.logos} />
      <ContactCTA 
        title={homepage?.contactCta?.title}
        subtitle={homepage?.contactCta?.subtitle}
        buttonText={homepage?.contactCta?.buttonText}
        image={homepage?.contactCta?.image}
      />
      <Appointment 
        title={homepage?.appointment?.title}
        subtitle={homepage?.appointment?.subtitle}
      />
      <Footer 
        companyName={footerSettings?.companyName}
        companyDescription={footerSettings?.companyDescription}
        columns={footerSettings?.columns}
        copyrightText={footerSettings?.copyrightText}
      />
    </main>
  )
}

