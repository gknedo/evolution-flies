import './Menu.css';
import { availableBackgrounds } from '../Background/BackgroundUtils'

function Menu({setMenuState, options, setOptions}) {
  const changeContrast = () => (
    setOptions({...options, highContrast: !options.highContrast})
  );
  console.log(options);

  return (
    <div className="menu">
      <div className="item">
      <select
        onChange={(event) => setOptions({...options, background: availableBackgrounds[event.target.value]})}
      >
        {availableBackgrounds.map((background, index) => (
          <option
            key={background.name}
            selected={options.background.name === background.name}
            value={index}
          >
            {background.name}
          </option>
        ))}
      </select>
      </div>
      <div className="item">
        <label>
          <input type="checkbox" checked={options.highContrast} onChange={changeContrast} />
          Alto contraste
        </label>
      </div>
      <button onClick={() => setMenuState(false)}>Salvar</button>
    </div>
  );
}

export default Menu;
