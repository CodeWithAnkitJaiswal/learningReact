import "./App.css";
import Card from "./components/card";


function App() {
  let myArr={name: "ch"}
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-3xl">
        Chai aur react
      </h1>
      <Card username="CwAnkitJaiswal7" someObj={myArr} btnText="click me" />
      <Card username="CwAnkitJaiswal7" someObj={myArr} btnText="don't click" />
    </>
  );
}

export default App;
