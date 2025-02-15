import { Button, Card } from "react-bootstrap";
import bananas from "../assets/bananas.png"

export default function HomePageCards() {
    return (
        <div className="container d-flex flex-wrap justify-content-center mt-5 mb-5">
             <div className="col">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={bananas} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <Button variant="dark">More info</Button>
                </Card.Body>
            </Card>
            </div>
            <div className="col">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={bananas} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <Button variant="dark">More info</Button>
                </Card.Body>
            </Card>
            </div>
            <div className="col">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={bananas} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <Button variant="dark">More info</Button>
                </Card.Body>
            </Card>
            </div>
        </div>
    )
}