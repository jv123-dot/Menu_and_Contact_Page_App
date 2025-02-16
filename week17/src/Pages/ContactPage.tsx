import { useEffect, useState } from 'react';
import ContactCardComponent from '../Components/ContactCardComponent';
import type { ContactList } from '../Components/Types';
import ContactPageModal from '../Components/ContactPageModal';
import '../App.css'


export default function ContactPage() {

    const [contactForm, setContactForm] = useState<ContactList[]>([]) // initializes state with an empty array in shape of ContactList
    const [loading, setLoading] = useState(false)

    const contactPost = async (newPerson: ContactList) => { // post request to add a new person to API
        const response = await fetch(`https://67a7ef99203008941f68d4a4.mockapi.io/mockAPI/contacts`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newPerson)
        })
        const addedContact = await response.json()
        setContactForm(previousPage => [...previousPage, addedContact])
    
    }


    const contactFormData = async () => { // sets loading to true while fetching, grabs data from API, sets loading to false and sets "setsContactForm" to data retreived
        setLoading(true)
        const response = await fetch('https://67a7ef99203008941f68d4a4.mockapi.io/mockAPI/contacts', {
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
    

    const updateConctactInfo = async (updateContact: ContactList) => {  // put request to update a contact's information. uses map method to iterate over each item in the array replacing the old data with the new. Uses ID to find correct one
        const response = await fetch(`https://67a7ef99203008941f68d4a4.mockapi.io/mockAPI/contacts/${updateContact.id}`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(updateContact)
        })
        const updatedContactData = await response.json()
        setContactForm(oldInfo => oldInfo.map(contact =>
            contact.id === updatedContactData.id ? updatedContactData : contact
        ))
    }

    const deleteContact = async (idToDelete: number) => { // delete request. creates a copy of the old array and filters then returns everything that is NOT equal to the ID selected. 
            await fetch(`https://67a7ef99203008941f68d4a4.mockapi.io/mockAPI/contacts/${idToDelete}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json'}
        })
        setContactForm(prev => prev.filter(item => item.id !== idToDelete))
    }


    return ( // renders the components 
        <>  
            <ContactPageModal  contactPost={contactPost} />
            <ContactCardComponent deleteContact={deleteContact} loading={loading} contactForm={contactForm} updateContactInfo={updateConctactInfo}/>
        </>
    )
}