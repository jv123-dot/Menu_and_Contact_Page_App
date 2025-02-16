import { Button, Card } from "react-bootstrap";
import bananas from "../assets/bananas.png"

export default function HomePageCards() {
    return (
        <div className="container d-flex flex-wrap justify-content-center mt-5 mb-5">
             <div className="col">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={bananas} />
                <Card.Body>
                    <Card.Title>Card One</Card.Title>
                    <Card.Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum consequuntur quibusdam illo repudiandae odit deserunt.
                    </Card.Text>
                    <Button variant="dark">More info</Button>
                </Card.Body>
            </Card>
            </div>
            <div className="col">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={bananas} />
                <Card.Body>
                    <Card.Title>Card Two</Card.Title>
                    <Card.Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil iusto ex nobis sit optio eaque, facere impedit nisi tempore pariatur rem, deleniti quo soluta enim.
                    </Card.Text>
                    <Button variant="dark">More info</Button>
                </Card.Body>
            </Card>
            </div>
            <div className="col">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={bananas} />
                <Card.Body>
                    <Card.Title>Card Three</Card.Title>
                    <Card.Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum consequuntur quibusdam illo repudiandae odit deserunt.
                    </Card.Text>
                    <Button variant="dark">More info</Button>
                </Card.Body>
            </Card>
            </div>
        </div>
    )
}