import './Menu.css';

function Menu({setMenuState, options, setOptions}) {
  const changeContrast = () => (
    setOptions({...options, highContrast: !options.highContrast})
  );

  return (
    <div className="menu">
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
