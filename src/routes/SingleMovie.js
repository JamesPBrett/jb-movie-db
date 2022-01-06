import { useParams, Link } from "react-router-dom";
import useFetch from "../contexts/useFetch";
const SingleMovie = () => {
  const { id } = useParams();
  const { isLoading, error, data: movie } = useFetch(`&i=${id}&plot=full`);

  if (isLoading) {
    return <div className="loading" />;
  }
  if (error.show) {
    return (
      <div className="page-error">
        <h1>{error.msg}</h1>
        <Link to="/" className="btn">
          back to movies
        </Link>
      </div>
    );
  }
  const {
    Poster: poster,
    Title: title,
    Plot: plot,
    Released: released,
    Genre: genre,
    Runtime: runtime,
    Director: director,
    Writer: writer,
    Actors: actors,
    Awards: awards,
    BoxOffice: boxoffice,
  } = movie;

  return (
    <section className="single-movie">
      <img src={poster} alt={title} />
      <div className="single-movie-info">
        <h2>{title}</h2>
        <p>{plot}</p>
        <p>Date Released: {released}</p>
        <p>Genre: {genre}</p>
        <p>Runtime: {runtime}</p>
        <p>Director: {director}</p>
        <p>Writer: {writer}</p>
        <p>Actors: {actors}</p>
        <p>Awards: {awards}</p>
        <p>Boxoffice: {boxoffice}</p>
        <Link to="/" className="btn">
          back to movies
        </Link>
      </div>
    </section>
  );
};

export default SingleMovie;
