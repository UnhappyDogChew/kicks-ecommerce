import "../globals.css";
import type { Metadata } from "next";
import Image from "next/image";
import Logo from "../../public/images/logo.svg";
import SearchIcon from "../../public/icons/search.svg";
import UserIcon from "../../public/icons/user.svg";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray">
        <div className="w-screen">
          <div className="pt-8">
            <nav className="bg-white p-8 mb-6 rounded-3xl flex items-center mx-auto w-desktop">
              <div className="flex-1">
                <span className="font-head mr-10">New Drops 🔥</span>
                <span className="font-head mr-10">Men ▾</span>
                <span className="font-head mr-10">Women ▾</span>
              </div>
              <Link href="/" className="mx-auto flex-1 flex justify-center">
                <h1 className="w-px h-px overflow-hidden absolute">Kicks</h1>
                <Image src={Logo} alt="Kicks"></Image>
              </Link>
              <div className="flex-1 flex justify-end items-center">
                <span className="ml-10">
                  <h2 className="w-px h-px absolute overflow-hidden">Search</h2>
                  <Image src={SearchIcon} alt="search"></Image>
                </span>
                <span className="ml-10">
                  <h2 className="w-px h-px absolute overflow-hidden">User</h2>
                  <Image src={UserIcon} alt="user"></Image>
                </span>
                <span className="bg-orange rounded-full w-8 h-8 ml-10 flex justify-center items-center">
                  0
                </span>
              </div>
            </nav>
            {children}
            <footer className="w-desktop mt-32 mx-auto">
              <section className="h-[58rem] rounded-[3rem] bg-blue flex flex-col relative">
                <div className="px-[4.5rem] pb-10 pt-16 relative">
                  <h2 className="font-head text-5xl text-white uppercase">
                    Join our kicksplus <br />
                    club & get 15% off
                  </h2>
                  <p className="font-semibold text-xl text-white mt-4">
                    Sign up for free! Join the community.
                  </p>
                  <form className="mt-8" action={"/"}>
                    {/* FIXME: 이메일 인풋보다 제출 버튼이 미묘하게 아래로 내려가있다. 왜이러지?? */}
                    <input
                      className="h-12 w-[21.375rem] mr-2 px-4 bg-transparent border-dotted border-white border-2 rounded-lg text-gray-light box-border"
                      type="email"
                      placeholder="Email address"
                    ></input>
                    <button
                      type="submit"
                      className="inline-flex h-12 px-8 justify-center items-center bg-black text-white font-head text-sm uppercase rounded-lg box-border"
                    >
                      Submit
                    </button>
                  </form>
                  <img
                    className="absolute top-[9rem] right-[11.5rem]"
                    src="/images/logo_m.svg"
                  ></img>
                  <img
                    className="absolute top-[7.5rem] right-[10.5rem]"
                    src="/icons/add_circle.svg"
                  ></img>
                </div>
                <div className="bg-black flex-1 rounded-[3rem]">
                  <div className="m-10 flex gap-32">
                    <div className="flex-1">
                      <h2 className="font-head text-[2.25rem] text-orange">
                        About us
                      </h2>
                      <p className="font-semibold text-xl text-white">
                        We are the biggest hyperstore in the universe. We got
                        you all cover with our exclusive collections and latest
                        drops.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-head text-2xl text-orange mb-4">
                        Category
                      </h3>
                      <p className="font-head text-xl text-white">Runners</p>
                      <p className="font-head text-xl text-white">Sneakers</p>
                      <p className="font-head text-xl text-white">Basketbal</p>
                      <p className="font-head text-xl text-white">Outdoor</p>
                      <p className="font-head text-xl text-white">Golf</p>
                      <p className="font-head text-xl text-white">Hiking</p>
                    </div>
                    <div>
                      <h3 className="font-head text-2xl text-orange mb-4">
                        Company
                      </h3>
                      <p className="font-head text-xl text-white">About</p>
                      <p className="font-head text-xl text-white">Contact</p>
                      <p className="font-head text-xl text-white">Blogs</p>
                    </div>
                    <div>
                      <h3 className="font-head text-2xl text-orange mb-4">
                        Follow us
                      </h3>
                      <div className="flex gap-6">
                        <a>
                          <img src="/icons/facebook.svg"></img>
                        </a>
                        <a>
                          <img src="/icons/instagram.svg"></img>
                        </a>
                        <a>
                          <img src="/icons/twitter.svg"></img>
                        </a>
                        <a>
                          <img src="/icons/tiktok.svg"></img>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <img
                  className="absolute bottom-0 right-[1.81rem] "
                  src="/images/logo_l.svg"
                ></img>
              </section>
              <div className="my-7 text-center w-full">
                <a>
                  © All rights reserved | Made with ❤️ by Visiata Systems
                  International
                </a>
              </div>
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}
