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
    const [formData, setFormData] = useState(initialState)
    const [loading, setLoading] = useState(false)
    const [getFromAPI, setGetFromAPI] = useState<MenuItem[]>([]);
    // ------

    const postFormData = async () => {
        const response = await fetch('http://localhost:3000/menu', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        })

        const newMenuItem = await response.json()
        setGetFromAPI(previousMenu => [...previousMenu, newMenuItem])
    }

    const deleteMenuItem = async (idToDelete: number) => {
        await fetch(`http://localhost:3000/menu/${idToDelete}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        });
        setGetFromAPI(prev => prev.filter(item => item.id !== idToDelete));
    };


    const handleChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        postFormData()
        setFormData(initialState)
    }

    // -------------------

    const fetchData = async () => {
        setLoading(true)
        const response = await fetch('http://localhost:3000/menu', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        })
        const data = await response.json()
        setGetFromAPI(data)
        setLoading(false)
    }

    useEffect(() => {
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
                                {loading ? (
                                    <p className="text-body-tertiary">Loading Menu...</p>
                                ) : (
                                    getFromAPI.map((menu) => (
                                        <div className="col-md-6" key={menu.id}>
                                            <div className="card p-3">
                                                <p><strong>{menu.name} - ${menu.price}</strong></p>
                                                <p>{menu.ingredients}</p>
                                                <MenuDeleteModule deleteMenuItem={() => deleteMenuItem(menu.id)}
                                                    menuName={menu.name}
                                                    menuIngredients={menu.ingredients}
                                                    menuPrice={menu.price}
                                                    />
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}