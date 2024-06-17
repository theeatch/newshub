import Image from "next/image";
import Link from "next/link";

type Props = {
  urlToImage: string;
  url: string;
  title: string;
  description: string;
};

const TopNews = (props: Props) => {
  return (
    <div className="relative h-[28rem] w-96 bg-gradient-to-r from-gray-300 via-white to-gray-300 p-8 rounded-t-2xl rounded-r-2xl overflow-hidden">
      <Image
        src={props.urlToImage}
        alt={props.title}
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>

      <h3 className="border-l-4 border-blue-600 z-20 absolute left-0 bottom-20 px-2 max-w-80 max-h-16 overflow-hidden bg-white">
        <Link href={props.url} className="text-2xl font-semibold text-black">
          {props.title}
        </Link>
      </h3>
      <div className="border-l-8 border-red-600 z-20 absolute left-0 px-2 text-2xl bottom-0 max-h-16 overflow-hidden bg-white">
        <div>{props.description}</div>
        
      </div>
    </div>
  );
};

export default TopNews;
