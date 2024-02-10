import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { firestore } from '../lib/controler';
import { doc, getDoc } from 'firebase/firestore';
import Information from './Information';

function Details() {
    const { id } = useParams();
  
    //fetch a single document
    const getCar = doc(firestore, `cars/${id}`);
  
    const [isLoading, setIsLoading] = useState(false);
    const [car, setCar] = useState({});
  
    useEffect(() => {
      const fetchCarData = async () => {
        setIsLoading(true);
        const docSnap = await getDoc(getCar);
        if (docSnap.exists()) {
          const newCarObj = {
            id: docSnap.id,
            ...docSnap.data(),
          };
          setCar(newCarObj);
          setIsLoading(false);
        } else {
          console.log("No such document");
        }
      };
      fetchCarData();

    }, []);
  
    if (isLoading) return <div className="loading" />;
    return (
      <div className="car-details">
        {Object.keys(car) && Object.keys(car).length ? (
          <Information car={car} detailsPage />
        ) : null}
      </div>
    );
  }
  
  export default Details;