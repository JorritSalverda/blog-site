export default function ImageGrid({
  images,
}: {
  images: Array<string>,
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-3 gap-3 bg-white">
      {images.map((image, index) => (
        <img src={image} className="w-full aspect-square object-cover" alt="" key={index} />
      ))}
    </div>
  );
}
