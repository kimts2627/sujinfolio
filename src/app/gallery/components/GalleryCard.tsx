"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { RxEnter } from "react-icons/rx";

const GalleryCard = () => {
  const router = useRouter();
  const [isHover, setIsHover] = useState(false);

  const handleCardClick = () => {
    router.push("/gallery/1");
  };

  return (
    <article
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={handleCardClick}
      className="flex gap-10 justify-between px-6 py-4 w-full h-96 cursor-pointer hover:bg-black hover:text-white ease-in-out duration-200"
    >
      <div className="flex flex-col justify-between flex-1 py-2 font-extralight">
        <div className="flex flex-col gap-5">
          <h2 className="text-5xl">까마귀와 두루미</h2>
          <p className="hypens-manual" lang="ko">
            정부는 예산에 변경을 가할 필요가 있을 때에는 추가경정예산안을
            편성하여 국회에 제출할 수 있다. 국민경제자문회의의 조직·직무범위
            기타 필요한 사항은 법률로 정한다. 사회적 특수계급의 제도는 인정되지
            아니하며, 어떠한 형태로도 이를 창설할 수 없다. 각급 선거관리위원회의
            조직·직무범위 기타 필요한 사항은 법률로 정한다.
          </p>
          <div
            className={`flex flex-col gap-3 ${
              isHover ? "w-3/5" : "w-1/2"
            } ease-in-out duration-100`}
          >
            <div className={`h-2px w-full bg-${isHover ? "white" : "black"}`} />
            행복 | 유머 | 깔깔
            <div className={`h-2px w-full bg-${isHover ? "white" : "black"}`} />
          </div>
        </div>

        <div className="flex gap-2 linear duration-500">
          {isHover && <span className="text-xs">자세히 보기</span>}
          <span className="text-lg">
            <RxEnter />
          </span>
        </div>
      </div>
      <div className="relative rounded-md overflow-hidden w-1/2 h-full">
        <Image
          className={isHover ? "scale-105 ease-in-out duration-200" : ""}
          src="https://picsum.photos/400/400"
          alt="mock"
          fill
        />
      </div>
    </article>
  );
};

export default GalleryCard;
