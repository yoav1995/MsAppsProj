import { ScrollArea } from "@radix-ui/react-scroll-area";
import { useSelector } from "react-redux";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function ImageList({}) {
  // each photo is displaying by it's preview image and then if it is selected,
  // another dialog (modal) will appear with relevant details

  const { hits } = useSelector((state) => state.app);
  return (
    <ScrollArea className="h[400px] flex justify-center items-center p-10 ">
      <div className="grid grid-cols-3 gap-1" key="unique1">
        {hits &&
          hits.map((hit, index) => {
            return (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <img
                    className="p-0 rounded hover:drop-shadow-2xl"
                    height={150}
                    width={150}
                    src={hit.previewURL}
                    key={index}
                  />
                </DialogTrigger>
                <DialogContent>
                  views: {hit.views}
                  <br></br>
                  downloads: {hit.downloads}
                  <br></br>
                  collections: {hit.collections}
                  <br></br>
                  likes: {hit.likes}
                  <br></br>
                  comments: {hit.comments}
                </DialogContent>
              </Dialog>
            );
          })}
      </div>
    </ScrollArea>
  );
}
