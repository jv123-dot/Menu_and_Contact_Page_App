import { useEffect, useState } from "react"
import { Button, Modal } from "react-bootstrap"
import { ContactList } from "./Types"
import DeleteContactCardButton from "./DeleteContactCardButton"

type EditContactsProps = {
    contact: ContactList 
    updateContactInfo: (idToEdit: ContactList) => void
    deleteContact: (idToDelete: number) => void
}

export default function EditContacts({updateContactInfo, contact, deleteContact}: EditContactsProps) {
   const [isModalOpen, setIsModalOpen] = useState(false) // keeps track of modal state
   const [isFormInputOpen, setIsFormInputOpen] = useState(false) // keeps track of the form's state
   const [updatedContact, setUpdateContact] = useState(contact) 
       
   
   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => { 
        setUpdateContact({...updatedContact, [e.target.name]: e.target.value})
   }

   const handleSubmit = () => { // runs when presses 'save' button, called updateContactInfo function that was passed down as a prop to update the contact info, closes modal, and resets form
        updateContactInfo(updatedContact)
        setIsFormInputOpen(false)
        setIsModalOpen(false)
        setUpdateContact({
            name: '',
            phone: '',
            email: '',
            position: '',
            information: ''
        })
   }

   const handleEdit = () => {
        setIsFormInputOpen(true)
   }

   const handleClose = () => { // closes modal and input when button calling handleClose function is clicked
        setIsModalOpen(false)
        setIsFormInputOpen(false)
   }

   useEffect(() => { // runs when contact changes to make sure it matches data
        setUpdateContact(contact)
   }, [contact])
   
    return (   
        <>
            <Button variant="dark" onClick={() => setIsModalOpen(true)}>Edit</Button>
            <Modal show={isModalOpen} onHide={handleClose}>
            <Modal.Header>
                <Modal.Title>Manage Contacts</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {!isFormInputOpen && ( // if "isFormInputOpen" is false it displays edit and delete button, if true it shows the label and input fields
                    <div className="d-flex align-items-center">
                        <div>
                            <Button variant="dark" onClick={handleEdit}>Edit</Button>
                        </div>
                        <div className="p-1">
                            {contact.id !== undefined && (
                                <DeleteContactCardButton contactId={contact.id} deleteContact={deleteContact}/>
                        )}
                        </div>
                   </div>
                )}
                {isFormInputOpen && (
                    <div className="p-3">
                        <div>
                            <label><strong>Name</strong></label>
                            <input className="form-control mb-2" name="name" placeholder={contact.name} onChange={handleChange}/>
                        </div>
                        <div>
                            <label><strong>Phone Number</strong></label>
                            <input className="form-control mb-2" name="phone" value={updatedContact.phone} onChange={handleChange}/>
                        </div>
                        <div>
                            <label><strong>Email</strong></label>
                            <input className="form-control mb-2" name="email" placeholder={contact.email} onChange={handleChange}/>
                        </div>
                        <div>
                            <label><strong>Position</strong></label>
                            <input className="form-control mb-2" name="position" placeholder={contact.position} onChange={handleChange}/>
                        </div>
                        <div>
                            <label><strong>Info</strong></label>
                            <textarea className="form-control mb-2" name="information" placeholder={contact.information} onChange={handleChange}/>
                        </div>
                        <div className="d-flex justify-content-end">
                            <Button variant="success" onClick={handleSubmit}>Save Changes</Button>
                        </div>       
                    </div>
                )}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Close</Button>
            </Modal.Footer>
            </Modal>
        </>
            
            
    )
}