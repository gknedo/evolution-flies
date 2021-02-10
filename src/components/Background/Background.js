import './Background.css';
import image1 from './images/1.jpg'

function Background({children}) {
  return (
      <div
        className='background'
        style={{backgroundImage: `url(${image1})`}}
      >
        {children}
      </div>
  );
}

export default Background;
