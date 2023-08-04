import { useState } from 'react';

import { Select, SelectOption } from './Select';
import './App.css';

const options = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' },
  { label: 'Option 4', value: '4' },
  { label: 'Option 5', value: '5' },
];

function App() {
  const [value1, setValue1] = useState<SelectOption | undefined>(options[0]);
  const [value2, setValue2] = useState<SelectOption[]>([options[0]]);

  return (
    <>
      <main>
        <h1>
          <code>react-select</code> clone
        </h1>
        <Select
          options={options}
          value={value1}
          onChange={(o) => setValue1(o)}
        />
        <Select
          multiple
          options={options}
          value={value2}
          onChange={(o) => setValue2(o)}
        />
      </main>
    </>
  );
}

export default App;
