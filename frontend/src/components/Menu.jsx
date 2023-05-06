import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import logo from "../Images/wild-beer-logo.png";

function Menu() {
  let { username } = useParams();
  if (username === undefined) {
    username = "";
  }
  if (username.length > 15) {
    username = username.slice(0, 15);
  }
  const [inputValue, setInputValue] = useState(username);

  const handleChange = (event) => {
    const regex = /^[a-zA-Zé-]{0,15}$/;
    if (regex.test(event.target.value)) {
      setInputValue(event.target.value);
    }
  };
  return (
    <div className="background">
      <div className="home">
        <img src={logo} alt="" />
        <section className="containerMenu">
          <div className="firstMenu">
            <label>
              Entrez votre pseudo de Zythologue Amateur
              <input
                type="text"
                className="inputFirstMenu"
                value={inputValue}
                onChange={handleChange}
              />
            </label>
            <Link to={`/Menu/wild-beer-gaming/${inputValue}`}>
              <button type="button" className="buttonFirstMenu">
                Jouer
              </button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Menu;
