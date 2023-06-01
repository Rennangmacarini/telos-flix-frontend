import React, {
  useState, useContext, useEffect
} from 'react';
import './index.css';
import { ArrowForward } from '@mui/icons-material';
import Header from '../../components/header';
import { MovieContext } from '../../contexts/MovieContext';
import { Link, useParams } from 'react-router-dom';

export default function CardsFilms() {
  const { genre } = useParams();

  const { movies, search, movieGenres } = useContext(MovieContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(genre);

  console.log(searchTerm, selectedCategory)

  useEffect(() => {
    search(searchTerm, selectedCategory)
  }, [searchTerm, selectedCategory])

  return (
    <>
      <Header />
      <div className='cardsFilms-container'>
        <div className='cardsFilms-content'>
          <div className='input-content-cardsFilms'>
            <form action="#" method="get" autoComplete='off'>
              <input
                className='input-name-cardsFilm'
                type="text"
                name='nameFilm'
                id='inameFilm'
                placeholder='Nome'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <select
                className='select-category-cardsFilm'
                name="category"
                id="icategory"
                placeholder='Categoria'
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="" disabled>Categoria <ArrowForward /></option>
                {movieGenres.map((genre) => (
                  <option key={genre} value={genre}>{genre}</option>
                ))}
              </select>
            </form>
          </div>
          <div className='grid-cardsFilms'>
            {movies.map(movie => (
              <Link to={`/films/${movie._id}`} key={movie._id}>
                <div className="miniVideoCard">
                  <img
                    style={{ marginTop: "1rem", objectFit: "cover", height: "100%", borderRadius: 12 }}
                    src={movie.image}
                    alt={movie.title}
                  />
                  <div style={{ margin: "0 auto" }}>
                    <h1 style={{ fontSize: "14px" }}>{movie.title}</h1>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}