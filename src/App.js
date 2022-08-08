import { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  const refColor = useRef();
 console.log(refColor)
  const [state, setState] = useState(false);

  useEffect(() => {
   
    setTimeout(() => {
      setState(!state);
      refColor.current.style.backgroundColor = state ? 'red' : 'black';
    }, 1000);
  }, [state]);

  return (
    <div
      ref={refColor}
      style={{
        width: '500px',
        height: '500px',
        margin: '0 auto',
      }}
    ></div>
  );
}

export default App;
