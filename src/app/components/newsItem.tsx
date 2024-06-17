import Image from "next/image";
import Link from "next/link";

type Props = {
  urlToImage: string;
  url: string;
  title: string;
  description: string;
};

const NewsItem = (props: Props) => {
  return (
    <div className="group w-96 bg-gradient-to-r from-gray-400/50 via-white to-gray-400/50 p-8 rounded-2xl overflow-hidden hover:opacity-15 hover:bg-black hover:bg-opacity-100">
      <div className="absolute hidden hover:flex hover:top-20 duration-300 text-xl text-black">Read More!</div>
      <div className="h-1/2 relative">
        <Image
          src={props.urlToImage}
          alt={props.title}
          layout="fill"
          objectFit="cover"
          className=""
        />
      </div>
      <div className="p-4 gap-6 flex flex-col">
        <h3 className="text-2xl font-semibold text-black max-h-24 overflow-hidden">
          <div>{props.title}</div>
        </h3>
        <p className="bg-white/50 w-full text-lg text-gray-700 rounded-xl p-3 mt-2">{props.description}</p>
      </div>
    </div>
  );
};

export default NewsItem;
