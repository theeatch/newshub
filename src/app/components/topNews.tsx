import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type Props = {
  urlToImage: string;
  url: string;
  title: string;
  description: string;
};

const TopNews = (props: Props) => {
  return (
    <div className="group relative h-[28rem] w-96 bg-gradient-to-r from-gray-300 via-white to-gray-300 p-8 rounded-t-2xl rounded-r-2xl pverflow-hidden hover:cursor-pointer">
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
      <div className="border-l-8 border-red-600 z-20 absolute left-0 px-2 text-sm bottom-0 max-h-16 overflow-hidden bg-white">
        <div>{props.description}</div>
      </div>
      <motion.div
        initial={{ y: 30, opacity: 0}}
        whileHover={{ y: 0, opacity: 1}}
        transition={{ duration: 0.2 }}
        className=" absolute z-20 w-full h-full group-hover:scale-105 bg-black/60 flex top-0 left-0 text-white items-center justify-center p-8"
      >
        <div>Read More!</div>
      </motion.div>
    </div>
  );
};

export default TopNews;
