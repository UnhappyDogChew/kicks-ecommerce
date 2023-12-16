export default function ListItem({
  imageUrl,
  tag,
  name,
  price,
}: {
  imageUrl: string;
  tag: string;
  name: string;
  price: number;
}) {
  return (
    <div className="w-[19.875rem]">
      <div className="w-[19.875rem] h-[21.875rem] rounded-3xl bg-gray-light border-white border-8 relative overflow-hidden">
        <img className="w-full h-full" src={imageUrl}></img>
        <div className="absolute top-0 left-0 bg-blue font-head text-xs text-white rounded-tl-3xl rounded-br-3xl px-4 py-3 m-0">
          {tag}
        </div>
      </div>
      <h3 className="font-head text-2xl uppercase mt-4">{name}</h3>
      <div className="flex justify-center items-center px-8 py-3 rounded-lg bg-black text-white uppercase text-sm mt-4">
        view product - <span className="text-orange"> ${price}</span>
      </div>
    </div>
  );
}
