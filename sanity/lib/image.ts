import imageUrlBuilder, { createImageUrlBuilder, type SanityImageSource } from '@sanity/image-url';
import { dataset, projectId } from '../env'
import { client } from '@/sanity/lib/client'; // This was generated automatically when you ran the sanity init command

const builder = createImageUrlBuilder({ projectId, dataset })
// const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}