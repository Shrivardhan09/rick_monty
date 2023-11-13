import axios from "axios";
import { useEffect, useState } from "react";
import Cards from "./components/cards/Cards";
import Filter from "./components/filter/Filter";
import './App.css'
import Pagination from "./components/pagination/Pagination";
import 'bootstrap/dist/css/bootstrap.css'
import Search from "./components/search/Search";



const RickAndMonty = () => {
  // for pagination
  const [pages, setPages] = useState(1);

  // to store the api character data
  const [storeFetchData, setStoreFetchData] = useState([]);


  // for the search functionality
  const [search, setSearch] = useState('');

  // for status filter 
  const [status, setStatus] = useState('')

  // for gender filter
  const [gender, setGender] = useState('')

  // for species filter 
  const [species, setSpecies] = useState('')

  // api url
  const api = `https://rickandmortyapi.com/api/character/?page=${pages}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(api);
        setStoreFetchData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [api]);

  const { info = {}, results = [] } = storeFetchData
  console.log('results-cards', results)

  return (
    <div className="app">
      {/* search bar for searching by names */}
      <div>
        <Search setSearch={setSearch} pages={pages} />
      </div>
      <div className="container-app " style={{ backgroundColor: 'rgb(39, 43, 51)' }}>
        {/* Filter section */}
        <div className="filter-sec" >
          <Filter setStatus={setStatus} setPages={setPages} setGender={setGender} setSpecies={setSpecies} />
        </div>
        {/* cards are displayed here */}
        {results && results.length > 0 && (
          <div className="cards-sec">
            <Cards data={results} page="/" />
          </div>
        )}
      </div>
      {/* pagination section */}
      <div className="footer-section">
        <Pagination setPages={setPages} pages={pages} info={storeFetchData} />
      </div>
    </div>
  );
}

export default RickAndMonty;
