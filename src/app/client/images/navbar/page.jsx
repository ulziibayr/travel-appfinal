import React from "react";

import SearchPage from "../../components/homeSearch/page";

export default function ImagePage() {
  return (
    <div class="relative">
      <img
        alt="NextUI hero Image with delay"
        className=" w-screen h-1/4"
        src="https://dreammongolia.com/mt-content/uploads/2017/04/khuvsgh.jpg"
      />
      <div class="absolute text-5xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <SearchPage />
      </div>
    </div>
  );
}