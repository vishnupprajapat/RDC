

import { sanityFetch } from "@/sanity/lib/live";
import { HOME_QUERY } from "@/sanity/lib/queries";
import { Metadata } from "next";
import processHomeMetadata from "./lib/processMetadata";
import { resolveOpenGraphImage, urlForImage } from "@/sanity/lib/utils";
import Hero from "../components/Hero";
import {AgencyBrands} from "../components/AgencyBrands";
import { toPlainText } from "next-sanity";

export async function generateMetadata(): Promise<Metadata> {
  const { data: home } = await sanityFetch({
    query: HOME_QUERY,
    // Metadata should never contain stega
    stega: false,
  });
  const title = home?.metadata?.title || "RDC";
  const description = home?.metadata?.description || "RDC is a platform for sharing and discovering resources related to web development, design, and more.";

  const ogImage = resolveOpenGraphImage(home?.metadata?.image);
  let metadataBase: URL | undefined = undefined;
  try {
    metadataBase = new URL(process.env.NEXT_PUBLIC_BASE_URL || "https://rdc.example.com");
  } catch {
    // ignore
  }
  return {
    metadataBase,
    title: {
      template: `%s | ${title}`,
      default: title,
    },
    description: description,
    openGraph: {
      images: ogImage ? [ogImage] : [],
    },
  };
}
export default async function Page() {
  const { data:home } = await sanityFetch({
    query: HOME_QUERY,
  });
 const hero = home?.hero
 const focusedAgencies = home?.focusedAgencies;

  return (
  <>
    {hero && <Hero hero={hero} />}
    {focusedAgencies&&<AgencyBrands focusedAgencies = {focusedAgencies}/>}
  </>
  );
}
