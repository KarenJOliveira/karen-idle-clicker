import './Rodape.css';
import Loja from '../Loja/Loja.js';
import Status from '../Status/Status.js';

export default function Rodape(props) {
    return (
        <footer className='Rodape'>
            <Loja />
            <Status />
        </footer>
    );
}
