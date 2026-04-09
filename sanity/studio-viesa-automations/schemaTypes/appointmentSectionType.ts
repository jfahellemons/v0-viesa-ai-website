import { defineField, defineType } from 'sanity'

export const appointmentSectionType = defineType({
  name: 'appointmentSection',
  title: 'Appointment Section',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    }),
  ],
})
