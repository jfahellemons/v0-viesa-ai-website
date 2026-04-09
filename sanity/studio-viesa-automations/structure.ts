import type {StructureResolver} from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      // Singleton for Homepage
      S.listItem()
        .title('Homepage')
        .id('homepage')
        .child(
          S.document()
            .schemaType('homepage')
            .documentId('homepage')
        ),
      // Singleton for Footer Settings
      S.listItem()
        .title('Footer Settings')
        .id('footerSettings')
        .child(
          S.document()
            .schemaType('footerSettings')
            .documentId('footerSettings')
        ),
      // Visual divider
      S.divider(),
      // The rest of the documents, excluding the singletons
      ...S.documentTypeListItems().filter(
        (listItem) =>
          !['homepage', 'footerSettings'].includes(listItem.getId() as string)
      ),
    ])
