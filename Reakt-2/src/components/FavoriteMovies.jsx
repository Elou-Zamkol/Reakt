
import "./FavoriteMovies.css"

function FavoriteMovies({title, director, year, studio, description, poster}) {
    return (
        <>
            <div className="favorite-movie-card">
                <img src={poster} alt={`Постер фильма ${title}`} className="movie-poster" />
                <div className="movie-info">
                    <h2>{title}</h2>
                    <p><strong>Режиссёр:</strong> {director}</p>
                    <p><strong>Год выпуска:</strong> {year}</p>
                    <p><strong>Киностудия:</strong> {studio}</p>
                    <p><strong>Описание:</strong> {description}</p>
                </div>
            </div>
        </>
    )
}

export default FavoriteMovies