import { ChangeEvent, useState } from "react";

import { Select } from "./select";
import { moviesDataProps } from "../data";
import { OptionsProps } from "./options";

type DynamicListProps = {
  data: moviesDataProps;
  genreOptions: OptionsProps;
  minYear: OptionsProps;
  maxYear: OptionsProps;
};
export const DynamicList = (props: DynamicListProps) => {
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [minReleaseYear, setMinReleaseYear] = useState<number | string>("");
  const [maxReleaseYear, setMaxReleaseYear] = useState<number | string>("");
  const [showMovieInfo, setShowMovieInfo] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState<number>(0);

  const handleShowSelectedMovie = (index: number) => {
    setShowMovieInfo(true);
    setSelectedMovie(index);
  };

  const handleGenreChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedGenre(e.currentTarget.value);
  };
  //   const movieInfo=props.data.filter((m,index)=>{ if(index===selectedMovie){
  // return m.director
  //   }})

  // const handleReleaseYearRangeChange = (e: ChangeEvent<HTMLSelectElement>) => {
  //   setMinReleaseYear(e.currentTarget.value);
  //   setMaxReleaseYear(e.currentTarget.value);
  // };
  const filteredMovie =
    selectedGenre === "All"
      ? props.data
      : props.data.filter((m) => m.genre === selectedGenre);
  const selectedMovieInfo =
    selectedMovie !== null ? props.data[selectedMovie] : null;
  return (
    <>
      {showMovieInfo && selectedMovieInfo ? (
        <div>
          <h2>{selectedMovieInfo.director}</h2>
        </div>
      ) : (
        <table>
          <thead>
            <tr>
              <th>
                Name <button>II</button>
              </th>
              <th>
                Release Year
                {/* <Select value={minReleaseYear}
                onChange={handleReleaseYearRangeChange}
                options={props.minYear}/> */}
              </th>
              <th>
                Genre
                <Select
                  value={selectedGenre}
                  onChange={handleGenreChange}
                  options={props.genreOptions}
                />
              </th>
              <th>
                Rating<button>II</button>
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredMovie.map((movie, index) => {
              return (
                <>
                  <tr key={index}>
                    <td onClick={() => handleShowSelectedMovie(index)}>
                      {movie.title}
                    </td>
                    {showMovieInfo ? <div>{movie.director}</div> : null}
                    <td>{movie.releaseYear}</td>
                    <td>{movie.genre}</td>
                    <td>{movie.rating}</td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      )}
    </>
  );
};
