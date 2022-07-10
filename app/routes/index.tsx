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
        <Link to={`posts/${post.slug}`} key={`${post.slug}`}>
          <article className="my-4 flex items-start gap-4 bg-white hover:bg-lime-50 my-4 p-3">
            <img src={post.thumbnail} className="w-48 max-h-36 flex-none" alt="" />
            <div className="flex-auto">
              <h2 className="text-2xl text-lime-600 mt-0">{post.title}</h2>
              {/* <h6>
                {new Intl.DateTimeFormat("en-GB").format(post.created)}
                {post.created}
              </h6> */}
              <p className="max-w-2xl">
                {post.intro}
              </p>
            </div>
          </article>
        </Link>
      ))
      }
    </>
  );
}
