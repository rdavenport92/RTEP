import React, { useState } from 'react';
import axios from 'axios';
import './App.scss';

const testGet = async (updateState: (data: string) => void) => {
  let updateValue = '';

  try {
    const result = await axios.get('http://localhost:3005/');
    updateValue = result.data;
  } catch (err) {
    updateValue = (err as Error).message;
  } finally {
    updateState(updateValue);
  }
};

const App: React.FC = () => {
  const [state, setState] = useState('Click the button to check status.');

  return (
    <div className="hello-container">
      <p>{state}</p>
      <button onClick={() => testGet(setState)}>Check Engine Status</button>
    </div>
  );
};

export default App;
