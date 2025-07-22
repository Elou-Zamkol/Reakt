import "./AtelierSlider.css"
import { Component } from "react";


const slides = [
    {
        id: 1,
        title: "Филиал в центре города",
        description: "Уютное пространство с современным дизайном.",
        imageUrl: "../../../../public/hotel-foto-1.jpg"
    },
    {
        id: 2,
        title: "Филиал на Невском проспекте",
        description: "Просторное ателье с профессиональным оборудованием.",
        imageUrl: "../../../../public/hotel-foto-2.jpg"
    },
    {
        id: 3,
        title: "Филиал в торговом центре",
        description: "Удобное расположение и доступные услуги.",
        imageUrl: "../../../../public/hotel-foto-3.jpg"
    }
];



interface AtelierSliderProps {
  size?: 'small' | 'medium' | 'large';
}

interface AtelierSliderState {
  currentIndex: number;
}




class AtelierSlider extends Component<AtelierSliderProps, AtelierSliderState> {

    state = { currentIndex: 0 };


    //===============================================================

    prevSlide = () => {
        this.setState(({ currentIndex }) => ({
            currentIndex: (currentIndex === 0 ? slides.length - 1 : currentIndex - 1)
        }));
    };

    nextSlide = () => {
        this.setState(({ currentIndex }) => ({
            currentIndex: (currentIndex === slides.length - 1 ? 0 : currentIndex + 1)
        }));
    };

    //===============================================================

    render() {
        const { currentIndex } = this.state;
        const slide = slides[currentIndex];

        // Проп size → small, medium, large (по умолчанию medium)
        const sizeClass = this.props.size || "medium";

        return (
            <div className={`atelier-slider ${sizeClass}`}>
                <button className="nav-btn prev-btn" onClick={this.prevSlide}>&#10094;</button>
                <div className="slide">
                    <img src={slide.imageUrl} alt={slide.title} />
                    <div className={`slide-info ${sizeClass}`}>
                        <h3>{slide.title}</h3>
                        <p>{slide.description}</p>
                    </div>
                </div>
                <button className="nav-btn next-btn" onClick={this.nextSlide}>&#10095;</button>
            </div>
        );
    }
}

// Экспорт компонента
export default AtelierSlider;
