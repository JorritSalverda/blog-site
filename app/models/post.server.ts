import * as postUnderfloorHeating from "../routes/posts/underfloor-heating.mdx";
import * as postSolarPanels from "../routes/posts/solar-panels.mdx";
import * as postGroundSourceHeatPump from "../routes/posts/ground-source-heat-pump.mdx";
import * as postGreenRoof from "../routes/posts/green-roof.mdx";
import * as postElectricMobility from "../routes/posts/electric-mobility.mdx";
import * as postLoadShifting from "../routes/posts/load-shifting.mdx";

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
    postFromModule(postGroundSourceHeatPump),
    postFromModule(postGreenRoof),
    // postFromModule(postElectricMobility),
    // postFromModule(postLoadShifting),
  ];

  const sortedPosts = posts.sort(
    (postA, postB) => postB.created.getTime() - postA.created.getTime(),
  );

  return sortedPosts;
}