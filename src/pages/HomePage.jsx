import React, {useState, useEffect} from 'react'
import {ThreeCircles} from 'react-loader-spinner';

export default function HomePage() {
  const url = `https://api.thedogapi.com/v1/images/search?limit=2`;
  const apiKey = 'live_AmI0cgHhcix28uSaJUsNBXzBT7a4XtYZit1ngCj7PwqvNsWHOT5Rg794pU27yJQ3';

  const [dogs, setDogs] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url, {
      headers: {
        'x-api-key': apiKey
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setDogs(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      HomePage
      { error && <p>There was an error</p>}
      { loading ?
        <ThreeCircles 
          visible={loading}
          height="100"
          width="100"
          color="#4fa94d"
          ariaLabel="three-circles-loading"/> :
        <ul>
          {dogs.map((dog) => (
            <li key={dog.id}>
              {dog.name}
              <img src={dog.url} style={{ width: '150px', height: '150px' }}/>
            </li>
          ))}
        </ul>
      }
    </div>
  )
}
