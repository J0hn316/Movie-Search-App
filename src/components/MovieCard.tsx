import React from 'react';
import type { Movie } from '../types/movie';

interface MoveCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MoveCardProps> = ({ movie }) => {
  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : 'https://via.placeholder.com/500x750?text=No+Image';

  const releaseYear = movie.release_date
    ? new Date(movie.release_date).getFullYear()
    : 'N/A';

  return (
    <div className="bg-white shadow-md rounded overflow-hidden">
      <img
        src={posterUrl}
        alt={movie.title}
        className="w-full h-72 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-1">
          {movie.title}
        </h3>
        <p className="text-sm text-gray-500 mb-1">📅 {releaseYear}</p>
        <p className="text-sm text-yellow-600">
          ⭐ {movie.vote_average.toFixed(1)}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
