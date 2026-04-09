import { defineField, defineType } from 'sanity'

export const homepageType = defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      description: 'Used for internal reference and SEO',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'heroSection',
    }),
    defineField({
      name: 'about',
      title: 'About Section',
      type: 'aboutSection',
    }),
    defineField({
      name: 'services',
      title: 'Services Section',
      type: 'servicesSection',
    }),
    defineField({
      name: 'logoSlider',
      title: 'Logo Slider Section',
      type: 'logoSliderSection',
    }),
    defineField({
      name: 'contactCta',
      title: 'Contact CTA Section',
      type: 'contactCtaSection',
    }),
    defineField({
      name: 'appointment',
      title: 'Appointment Section',
      type: 'appointmentSection',
    }),
  ],
})
