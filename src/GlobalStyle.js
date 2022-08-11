import styled, {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        transition: all ease .3s;
    }

    div, header, section, main {
        margin: 0;
    }

    html {
        overflow-x: hidden;
    }

    ::-webkit-scrollbar {
        width: 10px;
        background-color: ${props => props.darkMode === true ? '#0a1635' : '#012E40'};
    }

    ::-webkit-scrollbar-thumb {
        background-color: ${props => props.darkMode === true ? '#64FFDA' : '#3CA6A6'};
        border-radius: 5px;
    }

    :root{
        --bg-color: #020814;
        --bg-white: #fff;
        --bg-blue: #041029;
        --bg-blueSecondary: #040d22;
        --bg-green: #001A24;
        --bg-greenSecondary: #024959;
        --bg-btn: #0A192F;
        --bg-scrollbar: #0a1635;
        --green: #64FFDA;
        --blue: #0C517B;
        --text-blue: #151C29;
        --text-green: #026773;
        --text: #F2F2F2;
        --text-secondary: #CCD6F6;
        --text-whiteMode: rgba(0, 0, 0, 9);
    }

    body {
        font-family: "Inter", sans-serif;
        font-size: 1rem;
        background: ${props => props.darkMode === true ? "#020814" : "#F9F9F9"};
    }


    .visible {
        animation-name: global-animation;
        animation-duration: 0.7s;
        animation-direction: normal;
        animation-fill-mode: forwards;
    
    }

    @keyframes global-animation {
        0% {
            opacity: 0;
        }

        100% {
            opacity: 1;
            transform: translate3d(0px, 0px, 0px);
        }
    }

`;

export default GlobalStyle;