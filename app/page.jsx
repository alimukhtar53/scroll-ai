import Image from "next/image";
import styles from "./page.module.css";
import data from "./data.json";
import data2 from "./data2.json";

export default function Home() {
  return (
    <div className="bg-gray-900">
      <div className="lg:columns-4 md:columns-3 sm:columns-2 xs:columns-1 gap-4 mx-auto space-y-4 p-4">
        {data.images.map((d) => {
          return (
            <div key={d.id} className=" w-full aspect-auto">
              <img
                className="rounded-lg object-fill w-full"
                src={d.url_jpeg}
              ></img>
            </div>
          );
        })}
        {data2.images.map((d) => {
          return (
            <div key={d.id} className=" w-full aspect-auto">
              <img
                className="rounded-lg object-fill w-full"
                src={d.url_jpeg}
              ></img>
            </div>
          );
        })}
      </div>
    </div>
  );
}
