import type { LoaderFunction } from "@remix-run/cloudflare";
import { json } from "@remix-run/cloudflare"
import { Link, useLoaderData } from "@remix-run/react";
import { getPosts } from "~/models/post.server";

type LoaderData = Awaited<ReturnType<typeof getPosts>>;

export const loader: LoaderFunction = async () => {
  return json<LoaderData>(await getPosts());
}

export default function Index() {
  const posts = useLoaderData<LoaderData>();

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
