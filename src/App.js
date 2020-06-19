import React, { useState } from 'react';
import styled from 'styled-components';

import MapCities from './Components/Map';
import Pagination from './Components/Pagination';

const Wrapper = styled.div`
  margin: 10px auto;
  width: 96%;
  display: flex;
  border: 2px solid black;
`

const ListUl = styled.ul`
  margin-top: 15px;
  border: 2px solid black;
  width: 420px;
  margin: 15px;
`

const List = styled.li`
    list-style: none;
    margin: 8px auto;
    text-align: center;
`

const ButtonCities = styled.button`
    height: 60px;
    width: 200px;
`
const RightElements = styled.div`

`

const App = () => {

  const [results, setResults] = useState([]);
  const [latitude, setLatitude] = useState(37.090240);
  const [longitude, setLongitude] = useState(-95.712891);
  const [zoom, setZoom] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);
  const [citiesPerPage, setCitiesPerPage] = useState(10);

  // Retrieve cities : 
  const data = new XMLHttpRequest();
  data.open('GET', '/cities.json');
  data.responseType = "json";
  data.send();

  data.onload = () => {
    const responseObj = data.response;
    // console.log(responseObj); 
    setResults(responseObj);
  };

  // Pagination : 
  const indexOfLastCity = currentPage * citiesPerPage;
  const indexOfFirstCity = indexOfLastCity - citiesPerPage;
  const currentCity = results.slice(indexOfFirstCity,indexOfLastCity);

  // Change page :
  const paginate = (pageNumbers) => {
    setCurrentPage(pageNumbers)
  }


  return (
    <Wrapper>
      <ListUl>
        {
          currentCity.map(result => (
            <List key={result.rank}>
              <ButtonCities onClick={
                () => {
                  setLatitude(result.latitude);
                  setLongitude(result.longitude);
                  setZoom('6');
                }
              }>
                <span>{result.city}</span><br />
                <span>{result.state}</span>
              </ButtonCities>
            </List>
          ))
        }
      </ListUl>
      
      <RightElements>
        <MapCities
          lat={latitude}
          lon={longitude}
          zoom={zoom}
        />

        <Pagination 
          totalCities = {results.length}
          citiesPerPage = {citiesPerPage}
          paginate = {paginate}
        />
      </RightElements>


    </Wrapper>
  )

}

export default App;
