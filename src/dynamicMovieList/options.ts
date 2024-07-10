type GenreOption = { value: string; label: string };

export type GenreOptionsProps = Array<GenreOption>;

export const GenreOptions = [
  { value: "All", label: "All" },
  { value: "Sci-Fi", label: "Sci-Fi" },
  { value: "Action", label: "Action" },
  { value: "Crime", label: "Crime" },
  { value: "Drama", label: "Drama" },
];
