import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Nunito', sans-serif;
}

:root {
    --primary: #6C63FF;
    --secondary: #2F2E41;
    --background: #E6E6E6;
}
`