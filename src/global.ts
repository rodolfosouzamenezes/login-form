import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@100;200;300;400;500;600;700;800&display=swap');
        font-family: 'Sora', sans-serif;
        box-sizing:  border-box;
    }

    body {
        font-family: 'Sora', sans-serif;
        margin: 0;
        padding: 0;
        background-color: #81259D;
    }

    input, button, textarea, h1, h2, h3, h4, h5, h6 {
        font-family: 'Sora', sans-serif;
    }
`