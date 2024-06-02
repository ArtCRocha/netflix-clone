import Billboard from "@/components/Billboard";
import MoviesList from "@/components/MoviesList";
import Navbar from "@/components/Navbar";
import useFavoriteMovies from "@/hooks/useFavoriteMovies";
import useMovieList from "@/hooks/useMoviesList";
import { NextPageContext } from "next";
import { getSession } from "next-auth/react";

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

export default function Home() {
  const { data: movies = [] } = useMovieList();
  const { data: favoites = [] } = useFavoriteMovies();

  return (
    <>
      <Navbar />
      <Billboard />
      <div className="pb-40">
        <MoviesList data={movies} title="Recomendados Para Você" />
        <MoviesList data={favoites} title="Minha Lista" />
      </div>
    </>
  );
}
