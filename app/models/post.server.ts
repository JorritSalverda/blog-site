import * as postUnderfloorHeating from "../routes/posts/underfloor-heating.mdx";
import * as postSolarPanels from "../routes/posts/solar-panels.mdx";

export type Post = {
  slug: string;
  title: string;
  intro: string;
  thumbnail: string;
  created: Date;
}

function postFromModule(module: any): Post {
  return {
    slug: module.filename.replace(/\.mdx?$/, ""),
    title: module.attributes.meta.title,
    intro: module.attributes.meta.intro,
    thumbnail: module.attributes.meta.thumbnail,
    created: new Date(module.attributes.meta.created),
  };
}

export async function getPosts(): Promise<Array<Post>> {
  const posts = [
    postFromModule(postUnderfloorHeating),
    postFromModule(postSolarPanels),
  ];

  const sortedPosts = posts.sort(
    (postA, postB) => postB.created.getTime() - postA.created.getTime(),
  );

  return sortedPosts;
}