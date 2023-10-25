import "./Recursos.css"

export default function Recursos(props){
    const estoque = props.estoque;
    
    return (
        <section className="Recursos">
            <Recurso nome="madeira" imagem="🌲" valor={estoque.madeira} />
            <Recurso nome="ouro" imagem="💰" valor={estoque.ouro} />
            <Recurso nome="Casa" imagem="🏠" valor={estoque.casa} />
            <Recurso nome="Trabalhador" imagem="👷" valor={estoque.trabalhador} />
        </section>
    );
}

function Recurso(props) {
    return (
        <div className="Recurso">
            <h1> {props.nome} </h1>
            <span> {props.imagem} </span>
            <p> {props.valor} </p>
        </div>
    );
}
