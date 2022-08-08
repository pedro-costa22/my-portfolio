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
        background-color: var(--bg-scrollbar);
    }

    ::-webkit-scrollbar-thumb {
        background-color: var(--green);
        border-radius: 5px;
    }

    :root{
        --bg-color: #020814;
        --bg-white: #fff;
        --bg-blue: #041029;
        --bg-blueSecondary: #040d22;
        --bg-btn: #0A192F;
        --bg-scrollbar: #0a1635;
        --green: #64FFDA;
        --text: #F2F2F2;
        --text-secondary: #CCD6F6;
    }

    body {
        font-family: "Inter", sans-serif;
        font-size: 1rem;
        background: ${props => props.darkMode === true ? "#020814" : "#FFF"};
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