import './DownloadButton.css';
import curriculo from '../../../img/curriculo_pedro.pdf';

function DownloadButton({icon, title}){
    return (
        <a href={curriculo} 
            download="curriculo_pedro" 
            type='application/pdf'
            className='btnDownload'> {icon}   {title}
        </a>
    )
}

export default DownloadButton;