import styled, { createGlobalStyle } from "styled-components";
import "./App.css";
import bgImg from "./assets/background-img/qhd/tony-lee-i_XLLP08BOc-unsplash.jpg";
import Bottom from "./components/layout/Bottom";
import Center from "./components/layout/Center";
import Top from "./components/layout/Top";

const GlobalStyle = createGlobalStyle`
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

:root {
  --border-radius: 5px;
}

* {
  box-sizing: border-box;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 1.1em;
}

body {
  margin: 0px;
}

input,
input:focus {
  outline: none;
  border: none;
  background-color: inherit;
}

input {
  border-bottom: grey 1.3px solid;
  transition: 0.3s;
  color: inherit;
}

input:focus {
  border-bottom: greenyellow 1.3px solid;
}

input::placeholder {
  color: rgba(255, 255, 255, 0.8);
}

.centered {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
`;

const AppContainer = styled.div`
  padding: 8px;
  height: 100vh;
  color: white;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  background: linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)),
    url(${bgImg});
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: center;
`;

function App() {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <AppContainer className="App">
        <Top></Top>
        <Center></Center>
        <Bottom></Bottom>
      </AppContainer>
      ;
    </>
  );
}

export default App;
