import { ChangeEvent, useState } from "react";

import { Select } from "./select";
import { moviesDataProps } from "../data";
import { GenreOptionsProps } from "./options";

type DynamicListProps = {
  data: moviesDataProps;
  genreOptions: GenreOptionsProps;
};
export const DynamicList = (props: DynamicListProps) => {
  const [selectedGenre, setSelectedGenre] = useState("All");
  // const [minReleaseYear , setMinReleaseYear ] = useState<number  | string>("");
  // const [maxReleaseYear , setMaxReleaseYear ] = useState<number  | string>("");

  const handleGenreChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedGenre(e.currentTarget.value);
  };

  // const handleReleaseYearRangeChange = (e: ChangeEvent<HTMLSelectElement>) => {
  //   setMinReleaseYear(e.currentTarget.value)
  //   setMaxReleaseYear(e.currentTarget.value)
  // };
  const filteredMovie =
    selectedGenre === "All"
      ? props.data
      : props.data.filter((m) => m.genre === selectedGenre);
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>
              Name <button>II</button>
            </th>
            <th>
              Release Year<button>II</button>
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
              <tr key={index}>
                <td>{movie.title}</td>
                <td>{movie.releaseYear}</td>
                <td>{movie.genre}</td>
                <td>{movie.rating}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
