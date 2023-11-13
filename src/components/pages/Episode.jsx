import axios from "axios";
import { useEffect, useState } from "react";
import Cards from "../cards/Cards";

const Episode = () => {
  const [info, setInfo] = useState([]);
  const [character, setCharacter] = useState([]);
  const { name, air_date } = info;

  const [pageNumber, setPageNumber] = useState(1)

  const api = `https://rickandmortyapi.com/api/episode/${pageNumber}`;



  useEffect(() => {
    const fetchEpisode = async () => {
      try {
        const episodeData = await axios.get(api);
        const response = episodeData.data;
        console.log('okay:', response);
        setInfo(response);

        const charactersData = await Promise.all(
          response.characters.map(async (characterUrl) => {
            const characterResponse = await axios.get(characterUrl);
            return characterResponse.data;
          })
        );
        setCharacter(charactersData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchEpisode();
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
        <Cards data={character} page="/episodes/" />
      </div>
    </div>
  );
};

export default Episode;
