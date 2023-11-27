import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Data from '../components/data';

function BasicExample() {
  return (
    <div>
      {Data.GirlImages.map((girlData, index) => (
        <Card key={index} style={{ width: '380px', margin: '10px' }}>
          <Card.Img
            variant="top"
            src={girlData['image-url']}
            alt={girlData.description}
          />
          <Card.Body>
            <Card.Title>{girlData.description}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default BasicExample;
