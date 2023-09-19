import Image from "next/image";
import ShoeImage from "../public/images/나이키_코트_버로우_로우_리크래프트_주니어.jpg";

export default function Home() {
  return (
    <div className="flex-row font-sans">
      <div className="flex-none h-24 w-48 relative">
        <Image
          src={ShoeImage}
          alt="Nike cout borrow row recraft junior"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        ></Image>
      </div>
      <form className="flex-auto p-6">
        <div className="flex flex-wrap">
          <h1 className="flex-auto text-lg font-head text-slate-900">
            Nike cout borrow row recraft junior
          </h1>
        </div>
      </form>
    </div>
  );
}
