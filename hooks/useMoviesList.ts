import fetcher from "@/lib/fetcher";
import useSWR from "swr";

export default function useMovieList() {
  const { data, isLoading, error } = useSWR("/api/movies", fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  return { data, isLoading, error };
}
