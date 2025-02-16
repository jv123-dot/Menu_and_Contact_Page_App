
type menuFormProps = {
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void
    handleChange: (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void
    formData: {
        name: string;
        ingredients: string;
        price: string;
    };
}

export default function AddMenuItemForm({ handleSubmit, handleChange, formData }: menuFormProps) {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <h5>Name</h5>
                <input
                    className="form-control mb-3"
                    type="text"
                    placeholder="Sandwich Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
            </div>
            <div>
                <h5>Price</h5>
                <input
                    className="form-control mb-3"
                    type="text"
                    placeholder="e.g. 10.99"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                />
            </div>
            <div>
                <h5>Ingredients List</h5>
                <textarea
                    className="form-control mb-3"
                    placeholder="e.g. Item 1, Item 2, etc."
                    name="ingredients"
                    value={formData.ingredients}
                    onChange={handleChange}
                />
            </div>
            <button type="submit" className="btn btn-success">Add To Menu</button>
        </form>
    )
}