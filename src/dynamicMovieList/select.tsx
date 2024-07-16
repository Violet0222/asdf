import { ChangeEvent } from "react";
import { OptionsProps } from "./options";

type SelectProps = {
  value: number | string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  options: OptionsProps;
};

export const Select = (props: SelectProps) => {
  return (
    <>
      <select value={props.value} onChange={props.onChange}>
        {props.options.map((o) => {
          return <option value={o.value}>{o.label}</option>;
        })}
        {/* <option value="All">All</option>
        <option value="Sci-Fi">Sci-Fi</option>
        <option value="Action">Action</option>
        <option value="Crime">Crime</option>
        <option value="Drama">Drama</option> */}
      </select>
    </>
  );
};
