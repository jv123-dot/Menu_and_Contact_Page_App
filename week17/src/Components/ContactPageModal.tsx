import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ContactList } from './Types';

type ContactPageModal = {
  contactPost: (newPerson: ContactList) => void

}



export default function ContactPageModal({ contactPost }: ContactPageModal) {
  const [isModalOpen, setIsModalOpen] = useState(false) // keeps track of modal state, open or closed
  const [isFormInputOpen, setIsFormInputOpen] = useState(false) // keeps track of form inputs state, whether to show or hide
  const [formData, setFormData] = useState<ContactList>({ // 
    name: '',
    phone: '',
    email: '',
    position: '',
    information: ''
  });



  const handleSubmit = () => { // sends new data to API, changes modal and form input state to false, clears form
    contactPost(formData);
    setIsModalOpen(false);
    handleClear();
    setIsFormInputOpen(false)
  };





  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => { // updates formdata state to whatever is typed into input fields
    setFormData({...formData, [e.target.name]: e.target.value})
    
  };

  const handleClear = () => { // clears form when function is called 
    setFormData({
      name: '',
      phone: '',
      email: '',
      position: '',
      information: ''
    });
  };


  const handleEdit = () => { 
    setIsFormInputOpen(true)

  }

  const handleClose = () => { // closes modal, clears form and input fields when called
    setIsModalOpen(false)
    handleClear()
    setIsFormInputOpen(false)
  }


  return (
    <>
      <h1 className='text-center mt-5'>Who Are We?</h1>
      <div className='position-fixed p-3 border border-2 rounded' style={{left: '20px'}}>
        <button className='btn btn-info btn-sm' onClick={() => setIsModalOpen(true)}>Create Contact</button>
      </div>
      <Modal show={isModalOpen} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create New Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {!isFormInputOpen && (
            <div className='mx-auto'>
              <button className='btn btn-info' onClick={handleEdit}>Create New Contact?</button>
            </div>
          )}
          {isFormInputOpen && (
            <div>
              <div>
                <div>
                  <label><strong>Name</strong></label>
                  <input className='form-control mb-2'
                    type="text" name="name"
                    placeholder='Name'
                    value={formData.name}
                    onChange={handleChange} />
                </div>
                <div>
                  <label><strong>Phone</strong></label>
                  <input className='form-control mb-2'
                    type="text"
                    name="phone"
                    placeholder='Phone Number'
                    value={formData.phone}
                    onChange={handleChange} />
                </div>
                <div>
                  <label><strong>Email</strong></label>
                  <input
                    className='form-control mb-2'
                    type="text"
                    name="email"
                    placeholder='Email'
                    value={formData.email}
                    onChange={handleChange} />
                </div>
                <div>
                  <label><strong>Position</strong></label>
                  <input
                    className='form-control mb-2'
                    type="text"
                    name="position"
                    placeholder='Position'
                    value={formData.position}
                    onChange={handleChange} />
                </div>
                <div>
                  <label><strong>Info</strong></label>
                  <textarea
                    className='form-control mb-2'
                    name="information"
                    placeholder='Info'
                    value={formData.information}
                    onChange={handleChange} />
                </div>
                <div className='d-flex justify-content-end'>
                  <Button className='me-1' variant="success" onClick={handleSubmit}>
                    Create
                  </Button>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                </div>
              </div>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>

        </Modal.Footer>
      </Modal>
    </>
  )
}