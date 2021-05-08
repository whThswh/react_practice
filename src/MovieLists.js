import React from 'react';
import propTypes from 'prop-types';
import "./Movie.css"

function MovieLists( {id, year, title, summary, poster, genres} ) {
  return( // summary는 string이지만 slice메소드를 사용할 수 있다!
    <div className="movieJS">
      <img src={poster} alt={title} title={title} />
      <div>
        <h3 className="movie_title">{title}</h3>
        <h5 className="movie_year">{year}</h5>
        <ul className="genres">{genres.map((genre, index) => 
          <li className="genres_genre" key={index}>{genre}</li>)}
        </ul>
        <p className="movie_summary">{summary.slice(0, 180)}...</p>
      </div>
    </div>
  )
}

MovieLists.propTypes = {
  id: propTypes.number.isRequired,
  year: propTypes.number.isRequired,
  title: propTypes.string.isRequired,
  summary: propTypes.string.isRequired,
  poster: propTypes.string.isRequired,
  genres: propTypes.arrayOf(propTypes.string).isRequired
}

export default MovieLists;