import { useRouter } from "next/router";
import { BsFillPlayFill } from "react-icons/bs";

interface PlayButtonProps {
  movieId: string;
}

export default function PlayButton({ movieId }: PlayButtonProps) {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/watch/${movieId}`)}
      className="bg-white cursor-pointer rounded-md py-1 md:py-2 px-2 md:px-4 w-auto text-xl lg:text-lg font-semibold flex flex-row items-center hover:bg-neutral-300 transition"
    >
      <BsFillPlayFill size={30} />
      Assistir
    </div>
  );
}
