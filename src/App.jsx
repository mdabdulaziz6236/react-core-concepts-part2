import Counter from "./Counter";
import Batsman from "./Batsman";
import Users from "./Users";
import Friends from "./Friends";
import Posts from "./posts";
import "./App.css";
import { Suspense } from "react";

// const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users").then(
//   (res) => res.json()
// );

// const fetchFriends = async() => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/users')
//   return res.json()
// }

const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
};

function App() {
  // const friendsPromise = fetchFriends()
  const postPromise = fetchPosts();
  function handlerClick() {
    alert("I'm Clicked");
  }
  const handlerClick3 = () => {
    alert("I'm clicked 3 with array function");
  };

  const handleAdd5 = (num) => {
    const newNumber = num + 5;
    alert(newNumber);
  };
  return (
    <>
      <h1>Vite + React</h1>
      <Suspense fallback={<h4>Post are coming.....</h4>}>
        <Posts postPromise = {postPromise}></Posts>
      </Suspense>
      {/* <Suspense fallback={<h3>Loading...</h3>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense> */}
      {/* <Suspense fallback={<h3>Friends are coming for treat....</h3>}>
      <Friends friendsPromise ={friendsPromise}></Friends>
      </Suspense> */}
      <Batsman></Batsman>
      <Counter></Counter>
      <button onClick={handlerClick}>Click me</button>
      <button
        onClick={function handlerClick2() {
          alert("I'm clicked 2");
        }}
      >
        Click me 2
      </button>
      <button onClick={handlerClick3}>Click me 3</button>
      <button
        onClick={() => {
          alert("I'm clicked 3");
        }}
      >
        Click me 3
      </button>
      <button onClick={() => handleAdd5(7)}>Click me 3</button>
    </>
  );
}

export default App;
