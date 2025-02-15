import { Link } from "react-router-dom";

export default function ErrorPage() {
    return (
        <div className="text-center mt-5">
            <h1>Error Page Not Found</h1>
            <div className="fs-3">
                <Link to="/">Return Home</Link>
            </div>
        </div>
    )
}