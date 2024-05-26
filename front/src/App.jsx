import { useState, useEffect } from "react";
import "./App.css";
import store from "./store";
import { useSelector, useDispatch } from "react-redux";
import {
  next,
  prev,
  toggleModal,
  setHits,
  setCategory,
} from "./slices/appSlice";
import ImageList from "./components/ImageList";
import Modal from "./components/Modal";
import { Button } from "@/components/ui/button";

function App() {
  const { showModal, page, category, hits } = useSelector((state) => state.app);
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      const fetchData = async () => {
        const respone = await fetch(
          `http://localhost:3000/?category=${category}&page=${page}`
        );
        const payload = await respone.json();
        dispatch(setHits(payload));
      };

      if (category) {
        fetchData();
      }
    } catch (error) {
      console.log(error);
    }
  }, [page, category]);

  return (
    <>
      <div className="flex gap-2 justify-center items-center my-5">
        <Modal />
      </div>

      <Button onClick={() => dispatch(prev())}>prev</Button>
      <Button onClick={() => dispatch(next())}> next</Button>
      <div>
        <h3> Page: {page}</h3>
      </div>

      <ImageList />
    </>
  );
}

export default App;

//http://localhost:3000/?category=work&page=3
