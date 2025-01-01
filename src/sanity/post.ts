import { defineType, defineField, defineArrayMember } from "sanity";

export const post = defineType({
  name: "post",
  type: "document",
  title: "Blog",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Blog Title",
      description: "Title of the Blog",
      validation: (Rule) => Rule.required().error("The Title is Required"),
      // validation: Rule =>Rule.max(8).warning("max limit"),
    }),

    //slug field
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    //summary feild
    defineField({
      name: "summary",
      type: "text",
      title: "Summary",
      validation: (Rule) => Rule.required(),
    }),
    {
      title: 'Launch Scheduled At',
      name: 'launchAt',
      type: 'datetime',
      options: {
        dateFormat: 'YYYY-MM-DD',
        timeFormat: 'HH:mm',
        timeStep: 15,
        calendarTodayLabel: 'Today'
      }
    },
    defineField({
      name: "image",
      type: "image",
      title: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "content",
      type: "array",
      title: "Content",
      of: [
        defineArrayMember({
          type: "block",
        }),
        // Field with accept option set to JPEG
defineField({
  name: 'jpegImage',
  type: 'image', 
  options: {
    accept: 'image/jpeg,png',
  }
})
      ],
    }),
    defineField({
      name: "author",
      type: "reference",
      title: "Author",
      to: [
        {
          type: "author",
        },
      ]
    })
  ]
});
