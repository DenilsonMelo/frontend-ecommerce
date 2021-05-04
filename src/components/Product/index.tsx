import { Container } from './styles';

export function Product(props) {
    return (
        <Container>
            <a href="#">
                <img src={props.image} alt={props.title}/>
                <hr/>
                <span>{props.title}</span>
                <div>
                    <img src={props.stars} alt="Avaliations"/>
                    <span>{props.avaliations}</span>
                </div>
                <p>{props.price}</p>
                
            </a>
        </Container>
    )
}
