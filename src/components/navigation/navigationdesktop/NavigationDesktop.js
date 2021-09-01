import RoutingPath from "../../../routes/RoutingPath";
import { useHistory } from "react-router"
import { NavButton } from "../../navButton/NavButton";
import './NavigationDesktop.css'

export const NavigationDesktop = () => {
    const history = useHistory();
    return (
        <nav className="nav-bar">
            <NavButton buttonText="Home" path={RoutingPath.homeView} />
            <NavButton buttonText="Contact" path={RoutingPath.contact} />
            <NavButton buttonText="About" path={RoutingPath.about} />
            <NavButton buttonText="Portfolio" path={RoutingPath.portfolio} />
        </nav>
    )
}
