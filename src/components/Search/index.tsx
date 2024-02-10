import { DocumentData, onSnapshot, QuerySnapshot } from "firebase/firestore";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { carsCollection } from "../../lib/controler";
import { NewCarType } from "../../Types/car";

const Search: React.FC = () => {
  const [cars, setCars] = useState<NewCarType[]>([]);
  const [filteredCars, setFilteredCars] = useState<NewCarType[]>([]);
  const searchRef = useRef<HTMLInputElement>(null);

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

  const handleSearch = () => {


    if (searchRef.current?.value === null) return;
    setFilteredCars(
      cars.filter((car) => {
        return car.make!.toLowerCase().includes(searchRef.current?.value as string) ||
          car.model!.toLowerCase().includes(searchRef.current?.value as string);
      })
    );
  };

  return (
    <div className="search__page">
      <div className="search">
        <input
          type="text"
          className="inputsearch"
          placeholder="Search for a car"

          ref={searchRef}
        />
        <button onClick={handleSearch}>Go</button>
      </div>
      <div>
        {filteredCars.length ? (
          filteredCars.map((car) => (
            <div key={car.id} className="search__model">
              <Link to={`/cars/${car.id}`}>
                <h1>{car.make} {car.model}</h1>
              </Link>
            </div>
          ))
        ) : (
          <h1>No cars found</h1>
        )}
      </div>
    </div>
  );
};

export default Search;