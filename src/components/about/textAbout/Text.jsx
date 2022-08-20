import './Text.css';

function Text({text, title, classTitle}){
    return (
      <div>
        <p className={classTitle}>{title}</p>
        <p className='textAbout'>{text}</p>
      </div>
    )

}

export default Text;