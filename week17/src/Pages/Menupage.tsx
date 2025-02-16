import { useEffect, useState } from "react"
import MenuDeleteModule from "../Components/MenuDeleteModule"
import AddMenuItemForm from "../Components/AddMenuItemForm";

const initialState = {
    name: '',
    ingredients: '',
    price: ''
}

type MenuItem = {
    id: number;
    name: string;
    ingredients: string[]
    price: number;
};

export default function MenuPage() {
    const [formData, setFormData] = useState(initialState) // state variable to keep track of data entered into form input fields used create a new menu item
    const [loading, setLoading] = useState(false) // keeps track of whether data is being fetched or not
    const [getFromAPI, setGetFromAPI] = useState<MenuItem[]>([]); // stores menu items fetched from API 
    const [errorMessage, setErrorMessage] = useState('')
    // ------

    const postFormData = async () => { // sends post request to add data entered into input fields to API/json server
        const response = await fetch('https://67a7ef99203008941f68d4a4.mockapi.io/mockAPI/menu', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        })

        const newMenuItem = await response.json()
        setGetFromAPI(previousMenu => [...previousMenu, newMenuItem])
    }


     
    const deleteMenuItem = async (idToDelete: number, nameToDelete: string) => { // filters out item to delete it from the API. Error handling if it fails
        if(!idToDelete) {
            setErrorMessage('Id not found ' + errorMessage)
        }
        try {
            const response = await fetch(`https://67a7ef99203008941f68d4a4.mockapi.io/mockAPI/menu/${idToDelete}`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json'}
            })

            if(!response.ok) {
                setErrorMessage(`Failed to delete ${nameToDelete}  ` + errorMessage)
            } else {
                 setGetFromAPI(prev => prev.filter(item => item.id !==idToDelete))
            } 
        } catch (error: any) {
                console.error('error during delete,', error)
                setErrorMessage("There was an error: " + error.message)
            }
        }
    


    const handleChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => { // 
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => { // calls PostFormData function to execute the POST request and resets form/input fields
        event.preventDefault()
        postFormData()
        setFormData(initialState)
    }

    // -------------------
 
    useEffect(() => { // get request to fetch menu items, stores in setGetDataFromAPI varibale. Error message if fails
        const fetchData = async () => {
            setLoading(true)
            try {
                const response = await fetch('https://67a7ef99203008941f68d4a4.mockapi.io/mockAPI/menu', {
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json' }
                })
                if (!response.ok) {
                    setErrorMessage( "There was an error: " + response.statusText)
                } else {
                    const data = await response.json()
                    setGetFromAPI(data)
                }

            } catch (error: any) {
                setErrorMessage("There was an error: " + error.message)
            }
            setLoading(false)
        }
        fetchData()
    }, [])



    return ( 
        <>
            <div className="container d-flex flex-column p-5 mx-auto">
                <div className="row g-4">
                    <div className="col-md-6">
                        <div className="card p-3">
                            <AddMenuItemForm formData={formData} handleSubmit={handleSubmit} handleChange={handleChange} />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card p-3">
                            <h1 className="text-center mb-4">Sandwiches</h1>
                            <div className="row g-4">
                                {
                                loading ? <p className="text-body-tertiary">Loading Menu...</p> :
                                errorMessage ? <p className="text-danger">{errorMessage}</p> :
                                    getFromAPI.map((menu) => ( // Uses map() to create a card for each item/object from API. Creates a delete button for each card as well
                                        <div className="col-md-6" key={menu.id}> 
                                            <div className="card p-3">
                                                <p><strong>{menu.name} - ${menu.price}</strong></p>
                                                <p>{menu.ingredients}</p>
                                                <MenuDeleteModule deleteMenuItem={() => deleteMenuItem(menu.id, menu.name)}
                                                    menuName={menu.name}
                                                    menuIngredients={menu.ingredients}
                                                    menuPrice={menu.price}
                                                    />
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}