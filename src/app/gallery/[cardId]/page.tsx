"use client";

import { useState } from "react";
import Image from "next/image";

import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Download from "yet-another-react-lightbox/plugins/download";

import "yet-another-react-lightbox/styles.css";

import NextJsImage from "./components/NextJsImage";

import demoImage from "public/images/heavy.jpeg";

export default function GalleryDetail() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <main>
        <Image src={demoImage} alt="demo image" onClick={() => setOpen(true)} />
      </main>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={[demoImage]}
        render={{ slide: NextJsImage }}
        plugins={[Zoom, Download]}
        buttonPrev={null}
        buttonNext={null}
        iconNext={null}
      />
    </>
  );
}
