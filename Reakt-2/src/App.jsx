import "./App.css";
import FavoriteMovies from './components/FavoriteMovies.jsx';
import PersonalPage from "./components/PersonalPage.jsx";
import Clock from "./components/Clock.jsx";
import Pet from "./components/Pet.jsx";


function App() {
    const movie = {
        title: "Побег из Шоушенка",
        director: "Фрэнк Дарабонт",
        year: 1994,
        studio: "Castle Rock Entertainment",
        description: "История Энди Дюфрейна, приговорённого к пожизненному заключению за убийство, которого он не совершал.",
        poster: "https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg"
    };

    const Person = {
        Name: "Raul",
        SurName: "Abdurahmanli",
        FarName: "Anar",
        Email: "raulabd900@gmail.com",
        Phone: "055 944 74 26",

    };

    const petInfo = {
        name: "Мурзик",
        type: "Кошка",
        age: 3,
        breed: "Британская короткошерстная",
        photoUrl: "https://cdn2.thecatapi.com/images/MTY3ODIyMQ.jpg"
    };

  return (
      <div className="app-container">
          <div className="task-block">
              <h2>Задание 1: </h2>
              <FavoriteMovies{...movie} />


          </div>

          <div className="task-block">
              <h2>Задание 2: </h2>
              <PersonalPage{...Person}/>

          </div>

          <div className="task-block">
              <h2>Задание 3: </h2>
              <Clock title="Текущее время"/>

          </div>

          <div className="task-block">
              <h2>Задание 4: </h2>
              <Pet {...petInfo} />

          </div>
      </div>
  )
}

export default App
