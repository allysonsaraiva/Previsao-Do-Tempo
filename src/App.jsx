import React, { useState } from 'react';
import fetchData from './services/api';

import initialData from './helpers/initialData';
import Card from './components/Card';
import Search from './components/Search';

function App() {
  const [city, setCity] = useState('');
  const [data, setData] = useState(initialData);

  const getData = (event) => {
    event.preventDefault();

    fetchData(city).then((response) => {
      setData(response);
    });
  };

  return (
    <div className="flex flex-col w-full h-screen items-center sm:justify-center p-4">
      <Search handleSubmit={getData} handleInputChange={setCity} city={city} />
      <Card data={data} />

    </div>

  );
}

export default App;
