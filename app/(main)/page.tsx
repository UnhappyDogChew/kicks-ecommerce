export default function Home() {
  return (
    <>
      <header>
        <h2 className="font-head uppercase text-[224px] text-center leading-none">
          Do it <span className="text-blue">right</span>
        </h2>
      </header>
      <main>
        <section className="w-full h-[46.875rem] rounded-[4rem] bg-blue overflow-clip relative">
          <img
            className="w-full h-full object-cover absolute top-0 left-0"
            src="/images/main_banner_01.jpeg"
          ></img>
          <div className="w-full h-full bg-gradient-to-b from-transparent from-45% to-shadow to-100% z-10 absolute top-0 left-0">
            <section className="absolute bottom-12 left-12">
              <h3 className="font-head text-white text-7xl uppercase">
                Nike Air Max
              </h3>
              <p className="font-sans text-white text-2xl mb-6">
                Nike introducing the new air max for <br />
                everyone's comfort
              </p>
              <button className="flex h-12 py-2 px-8 justify-center items-center self-stretch bg-blue text-white font-head text-sm uppercase rounded-lg">
                Shop now
              </button>
            </section>
            <section className="absolute top-20">
              <span
                className="p-6 bg-black text-white rounded-bl-lg rounded-tl-lg font-head text-base rotate-180"
                style={{ writingMode: "vertical-lr" }}
              >
                Nike product of the year
              </span>
            </section>
            <section className="absolute bottom-8 right-8 flex flex-col gap-4">
              <img
                className="w-40 h-40 rounded-[2rem] border-white border-[3px] border-solid"
                src="/images/main_banner_02.jpeg"
              ></img>
              <img
                className="w-40 h-40 rounded-[2rem] border-white border-[3px] border-solid"
                src="/images/main_banner_03.jpeg"
              ></img>
            </section>
          </div>
        </section>
      </main>
    </>
  );
}
