import fetcher from "@/lib/fetcher";
import useSWR from "swr";

export default function useMovie(id: string) {
  const { data, isLoading, error } = useSWR(`/api/movies/${id}`, fetcher);

  return { data, isLoading, error };
}
