import "./Navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";

function Navbar() {
  const menuItems = [
    { title: "About us", link: "/about" },
    { title: "News", link: "/news" },
    {
      title: "Tournament",
      link: "/tournament",
      subItems: [
        { title: "Teams", link: "/tournament/tournament-teams" },
        { title: "Players", link: "/tournament/tournament-player" },
      ],
    },
    {
      title: "Community",
      link: "/community",
      subItems: [
        { title: "Teams", link: "/community/community-teams" },
        { title: "Players", link: "/community/community-player" },
      ],
    },
  ];

  return (
    <nav>
      <ul>
        <li className="sparator-logo">
          <Link to="/">
            <img src={logo} alt="Mancos Gaming" width="60px" />
          </Link>
        </li>
        {menuItems.map((menuItem) => (
          <li
            key={menuItem.link}
            className={menuItem.subItems ? "dropdown padding" : "padding"}>
            <Link to={menuItem.link}>
              {menuItem.title}
              {menuItem.subItems && <FontAwesomeIcon icon={faPlus} />}
            </Link>
            {menuItem.subItems && (
              <div className="dropdown-content">
                {menuItem.subItems.map((subItem) => (
                  <Link key={subItem.link} to={subItem.link}>
                    {subItem.title}
                  </Link>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
      <ul>
        <li>
          <Link className="icon" to="/account" aria-label="Open account page">
            <FontAwesomeIcon icon={faUser} size="xl" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
