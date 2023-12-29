
import React,{useState,useEffect} from "react";
import './../styles/App.css';

const App = () => {

  const [numbers, setNumbers] = useState([]);
const [sum,setSum]=useState(0);
const handleInputChange = (event) => {
  const value = parseFloat(event.target.value);
  if (!isNaN(value)) {
    setNumbers((prevNumbers) => [...prevNumbers, value]);
    calculateSumAsync();
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
        <p>Sum: {sum}</p>
    </div>
  )
}

export default App
