import { useSelector, useDispatch } from "react-redux";
import { useState, useRef } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { setCategory, toggleModal } from "@/slices/appSlice";

export default function Modal() {
  const modalRef = useRef(null);
  const { showModal } = useSelector((state) => state.app);
  const [currentCat, setCurrentCat] = useState(null);
  const dispatch = useDispatch();
  const onSubmit = () => {
    dispatch(setCategory(currentCat));
    dispatch(toggleModal());
  };

  return (
    <Dialog open={showModal}>
      <DialogTrigger asChild>
        <Button onClick={() => dispatch(toggleModal())}>Search Category</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogTitle>Enter Category</DialogTitle>
        <Input onChange={(e) => setCurrentCat(e.target.value)} type="text" />
        <Button variant="outline" onClick={onSubmit}>
          Save Category
        </Button>
      </DialogContent>
    </Dialog>
  );
}
