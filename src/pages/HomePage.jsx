import React, { useState, useEffect } from 'react'
import DogList from '../components/DogList';

export default function HomePage() {
  // const url = `https://api.thedogapi.com/v1/images/search?limit=5`;
  // const apiKey = 'live_AmI0cgHhcix28uSaJUsNBXzBT7a4XtYZit1ngCj7PwqvNsWHOT5Rg794pU27yJQ3';

  // const [dogs, setDogs] = useState([]);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   fetch(url, {
  //     headers: {
  //       'x-api-key': apiKey
  //     }
  //   })
  //   .then(response => {
  //     if (!response.ok) {
  //       throw new Error('Network response was not ok');
  //     }
  //     return response.json();
  //   })
  //   .then(data => {
  //     setDogs(data);
  //   })
  //   .catch(error => {
  //     setError(error.message);
  //   });
  // }, []);
  
  return (
    <>
      HomePage
      {/* { error && <p>There was an error</p>} */}
      <DogList />
    </>
  )
}
