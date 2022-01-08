import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root{
    /* colors */
    --blue: #007FFF;
    --red: #FF7961;
    --grey: #808080;
    --nav: #B5B5B5;
    --border: solid 1px #E0E3E7;
    --search: #F3F6F9;
    --background: #FBFCFD;
    --black: #000;
    --white: #fff;
    
    /* max width */
    --maxW: 1280px;

        
    /* scrollbar */
    ::-webkit-scrollbar {
    width: 6px;
    }

    /* Track */ ::-webkit-scrollbar-track {
        background: var(--darkGrey);
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        -webkit-border-radius: 10px;
        border-radius: 10px;
        background: var(--red); 
    }
    ::-webkit-scrollbar-thumb:window-inactive {
        background: rgba(255,0,0,0.4); 
    }
}

*,*::before,*::after{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family: 'Roboto', sans-serif;
}

html{
    scroll-behavior:smooth;
    min-width: 746px;
  
}

body,
html{
    font-family: 'Roboto', sans-serif;
}

a{
    font-family: 'Poppins', sans-serif;
}

body {
    margin:0;
    padding:0;
    border: 0;
    outline: 0;
    overflow-x: hidden;
    
    background: var(--background)
}

h1,
h2,
h3,
h4,
h5,
h6 {
    margin:0;
    padding:0;
}

a {
    text-decoration: none;
    outline: none;
}

button{
    border:none;
    outline:none;
    font-family: "Poppins", sans-serif;

    &:focus{
        outline:none;
    }
}

*:focus {
    outline: none;
}

img,svg{
    width:100%;
    height:auto;
}

`;
