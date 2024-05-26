import { ScrollArea } from "@radix-ui/react-scroll-area";
import { useSelector, useDispatch } from "react-redux";

export default function ImageList({}) {
  const { hits } = useSelector((state) => state.app);

  return (
    <ScrollArea className="h[400px] flex justify-center items-center p-10 ">
      <div className="grid grid-cols-3 gap-1">
        {hits &&
          hits.map((hit, index) => {
            return (
              <img
                className="p-0 rounded hover:drop-shadow-2xl"
                height={150}
                width={150}
                src={hit.previewURL}
                key={index}
              />
            );
          })}
      </div>
    </ScrollArea>
  );
}
