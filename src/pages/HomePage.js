import { Link } from "react-router-dom";
const userId = 10
function HomePage() {
    return (
        <div>
            <h1>Applcation</h1>
            <Link to={`/users/${userId}`}>Usuarios </Link>
        </div>
    )
}
export default HomePage;