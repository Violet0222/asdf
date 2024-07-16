import { ChangeEvent, useEffect, useState } from "react";

export const DynamicallyGeneratedTextArt = () => {
  const [value, setValue] = useState("");
  const [textArt, setTextArt] = useState<JSX.Element[]>([]);

  const generateTextArt = () => {
    const text = value.split("");
    const art = [];
    for (let i = 0; i < text.length; i++) {
      art.push(<span style={{ fontSize: (i + 1) * 10 }}>{text[i]}</span>);
    }
    setTextArt(art);
  };

  useEffect(() => {
    generateTextArt();
  }, [value]);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };
  return (
    <>
      <input type="text" value={value} onChange={handleOnChange} />
      <div>{textArt}</div>
    </>
  );
};
