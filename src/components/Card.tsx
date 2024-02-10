import { DocumentData, onSnapshot, QuerySnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { carsCollection } from "../lib/controler";
import { NewCarType } from "../Types/car";
import Information from "./Information";

function Card() {
  const [cars, setCars] = useState<NewCarType[]>([]);
  const [sort, setSort] = useState<string>("");

  useEffect(
    () =>
      onSnapshot(carsCollection, (snapshot: QuerySnapshot<DocumentData>) => {
        setCars(
          snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          })
        );
      }),
    []
  );

  const sortedCars = cars?.sort((a, b) => {
    if (sort === "model") {
      if (a.model && b.model) return a.model.localeCompare(b.model);
    }
    if (sort === "perKm") {
      return Number(a.perKm) - Number(b.perKm);
    }
    if (sort === "drive") {
      return Number(a.drive) - Number(b.drive);
    }
    if (sort === "power") {
      return Number(a.power) - Number(b.power);
    }
    return 0;
  });

  return (
    <div className="card">
      <h2 className="sort-model">Sort the cars</h2>
      <select
        className="select"
        defaultValue={""}
        onChange={(e) => setSort(e.target.value)}
      >
        <option value="">Sort By</option>
        <option value="model">Model</option>
        <option value="perKm">Price per km</option>
        <option value="drive">Drivetrain</option>
        <option value="power">Power</option>
      </select>
      <h2 className="model">All cars</h2>
      {cars && cars.length ? (
        <div className="individual-card">
          {sortedCars?.map((car) => (
            <Information key={car.id} car={car} />
          ))}
        </div>
      ) : (
        <h2 className="no-cars">There are no cars. Please add one</h2>
      )}
    </div>
  );
}

export default Card;