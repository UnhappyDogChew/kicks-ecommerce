import ListItem from "./component/listItem";

export default function Home() {
  return (
    <>
      <header>
        <h2 className="font-head uppercase text-[224px] text-center leading-none mb-6">
          Do it <span className="text-blue">right</span>
        </h2>
      </header>
      <main>
        <section className="w-desktop h-[46.875rem] rounded-[4rem] bg-blue overflow-clip relative m-auto">
          <img
            className="w-full h-full object-cover absolute top-0 left-0"
            src="/images/main_banner_01.jpeg"
          ></img>
          <div className="w-full h-full bg-gradient-to-b from-transparent from-45% to-shadow to-100% z-10 absolute top-0 left-0">
            <div className="absolute bottom-12 left-12">
              <h3 className="font-head text-white text-7xl uppercase">
                Nike Air Max
              </h3>
              <p className="font-sans text-white text-2xl mb-6">
                Nike introducing the new air max for <br />
                everyone's comfort
              </p>
              <button className="flex h-12 py-2 px-8 justify-center items-center bg-blue text-white font-head text-sm uppercase rounded-lg">
                Shop now
              </button>
            </div>
            <div className="absolute top-20">
              <span
                className="p-6 bg-black text-white rounded-bl-lg rounded-tl-lg font-head text-base rotate-180"
                style={{ writingMode: "vertical-lr" }}
              >
                Nike product of the year
              </span>
            </div>
            <div className="absolute bottom-8 right-8 flex flex-col gap-4">
              <img
                className="w-40 h-40 rounded-[2rem] border-white border-[3px] border-solid"
                src="/images/main_banner_02.jpeg"
              ></img>
              <img
                className="w-40 h-40 rounded-[2rem] border-white border-[3px] border-solid"
                src="/images/main_banner_03.jpeg"
              ></img>
            </div>
          </div>
        </section>
        <section className="mt-20 w-desktop m-auto">
          <div className="flex justify-between items-end">
            <h2 className="flex-1 font-head text-7xl uppercase">
              Don't miss out <br />
              new drops
            </h2>
            <button className="flex h-12 py-2 px-8 justify-center items-center bg-blue text-white font-head text-sm uppercase rounded-lg">
              show new drops
            </button>
          </div>
          <div className="flex mt-8 gap-4">
            <ListItem
              imageUrl="/images/stock_01.png"
              tag="new"
              name="Adidas 4dfwd x parley running shoes"
              price={125}
            ></ListItem>
            <ListItem
              imageUrl="/images/stock_02.png"
              tag="new"
              name="Adidas 4dfwd x parley running shoes"
              price={125}
            ></ListItem>
            <ListItem
              imageUrl="/images/stock_03.png"
              tag="new"
              name="Adidas 4dfwd x parley running shoes"
              price={125}
            ></ListItem>
            <ListItem
              imageUrl="/images/stock_04.png"
              tag="new"
              name="Adidas 4dfwd x parley running shoes"
              price={125}
            ></ListItem>
          </div>
        </section>
        <section className="bg-black mt-32">
          <div className="pt-24 flex justify-between items-end w-desktop mx-auto">
            <h2 className="font-head text-7xl uppercase text-white">
              Categories
            </h2>
            <div className="flex gap-4">
              <button className="flex justify-center items-center rounded-lg bg-gray-dark px-3 py-3">
                <img src="/icons/chevron_backward.svg"></img>
              </button>
              <button className="flex justify-center items-center rounded-lg bg-white px-3 py-3">
                <img src="/icons/chevron_forward.svg"></img>
              </button>
            </div>
          </div>
          <div className="mt-8 ml-[calc((100vw-theme(spacing.desktop))/2)] bg-[#f6f6f6] h-[37.5rem] rounded-tl-[4rem] flex overflow-hidden">
            {/* category item start */}
            <div className="w-[43.125rem] px-16 relative bg-[#eceef0] flex items-center">
              <img className="-scale-x-100" src="/images/cat_01.png"></img>
              <h3 className="absolute left-12 bottom-7 font-head text-3xl uppercase">
                Lifestyle
                <br />
                shoes
              </h3>
              <button className="p-2 rounded-lg bg-black absolute right-14 bottom-7">
                <img src="/icons/arrow_trend_right_up.svg"></img>
              </button>
            </div>
            {/* category item start */}
            <div className="w-[43.125rem] px-16 relative bg-[#f6f6f6] flex items-center">
              <img src="/images/cat_02.png"></img>
              <h3 className="absolute left-12 bottom-7 font-head text-3xl uppercase">
                Basketball
                <br />
                shoes
              </h3>
              <button className="p-2 rounded-lg bg-black absolute right-14 bottom-7">
                <img src="/icons/arrow_trend_right_up.svg"></img>
              </button>
            </div>
          </div>
        </section>
        <section className="mx-auto w-desktop">
          <div className="mt-32 flex justify-between items-end">
            <h2 className="font-head text-7xl uppercase">Reviews</h2>
            <button className="flex h-12 py-2 px-8 justify-center items-center bg-blue text-white font-head text-sm uppercase rounded-lg">
              See all
            </button>
          </div>
          <div className="mt-12 flex gap-4">
            <div className="bg-blue w-[26.8125rem] h-[32rem] rounded-3xl overflow-hidden flex flex-col">
              <div className="p-8 h-[11rem] bg-white grid grid-cols-[1fr_auto] grid-rows-[auto_1fr_auto] gap-2">
                <h3 className="font-head text-2xl col-start-1 row-start-1">
                  Good Quality
                </h3>
                <div className="w-16 h-16 rounded-[2rem] overflow-hidden col-start-2 row-span-2">
                  <img src="/images/user_01.svg"></img>
                </div>
                <p className="font-sans text-base col-start-1 row-start-2">
                  I highly recommend shopping from kicks
                </p>
                <div className="font-semibold text-base flex items-center col-start-1 row-start-3">
                  <span className="-translate-y-[2px]">
                    <img className="inline-block" src="/icons/star.svg"></img>
                    <img className="inline-block" src="/icons/star.svg"></img>
                    <img className="inline-block" src="/icons/star.svg"></img>
                    <img className="inline-block" src="/icons/star.svg"></img>
                    <img className="inline-block" src="/icons/star.svg"></img>
                  </span>
                  5.0
                </div>
              </div>
              <img
                className="object-cover flex-1 object-center"
                src="/images/review_01.png"
              ></img>
            </div>
            <div className="bg-blue w-[26.8125rem] h-[32rem] rounded-3xl overflow-hidden flex flex-col">
              <div className="p-8 h-[11rem] bg-white grid grid-cols-[1fr_auto] grid-rows-[auto_1fr_auto] gap-2">
                <h3 className="font-head text-2xl col-start-1 row-start-1">
                  Good Quality
                </h3>
                <div className="w-16 h-16 rounded-[2rem] overflow-hidden col-start-2 row-span-2">
                  <img src="/images/user_02.svg"></img>
                </div>
                <p className="font-sans text-base col-start-1 row-start-2">
                  I highly recommend shopping from kicks
                </p>
                <div className="font-semibold text-base flex items-center col-start-1 row-start-3">
                  <span className="-translate-y-[2px]">
                    <img className="inline-block" src="/icons/star.svg"></img>
                    <img className="inline-block" src="/icons/star.svg"></img>
                    <img className="inline-block" src="/icons/star.svg"></img>
                    <img className="inline-block" src="/icons/star.svg"></img>
                    <img className="inline-block" src="/icons/star.svg"></img>
                  </span>
                  5.0
                </div>
              </div>
              <img
                className="object-cover flex-1 object-center"
                src="/images/review_02.png"
              ></img>
            </div>
            <div className="bg-blue w-[26.8125rem] h-[32rem] rounded-3xl overflow-hidden flex flex-col">
              <div className="p-8 h-[11rem] bg-white grid grid-cols-[1fr_auto] grid-rows-[auto_1fr_auto] gap-2">
                <h3 className="font-head text-2xl col-start-1 row-start-1">
                  Good Quality
                </h3>
                <div className="w-16 h-16 rounded-[2rem] overflow-hidden col-start-2 row-span-2">
                  <img src="/images/user_03.svg"></img>
                </div>
                <p className="font-sans text-base col-start-1 row-start-2">
                  I highly recommend shopping from kicks
                </p>
                <div className="font-semibold text-base flex items-center col-start-1 row-start-3">
                  <span className="-translate-y-[2px]">
                    <img className="inline-block" src="/icons/star.svg"></img>
                    <img className="inline-block" src="/icons/star.svg"></img>
                    <img className="inline-block" src="/icons/star.svg"></img>
                    <img className="inline-block" src="/icons/star.svg"></img>
                    <img className="inline-block" src="/icons/star.svg"></img>
                  </span>
                  5.0
                </div>
              </div>
              <img
                className="object-cover flex-1 object-center"
                src="/images/review_03.png"
              ></img>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
