import { Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const CategoriesCard = props => {
    return (
        <Card>
            <Card.Body>
                <Card.Title as={NavLink} to={`/category/${props.title}`}>{props.title}</Card.Title>
            </Card.Body>
        </Card>
    );
};

export default CategoriesCard;