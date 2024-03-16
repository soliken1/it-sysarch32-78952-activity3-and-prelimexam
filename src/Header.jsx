import Pokeball from "./assets/game.png";
function Header() {
  return (
    <header>
      <img className="img-header" src={Pokeball} />
      <label className="header-label">Pokedex</label>
    </header>
  );
}

export default Header;
