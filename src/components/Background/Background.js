import './Background.css';

function Background({image, children}) {
  return (
      <div
        className='background'
        style={{backgroundImage: `url(${image})`}}
      >
        {children}
      </div>
  );
}

export default Background;
