import icon from "../assets/world-icon.png"

export default function Header() {
    return (
      <header className="header--container">
        <img className="header--icon" src={icon} />
        <h1 className="header--heading">my travel journal.</h1>
      </header>
    )
}