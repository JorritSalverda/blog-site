import { Link } from "@remix-run/react";
import type { Post } from "~/models/post.server";

export default function PostCard({
  post,
}: {
  post: Post,
}) {
  return (
    <Link to={`posts/${post.slug}`}>
      <article className="my-4 flex items-start gap-4 bg-white hover:bg-lime-50 my-4 p-3">
        <div className="w-40 h-40 flex-none">
          <img src={post.thumbnail} className="w-full aspect-square object-cover" alt="" />
        </div>
        <div className="flex-auto">
          <h2 className="text-2xl mt-0">{post.title}</h2>
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
  );
}
