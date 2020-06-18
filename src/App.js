import React, { useState } from 'react';
import styled from 'styled-components'

import Cities from './Components/Cities';

const Wrapper = styled.div`
  margin: 40px auto;
  width: 1000px;
`

const ListUl = styled.ul`
  margin-top: 15px;
`

const App = () => {

  const [result, setResult] = useState([]);
  const [cityName, setCityName] = useState([]);

  // Retrieve cities : 
  const data = new XMLHttpRequest();
  data.open('GET', '/cities.json');
  data.responseType = "json";
  data.send();

  data.onload =  () => {
    const responseObj = data.response;
    // console.log(responseObj); 

    setResult(responseObj);
  };


  return(
    <Wrapper>
      <ListUl>
        {
          result.map(value => (
            <Cities 
              key={`${value.city} (${value.state})`}
              city={value.city} 
              state={value.state}  
            />
          ))
        }
      </ListUl>
    </Wrapper>
  )
  
} 

export default App;
