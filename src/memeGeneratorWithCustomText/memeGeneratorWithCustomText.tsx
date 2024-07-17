import { ChangeEvent, useState } from "react";

type Meme = {
  image: string;
  topText: string;
  bottomText: string;
};
export const MemeGeneratorWithCustomText = () => {
  const [meme, setMeme] = useState<Meme>({
    image: "",
    topText: "",
    bottomText: "",
  });

  const [input1, setInput1] = useState("");

  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");

  const onTopTextHandler = () => {
    setMeme((prev) => ({ ...prev, topText: input1 }));
  };
  const onBottomTextHandler = () => {
    setMeme((prev) => ({ ...prev, bottomText: input2 }));
  };
  const onAddImageHandler = () => {
    setMeme((prev) => ({ ...prev, image: input3 }));
  };
  return (
    <>
      <input
        type="text"
        value={input1}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setInput1(e.currentTarget.value)
        }
      />
      <button onClick={onTopTextHandler}>Add Top Text</button>
      <input
        type="text"
        value={input2}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setInput2(e.currentTarget.value)
        }
      />
      <button onClick={onBottomTextHandler}>Add Bottom Text</button>
      <input
        type="text"
        value={input3}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setInput3(e.currentTarget.value)
        }
      />
      <button onClick={onAddImageHandler}>Add Image</button>

      <div>{meme.topText}</div>
      <div>
        {meme.image && (
          <img
            src={meme.image}
            alt="selected"
            style={{ width: "50px", height: "50px" }}
          />
        )}
      </div>
      <div>{meme.bottomText}</div>
    </>
  );
};
