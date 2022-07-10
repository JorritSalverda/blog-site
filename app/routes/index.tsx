import type { LoaderFunction } from "@remix-run/cloudflare";
import { json } from "@remix-run/cloudflare"
import { useLoaderData } from "@remix-run/react";
import PostCard from "~/components/post-card";
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
        <PostCard post={post} key={`${post.slug}`} />
      ))}
    </>
  );
}
