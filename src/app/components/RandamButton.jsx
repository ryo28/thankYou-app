"use client";
import { useRouter } from "next/navigation";

export function RandamButton() {
  const router = useRouter();

  function randomButton() {
    let randamNum = Math.floor(Math.random() * 101);
    if (randamNum === 100) {
     
      router.push("/pages/about");
    }
  }
  return (
    <div className="relative bg-yellow-600 h-screen ">
      <div className=" font-NotoSerifJp absolute top-12 sm:leading-9 bg-yellow-400  sm:left-[calc(50%-430px)] text-orange-950 px-5">
        日頃大切な人に感謝を伝えていない、伝えたいけど少し恥ずかしくて言えない、そんなあなたの背中を押します！
        <br />
        <span>
          一日一回ボタンを押して、当たりが出たら大切な人に感謝を伝えよう！
        </span>
      </div>

      <div className="absolute top-52 left-0 bottom-0 right-0 h-11">
        <p className="text-center mb-12 text-red-600 animate-bounce">
          自販機の当たりと同じ確率です
        </p>
        <button
          onClick={randomButton}
          className="absolute left-1/2 -ml-11 px-5 py-2.5 rounded group font-medium text-white inline-block"
        >
          <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-yellow-400 to-yellow-950"></span>
          <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-yellow-400 to-yellow-950"></span>
          <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-yellow-400 to-yellow-950"></span>
          <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-yellow-300 from-yellow-950"></span>
          <span className="relative">1/100</span>
        </button>
      </div>
    </div>
  );
}
