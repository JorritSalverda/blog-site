import type { LoaderFunction } from "@remix-run/cloudflare";
import { json } from "@remix-run/cloudflare"
import { useLoaderData } from "@remix-run/react";
import { Link } from "@remix-run/react";

type LoaderData = { post: string, image: string };

export const loader: LoaderFunction = async ({
  params,
}) => {
  return json({ post: "underfloor-heating", image: params.image });
};

export default function ImageRoute() {
  const data = useLoaderData<LoaderData>();

  return (
    <Link to={`/posts/${data.post}`}>
      <div className="bg-slate-900/50 fixed top-0 left-0 right-0 bottom-0 flex items-center">
        <div className="w-full h-full md:w-11/12 md:h-5/6 m-auto flex-none">
          <img src={`/media/${data.post}/${data.image}`} alt="" className="max-w-full max-h-full" />
        </div>
      </div>
    </Link>
  );
}
