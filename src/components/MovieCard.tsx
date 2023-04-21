import { MovieProps } from "@/types";

export default function MovieCard({
  title,
  overview,
  poster_path,
  release_date,
}: MovieProps) {
  const imageURL = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : "/no-image-available.png";

  return (
    <div className="bg-white rounded shadow p-4">
      <img className="w-full h-64 rounded mb-4" src={imageURL} alt="{title}" />
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-gray-500 text-sm">{overview.substring(0, 150)}</p>
      <p className="text-sm font-bold mt-2">
        Release Date:
        <p className="text-gray-500 text-sm font-medium">{release_date}</p>
      </p>
    </div>
  );
}
