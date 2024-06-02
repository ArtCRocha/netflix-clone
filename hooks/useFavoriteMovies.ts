import fetcher from "@/lib/fetcher";
import useSWR from "swr";

export default function useFavoriteMovies() {
  const { data, isLoading, error, mutate } = useSWR("/api/favorites", fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  return { data, isLoading, error, mutate };
}
