import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { addCar } from '../lib/controler';

function Create() {
  const [model, setModel] = useState("");
  const [desc, setDesc] = useState("");
  const [make, setMake] = useState("");
  const [location, setLocation] = useState("");
  const [drive, setDrive] = useState("1");
  const [weight, setWeight] = useState("");
  const [transmission, setTransmission] = useState("");
  const [power, setPower] = useState("");
  const [totalPrice, setTotalPrice] = useState("");
  const [perKm, setPerKm] = useState("");

  const navigate = useNavigate();

  const addNewCar = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addCar({
      model,
      desc,
      make,
      location,
      drive,
      transmission,
      weight,
      power,
      totalPrice,
      perKm,
    });
    console.log("successfully added a new Car");
    navigate("/");
  };

  return (
    <div className="create">
      <h2>Add a new Car</h2>
      <form onSubmit={(e) => addNewCar(e)}>


      <label>Make:</label>
        <select value={make} onChange={(e) => setMake(e.target.value)}>
          <option value="Abarth">Abarth</option>
          <option value="Audi">Audi</option>
          <option value="Alfa">Alfa Romeo</option>
          <option value="BMW">BMW</option>
          <option value="Caterham">Caterham</option>
          <option value="Citroen">Citroen</option>
          <option value="Cupra">Cupra</option>
          <option value="Ferrari">Ferrari</option>
          <option value="Fiat">Fiat</option>
          <option value="Ford">Ford</option>
          <option value="FSO">FSO</option>
          <option value="Hyundai">Hyundai</option>
          <option value="KTM">KTM</option>
          <option value="Mercedes">Mercedes</option>
          <option value="Mini">Mitsubishi</option>
          <option value="Opel">Opel</option>
          <option value="Peugeot">Peugeot</option>
          <option value="Porsche">Porsche</option>
          <option value="Renault">Renault</option>
          <option value="Subaru">Subaru</option>
          <option value="Toyota">Toyota</option>
          <option value="Vaz">Vaz</option>
          <option value="VW">VW</option>
          <option value="Skoda">Skoda</option>
        </select>


        <label>Model:</label>
        <input
          type="text"
          required
          value={model}
          onChange={(e) => setModel(e.target.value)}
        />


        <label>Horsepower in KM:</label>
        <input
          type="number"
          required
          min="1"
          max="1000"
          value={power}
          onChange={(e) => setPower(e.target.value)}
        />


        <label>Weight:</label>
        <input
          type="text"
          required
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />


        <label>Drivetrain:</label>
        <select value={drive} onChange={(e) => setDrive(e.target.value)}>
          <option value="RWD">RWD</option>
          <option value="FWD">FWD</option>
          <option value="AWD">AWD</option>
        </select>


        <label>Transmission:</label>
        <input
          type="text"
          required
          value={transmission}
          onChange={(e) => setTransmission(e.target.value)}
        />

        <label>Specification:</label>
        <textarea
          required
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        ></textarea>


        <label>Image URL Link location:</label>
        <input
          type="text"
          required
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />


        <label>Arrive & Drive price (Eur):</label>
        <input
          type="text"
          required
          value={totalPrice}
          onChange={(e) => setTotalPrice(e.target.value)}
        />
        <label>Price per KM (Eur):</label>
        <input
          type="text"
          required
          value={perKm}
          onChange={(e) => setPerKm(e.target.value)}
        />
        <button>Add Car</button>
      </form>
    </div>
  );
}

export default Create;