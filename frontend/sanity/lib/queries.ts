import { defineQuery } from "next-sanity";

export const HOME_QUERY = defineQuery(`*[_type == "home"][0]{
  name,
  hero,
  focusedAgencies,
  metadata
}`)