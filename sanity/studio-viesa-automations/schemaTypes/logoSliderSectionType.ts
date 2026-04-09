import { defineField, defineType } from 'sanity'

export const logoSliderSectionType = defineType({
  name: 'logoSliderSection',
  title: 'Logo Slider Section',
  type: 'object',
  fields: [
    defineField({
      name: 'logos',
      title: 'Logos',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'name', title: 'Company Name', type: 'string' }),
            defineField({ name: 'logoImage', title: 'Logo Image', type: 'image' }),
          ],
          preview: {
            select: {
              title: 'name',
              media: 'logoImage',
            },
          },
        },
      ],
    }),
  ],
})
