import Image from "next/image";
import logo from "@assets/logo.png";

export default function Login() {
  return (
    <div className="h-screen w-screen flex flex-row">
      <div className="h-full w-[40%] flex flex-col justify-center items-center bg-gray-400">
        <Image
          priority
          src={logo}
          placeholder="blur"
          loading="eager"
          quality={100}
          alt="Lima's Pizza"
        />
      </div>
      <div className="h-screen w-[60%] flex items-center">
        <div className="w-full flex flex-col justify-center items-center gap-24">
          <div className="w-3/6 py-10 bg-[#A9A9A9]"></div>
          <div className="@container w-full flex flex-col items-center gap-8">
            <div className="w-full h-full flex flex-col justify-between items-center gap-4">
              <div className="w-4/6 py-6 bg-[#D9D9D9] rounded-full"></div>
              <div className="w-4/6 py-6 bg-[#D9D9D9] rounded-full"></div>
            </div>
            <div className="w-2/6 md:w-1/6 bg-[#929292] rounded-full py-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
