import _ from 'lodash';
import React, { useState } from 'react';
import logo from './logo.svg';

import './App.css';

function App() {
  const [values, setValues] = useState(_.times(1000, ""));

  function handleValueChange(index, e) {
    const newValues = values.slice();
    newValues[index] = e.target.value;
    setValues(newValues);
  }

  return (
    <>
        {values.map((value, index) => {
          return (
            <input
                style={{width: '100px', margin: '10px', display: 'block'}}
                key={index}
                value={value}
                variant="outlined"
                onChange={(e) => handleValueChange(index, e)}
            />
          );
        })}
    </>
  );
}

export default App;
