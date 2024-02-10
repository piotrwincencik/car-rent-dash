import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { deleteCar } from "../lib/controler";
import { NewCarType } from "../Types/car";
import Edit from "./Edit";

interface IProps {
  car: NewCarType;
  detailsPage?: boolean;
}

function Information({ car, detailsPage }: IProps) {
  const [editDesc, setEditDesc] = useState(false);
  const [editPower, setEditPower] = useState(false);

  const navigate = useNavigate();

  return (
    <div className="car-preview">
      <div className="image-container">
        <img className="location-image" src={car.location} alt="car" />
        <div className="highlights">
          <div className="highlights-text">
            <h2>{car.make}</h2><br></br><br></br>
            <p className="weight">{car.model}</p>
          </div>
          <div className="highlights-price">
            <h2 className="perKm">€{car.perKm}</h2>
            <p>per KM</p>
            <div className="arrive-price">€{car.totalPrice}</div>
            <p className="arrive-drive">arrive & drive price</p>
          </div>
        </div>
      </div>


      <div className="desc">
        <span className="power">
          <strong className="power-number">
            Power: 
            {car.power}{""} <strong
            className="edit-text"
            onClick={() => setEditPower(!editPower)}
            >
            </strong>
            km / Weight:  {car.weight} kg 
            </strong>
        </span> 
        <hr />
        <span className="make">Drive: {car.drive} <br>
         </br> 
        Transmission: {car.transmission} <br>
        </br>
        </span>
        {detailsPage ? (
          <>
            <p className="desc-text">
              {car.desc}{" "}
              <strong
                className="edit-text"
                onClick={() => setEditDesc(!editDesc)}
              >
                Edit desc
              </strong>
              {editDesc ? (
                <Edit
                  editDesc={editDesc}
                  setEditDesc={setEditDesc}
                  editPower={editPower}
                  setEditPower={setEditPower}
                  id={car.id}

                />
              ) : null}
            </p>
            <button onClick={() => deleteCar(car.id, navigate)}>
              Delete car
            </button>
          </>
        ) : (
          <Link to={`/cars/${car.id}`}>
            <button className="moreinfo-btn">View More Information</button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Information;