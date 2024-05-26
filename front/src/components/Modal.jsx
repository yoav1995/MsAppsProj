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

import { Button } from "@/components/ui/button";
import { setCategory, toggleModal } from "@/slices/appSlice";
const values = [
  "work",
  "animals",
  "people",
  "food",
  "nature",
  "technology",
  "objects",
  "places",
  "buildings",
  "interiors",
  "fashion",
  "health",
  "sports",
  "transportation",
  "travel",
  "culture",
  "music",
  "school",
];

export default function Modal() {
  const { showModal, category } = useSelector((state) => state.app);
  const dispatch = useDispatch();
  const selectRef = useRef();

  const onSubmit = () => {
    if (selectRef?.current) {
      console.log(selectRef?.current.value);
    }
    dispatch(setCategory(selectRef.current.value));
    dispatch(toggleModal());
  };

  return (
    <Dialog open={showModal}>
      <DialogTrigger asChild>
        <Button onClick={() => dispatch(toggleModal())}>Search Category</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogTitle>Choose Category</DialogTitle>
        <select
          ref={selectRef}
          className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-1 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-gray-900 focus:border-2 focus:border-blue-600 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
        >
          {values.map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>
        <Button variant="outline" onClick={onSubmit}>
          Save Category
        </Button>
      </DialogContent>
    </Dialog>
  );
}
