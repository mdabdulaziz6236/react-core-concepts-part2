import Counter from './counter'
import Batsman from './batchman';
import "./App.css";


function App() {
  function handlerClick(){
    alert("I'm Clicked")
  }
 const handlerClick3 = ()=>{
  alert("I'm clicked 3 with array function")
 }

 const handleAdd5 = (num)=> {
  const newNumber = num +5
  alert(newNumber)
 }
  return (
    <>
      <Batsman></Batsman>
      <Counter></Counter>
      <h3>Vite + React</h3>
      <button onClick={handlerClick}>Click me</button>
      <button onClick={function handlerClick2(){
        alert("I'm clicked 2")
      }}>Click me 2</button>
      <button onClick={handlerClick3}>Click me 3</button>
      <button onClick={()=>{alert("I'm clicked 3")}}>Click me 3</button>
      <button onClick={()=>handleAdd5(7)}>Click me 3</button>
    </>
  );
}

export default App;
