import './DownloadButton.css';
import curriculo from '../../../img/curriculo pedro_h_costa.pdf';

function DownloadButton({icon, title}){
    return (
        <a href={curriculo} 
            download="curriculo pedro_h_costa" 
            type='application/pdf'
            className='btnDownload'> {icon}   {title}
        </a>
    )
}

export default DownloadButton;