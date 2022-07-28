import './DownloadButton.css';
import curriculo from '../../../img/Curriculo Pedro H. Costa.pdf';

function DownloadButton({icon, title}){
    return (
        <a href={curriculo} 
            download="Curriculo Pedro H. Costa.pdf" 
            type='application/pdf'
            className='btnDownload'> {icon} {title}
        </a>
    )
}

export default DownloadButton;