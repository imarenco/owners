"use client";

type Props = {
  images: string[];
};

export default function Form({ images = [] }: Props) {
  return (
    <div className="flex">
      {images.map((image) => (
        <div className="m-2">
          <img className="h-auto max-w-full rounded-lg w-36" src={image}></img>
        </div>
      ))}
    </div>
  );
}
