import {HomeIcon} from '@sanity/icons'
import type {StructureBuilder, StructureResolver} from 'sanity/structure'

/**
 * Structure builder is useful whenever you want to control how documents are grouped and
 * listed in the studio or for adding additional in-studio previews or content to documents.
 * Learn more: https://www.sanity.io/docs/structure-builder-introduction
 */

const DISABLED_TYPES = ['home', 'assist.instruction.context']

export const structure: StructureResolver = (S: StructureBuilder) =>
  S.list()
    .title('Website Content')
    .items([
      ...S.documentTypeListItems()
      .filter((listItem: any) => !DISABLED_TYPES.includes(listItem.getId())),
      S.listItem()
        .title('Home')
        .child(S.document().schemaType('home').documentId('home'))
        .icon(HomeIcon),
    ])
