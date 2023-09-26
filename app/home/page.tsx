import './style.css'
import Header from '../../components/header/Header';
import Section from '../../components/section/Section';
import Footer from '../../components/footer/Footer';

export default function home() {
    return (
        <>
            <Header/>
            <p>Essa e minha pagina Home!!!</p>
            <Section/>
            <Footer/>
        </>
    );
};