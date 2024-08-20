import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <div className="App">
        <NavBar />
        <ItemListContainer greeting="Bienvenidos a Compras Zone!" />
      </div>
    </>
  );
}

export default App;
