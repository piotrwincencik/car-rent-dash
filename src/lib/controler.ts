import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getFirestore,
  setDoc,
} from "firebase/firestore";
import { NavigateFunction } from "react-router-dom";

//firestore

import { AddCarType } from "../Types/car";
import { app } from "./firebase";

export const firestore = getFirestore(app);


// cars collection

export const carsCollection = collection(firestore, "cars");

// adding to db
export const addCar = async (carData: AddCarType) => {
  const newCar = await addDoc(carsCollection, { ...carData });
  console.log(`The new car was created at ${newCar.path}`);
};

// delete from db
export const deleteCar = async (
  id: string | undefined,
  navigate: NavigateFunction
) => {
  const document = doc(firestore, `cars/${id}`);
  await deleteDoc(document);
  console.log(`The car has now been deleted`);
  navigate("/");
};

// editing
export const updateCar = async (id: string | undefined, docData: any) => {
  const getCar = doc(firestore, `cars/${id}`);
  await setDoc(getCar, docData, { merge: true });
  console.log("The value has been written to the database");
};