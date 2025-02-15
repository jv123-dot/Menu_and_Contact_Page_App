import { useEffect, useState } from 'react';
import ContactCardComponent from '../Components/ContactCardComponent';
import type { ContactList } from '../Components/Types';
import ContactPageModal from '../Components/ContactPageModal';
import '../App.css'


export default function ContactPage() {

    const [contactForm, setContactForm] = useState<ContactList[]>([])
    const [loading, setLoading] = useState(false)

    const contactPost = async (newPerson: ContactList) => {
        const response = await fetch(`http://localhost:3000/contacts`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newPerson)
        })
        const addedContact = await response.json()
        setContactForm(previousPage => [...previousPage, addedContact])
    
    }


    const contactFormData = async () => {
        setLoading(true)
        const response = await fetch('http://localhost:3000/contacts', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json'},
        })
        const data = await response.json()
        setContactForm(data)
        console.log(data)
        setLoading(false)
    }
    useEffect(() => {
        contactFormData()
    }, [])

    const updateConctactInfo = async (updateContact: ContactList) => {
        const response = await fetch(`http://localhost:3000/contacts/${updateContact.id}`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(updateContact)
        })
        const updatedContactData = await response.json()
        setContactForm(previousPage => previousPage.map(contact =>
            contact.id === updatedContactData.id ? updatedContactData : contact
        ))
    }

    const deleteContact = async (idToDelete: number) => {
            await fetch(`http://localhost:3000/contacts/${idToDelete}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json'}
        })
        setContactForm(prev => prev.filter(item => item.id !== idToDelete))
    }


    return (
        <>  
            <ContactPageModal  contactPost={contactPost} />
            <ContactCardComponent deleteContact={deleteContact} loading={loading} contactForm={contactForm} updateContactInfo={updateConctactInfo}/>
        </>
    )
}