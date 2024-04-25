import "./Navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faPlus } from "@fortawesome/free-solid-svg-icons";
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
          <a href="/">
            <img src={logo} alt="Mancos Gaming" width="60px" />
          </a>
        </li>
        {menuItems.map((menuItem, index) => (
          <li
            key={index}
            className={menuItem.subItems ? "dropdown padding" : "padding"}>
            <a href={menuItem.link}>
              {menuItem.title}
              {menuItem.subItems && <FontAwesomeIcon icon={faPlus} />}
            </a>
            {menuItem.subItems && (
              <div className="dropdown-content">
                {menuItem.subItems.map((subItem, subIndex) => (
                  <a key={subIndex} href={subItem.link}>
                    {subItem.title}
                  </a>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
      <ul>
        <li>
          <button id="toggleModal" className="icon">
            <FontAwesomeIcon icon={faUser} size="xl" />
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
