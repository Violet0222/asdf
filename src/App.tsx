// import { moviesData } from "./data";
// import { DynamicList } from "./dynamicMovieList/dynamicList";
// import { GenreOptions, maxYear, minYear } from "./dynamicMovieList/options";

// import { FadeScroll } from "./fadeScroll/fadeScroll";
import s from "./App.module.css";
// import { DynamicallyGeneratedTextArt } from "./dynamicallyGeneratedTextArt/dynamicallyGeneratedTextArt";
import { StopWatch } from "./stopWatch/stopWatch";

// import s from "./App.module.css";
function App() {
  return (
    <div className={s.app}>
      <StopWatch />
    </div>
  );
}

export default App;
