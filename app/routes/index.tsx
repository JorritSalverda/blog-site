import type { LoaderFunction } from "@remix-run/cloudflare";
import { json } from "@remix-run/cloudflare"
import { Link, useLoaderData } from "@remix-run/react";

import * as postA from "./posts/underfloor-heating.mdx";

export type Post = {
  slug: String;
  title: String;
  intro: String;
  created: Date;
}

function postFromModule(module: any): Post {
  return {
    slug: module.filename.replace(/\.mdx?$/, ""),
    title: module.attributes.meta.title,
    intro: module.attributes.meta.intro,
    created: new Date(module.attributes.meta.created),
  };
}

export const loader: LoaderFunction = async () => {
  const posts = [
    postFromModule(postA),
  ];

  return json(posts);
}

export default function Index() {
  const posts = useLoaderData<Array<Post>>();

  return (
    <>
      {posts.map((post) => (
        <article className="my-4" key={`${post.slug}`}>
          <h2>{post.title}</h2>
          {/* <h6>
            {new Intl.DateTimeFormat("en-GB").format(post.created)}
            {post.created}
          </h6> */}
          <p className="max-w-2xl">{post.intro}</p>
          <p className="my-2 font-medium text-lime-600"><Link to={`posts/${post.slug}`}>Read more...</Link></p>
        </article>
      ))}
    </>
  );
}
