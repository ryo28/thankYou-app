"use client";
import { gsap } from "gsap";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
export default function About() {
  const router = useRouter();
  router;
  useEffect(() => {
    gsap.to("#box", {
      x: 0,
      y: 150,
      rotate: 720,
      duration: 0.5,
      delay: 1,
    });
  }, []);
  return (
    <div className="h-screen  bg-orange-200">
      <p
        id="box"
        className="text-2xl text-center font-NotoSerifJp -translate-x-full text-orange-400 drop-shadow-lg "
      >
        感謝を伝えられるのはどちらかが生きている間だけ
        <br />
        今すぐ大切な人に感謝を伝えよう！
      </p>
    </div>
  );
}
