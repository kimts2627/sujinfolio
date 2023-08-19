import { Fragment } from "react";
import GalleryCard from "./components/GalleryCard";

export default function Gallery() {
  return (
    <main className="flex flex-1 flex-col w-full transltion group-hover:ease-in-out duration-100">
      {[1, 2, 3].map((_, index) => (
        <Fragment key={index}>
          <div className="h-px w-full bg-black" />
          <GalleryCard />
        </Fragment>
      ))}
      <div className="h-px w-full bg-black" />
    </main>
  );
}
