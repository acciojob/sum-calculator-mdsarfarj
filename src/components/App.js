import React, { useState, useEffect } from 'react';

const App = () => {
  const [numbers, setNumbers] = useState([]);
  const [sum, setSum] = useState(0);

  useEffect(() => {
    const calculateSumAsync = () => {
      const calculatedSum = numbers.reduce((acc, num) => acc + num, 0);
      setSum(calculatedSum);
    };

    const timerId = setTimeout(() => {
      calculateSumAsync();
    }, 300); // Adjust the delay as needed

    return () => clearTimeout(timerId); // Clear the timer on component unmount or re-render
  }, [numbers]);

  const handleInputChange = (event) => {
    const value = parseFloat(event.target.value);
    if (!isNaN(value)) {
      setNumbers((prevNumbers) => [...prevNumbers, value]);
    }
  };


const calculateSumAsync = () => {
  setTimeout(() => {
    const calculatedSum = numbers.reduce((acc, num) => acc + num, 0);
    setSum(calculatedSum);
  }, 300); // Adjust the delay as needed
};
  return (
    <div>
        {/* Do not remove the main div */}
        <h1>Sum calculator</h1>
        <input type="number" onChange={handleInputChange}/>
        <p>{`Sum: ${sum}`}</p>    </div>
  )
}

export default App
