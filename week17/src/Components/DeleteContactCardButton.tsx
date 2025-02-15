
type DeleteContactCardProps = {
    deleteContact: (idToDelete: number) => void
    contactId: number
}

export default function DeleteContactCardButton({deleteContact, contactId}: DeleteContactCardProps) {
    
    return (
        <div className="d-flex">
            <button onClick={() => deleteContact(contactId)} className="btn btn-danger">Delete</button>
        </div>
    )
}