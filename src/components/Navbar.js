import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <div>
            <ul>
                <li>
                    <NavLink className={(data) => console.log(data)} to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/about'>about</NavLink>
                </li>
                <li>
                    <NavLink to='/users'>users</NavLink>
                </li>
            </ul>
        </div>
    )
}
export default Navbar;