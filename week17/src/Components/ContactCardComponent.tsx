import { Button, Card } from "react-bootstrap"
import type { ContactList } from '../Components/Types';
import EditContacts from "./EditContacts";

type ContactCardComponentProps = {
    contactForm: ContactList[]
    updateContactInfo: (updatedContact: ContactList) => void
    loading: boolean
    deleteContact: (idToDelete: number) => void
}

export default function ContactCardComponent({contactForm, updateContactInfo, loading, deleteContact}: ContactCardComponentProps) {
    return (
        <div className="container d-flex flex-wrap justify-content-center mt-5">
            {loading ? (
                <p className="text-body-tertiary">Loading...</p>
            ) : (
                contactForm.map((contact) => (
                <Card key={contact.id} style={{ width: '18rem' }} className="m-3">
                    <Card.Body>
                        <Card.Title>{contact.name}</Card.Title>
                        <Card.Subtitle className="mb-2">{contact.position}</Card.Subtitle>
                        <Card.Text>
                            <strong>Email:</strong> {contact.email} <br />
                            <strong>Phone:</strong> {contact.phone} <br />
                            <strong>Information:</strong> {contact.information} 
                        </Card.Text>
                        <div className="d-flex p-1"> 
                            <div>
                                <Button className="me-1" variant="primary">Contact</Button>
                                <EditContacts deleteContact={deleteContact} contact={contact} updateContactInfo={updateContactInfo}/> 
                            </div>
                        </div>
                    </Card.Body>
                </Card>
                ))
            )}
        </div>
        
    )
}