import {useState} from 'react';
function Pah() {
  const [count, setCount] = useState(0);
  const [displayText, setDisplayText] = useState('Kaioken');

  const handleClick = () => {
    setCount(count + 1);

    if (count=== 4) {
      setDisplayText(displayText === 'Kaioken' ? 'SuperSaiyan' : 'kaioken');
      setCount(0);
    }
  };

  return (
    <div>
      <h1>{displayText}</h1>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}
export default Pah;