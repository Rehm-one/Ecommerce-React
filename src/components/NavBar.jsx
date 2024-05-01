import ButtonComponent from './ButtonComponent';
import CartWidget from './CardWidget';
import './NavBar.css';

export default function NavBar() {
    const clickEnAbrigos = () => {
        console.log('Hiciste click en Abrigos');
    };

    const clickEnCamisetas = () => {
        console.log('Hiciste click en Camisetas');
    };

    const clickEnPantalones = () => {
        console.log('Hiciste click en Pantalones');
    };

    return (
        <header className="allNav">
            <h1>Style Haven</h1>
            <nav className="barra">
                <ButtonComponent className="botones" nombre="Abrigos" callback={clickEnAbrigos} />
                <ButtonComponent className="botones" nombre="Camisetas" callback={clickEnCamisetas} />
                <ButtonComponent className="botones" nombre="Pantalones" callback={clickEnPantalones} />
            </nav>

            <CartWidget />
        </header>
    );
}