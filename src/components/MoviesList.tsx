import { isEmpty } from "lodash";
import { BsFillPlayFill } from "react-icons/bs";
import FavoriteButton from "./FavoriteButton";
import { useRouter } from "next/router";
import { BiChevronDown } from "react-icons/bi";
import useInfoModal from "@/hooks/useInfoModal";

interface MoviesListProps {
  data: Record<string, any>[];
  title: string;
}

export default function MoviesList({ data, title }: MoviesListProps) {
  const router = useRouter();
  const { openModal } = useInfoModal();

  if (isEmpty(data)) {
    return null;
  }

  return (
    <div className="px-4 md:px-12 mt-4 space-y-8">
      <div>
        <p className="text-white text-md md: text-xl lg:text-2xl font-semibold mb-4">
          {title}
        </p>
        <div className="grid grid-cols-4 gap-2">
          {data.map((movie) => (
            <div
              key={movie.id}
              className="group bg-zinc-900 col-span relative h-[12w]"
            >
              <img
                className="cursor-pointer object-cover transition duration shadow-xl rounded-md group-hover:opacity-90 sm:group-hover:opacity-0 delay-100 w-full h-[12w]"
                src={movie.thumbnail}
                alt="Thumbnail"
              />
              <div className="opacity-0 absolute top-0 transition duration-200 z-10 invisible sm:visible delay-100 w-full scale-0 group-hover:scale-110 group-hover:-translate-y-[6vw] group-hover:translate-x-[2vw] group-hover:opacity-100">
                <video
                  autoPlay
                  muted
                  loop
                  className="cursor-pointer object-cover transition duration shadow-xl rounded-t-md w-full h-[12w]"
                  src={movie.videoUrl}
                ></video>
                <div className="z-10 bg-zinc-800 p-2 lg:p-4 absolute w-full transition shadow-md rounded-b-md">
                  <div className="flex flex-row items-center gap-3">
                    <div
                      onClick={() => router.push(`/watch/${movie?.id}`)}
                      className="cursor-pointer w-6 h-6 lg:w-10 lg:h-10 bg-white rounded-full flex justify-center items-center transition hover:bg-neutral-300"
                    >
                      <BsFillPlayFill size={30} />
                    </div>
                    <FavoriteButton movieId={movie?.id} />
                    <div
                      onClick={() => openModal(movie.id)}
                      className="cursor-pointer ml-auto group/item w-6 h-6 lg:w-10 lg:h-10 border-white border-2 rounded-full flex items-center justify-center transition hover:bg-neutral-300"
                    >
                      <BiChevronDown className="text-white" size={20} />
                    </div>
                  </div>
                  <div className="flex flex-row mt-4 gap-2 items-center gap-2">
                    <p className="text-green-400 text-[10px] lg:text-sm">
                      93% releante
                    </p>
                    <p className="text-white text-[10px] lg:text-sm">
                      {movie.duration}
                    </p>
                  </div>
                  <p className="text-white text-[10px] lg:text-sm mt-2">
                    {movie.genre}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
