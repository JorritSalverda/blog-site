import { Link } from "@remix-run/react";

export default function ImageGrid({
  basePath,
  images,
}: {
  basePath: String,
  images: Array<string>,
}) {
  if (images.length == 1) {
    return (
      <>
        {images.map((image, index) => (
          <Link to={`./${image}`} key={index}>
            <img src={basePath + image} alt="" />
          </Link>
        ))}
      </>
    );
  }


  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-3 gap-3 bg-white">
      {images.map((image, index) => (
        <Link to={`./${image}`} key={index}>
          <img src={basePath + image} className="w-full aspect-square object-cover" alt="" />
        </Link>
      ))}
    </div>
  );
}
