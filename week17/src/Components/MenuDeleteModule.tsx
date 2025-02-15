import { useState } from "react";
import { Modal, ModalHeader } from "react-bootstrap";


type DeleteModuleProps = {
    deleteMenuItem: () => void
    menuName: string
    menuIngredients: string[]
    menuPrice: number
}


export default function MenuDeleteModule({deleteMenuItem, menuName, menuIngredients, menuPrice,} : DeleteModuleProps) {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleClose = () => {
        setIsModalOpen(false)
    }


    return (
        <div>
            <button className="btn btn-danger me-1 btn-sm" onClick={() => setIsModalOpen(true)}>Remove</button>
            <Modal show={isModalOpen} onHide={handleClose}>
            <ModalHeader>
                <Modal.Title>Delete Menu Item: <strong>{menuName}</strong>?</Modal.Title>
            </ModalHeader>
            <Modal.Body>
                <div className="mb-4">
                    <div>
                        <strong>{menuName} - ${menuPrice}</strong>
                        <div>
                            {menuIngredients}
                        </div>
                    </div>
                </div>
                <hr/>
                <button className="btn btn-danger me-1" onClick={deleteMenuItem}>Delete</button>
                <button className="btn btn-secondary" onClick={() => setIsModalOpen(false)}>Close</button>
            </Modal.Body>
            </Modal>
        </div>
    )
}