import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Cards from "../cards/Cards";

const Location = () => {
  const [locationInfo, setLocationInfo] = useState([])
  const { name, air_date } = locationInfo

  const [resident, setResident] = useState([])
  // console.log({ resident })

  const [pageNumber, setPageNumber] = useState(1)

  const api = `https://rickandmortyapi.com/api/location/${pageNumber}`;

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const locationData = await axios.get(api);
        const response = locationData.data;
        // console.log('okay: location', response);
        setLocationInfo(response);

        const residentsData = await Promise.all(
          response.residents.map(async (residentUrl) => {
            const locationResponse = await axios.get(residentUrl);
            return locationResponse.data;
          })
        );
        setResident(residentsData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchLocation();
  }, [api]);

  return (

    <div>
      <div className="text-center mt-5">
        <h2> Episode : <span className="text-primary">{name || "Unknown"}</span></h2>
        <p>
          Air Date: <span className="text-primary">{air_date || "Unknown"}</span>
        </p>
      </div>
      <div className="">
        <Cards data={resident} page="/location/" />
      </div>
    </div>

  )
}

export default Location;
