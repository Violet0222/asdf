import { moviesData } from "./data";
import { DynamicList } from "./dynamicMovieList/dynamicList";
import { GenreOptions } from "./dynamicMovieList/options";

function App() {
  return (
    <>
      <div>111</div>
      <DynamicList data={moviesData} genreOptions={GenreOptions} />
    </>
  );
}

export default App;
