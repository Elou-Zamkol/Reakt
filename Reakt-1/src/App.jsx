import "./App.css";
import CityInfo from "./components/City.jsx"
import FavoriteBook from "./components/favoriteBook.jsx";
import MyComponent from "./components/klassCity.jsx"
import KlassFavoriteBook from "./components/klassFavoriteBook.jsx";


function App() {

  return (
      <div className="app-container">
          <div className="task-block">
              <h2>Задание 1: Информация о городе используя функциональные компоненты</h2>
              <CityInfo />
          </div>

          <div className="task-block">
              <h2>Задание 2: Информация о городе используя классовые компоненты</h2>
              <MyComponent />
          </div>

          <div className="task-block">
              <h2>Задание 3: Информация о книге используя функциональные компоненты</h2>
              <FavoriteBook />
          </div>

          <div className="task-block">
              <h2>Задание 4: Информация о книге используя классовые компоненты</h2>
              <KlassFavoriteBook />
          </div>
      </div>
  )
}

export default App
