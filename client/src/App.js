import axios from 'axios';
import React, { useState, useEffect } from 'react';

function App() {
  const [resp, setResponse] = useState('');
  useEffect(() => {
    const getResponse = async () => {
      const { data: response } = await axios.get('/api/hello');
      setResponse(response);
    };
    getResponse();
  }, []);
  console.log(resp);
  return (
    <div className='App'>
      <header className='App-header'>
        <p>man u</p>
      </header>
    </div>
  );
}

export default App;
