
import { useSelector } from 'react-redux';
import { getAllCategories } from './../../../redux/categoriesRedux';
import { Row, Col } from 'react-bootstrap';
import CategoryCard from './../CategoriesCard/CategoriesCard';

const CategoriesList = () => {

    const categories = useSelector(getAllCategories);

    return (
        <>
            <Row className="justify-content-md-center">
                <Col md="8">
                    <h1>All categories</h1>
                    <Row className="mt-4">
                        {categories.map(category => <CategoryCard key={category.id} title={category.title} />)}
                    </Row>
                </Col>
            </Row>
        </>
    );
};

export default CategoriesList;