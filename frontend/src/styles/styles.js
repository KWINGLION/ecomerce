import { Link } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export const GlobalStyles = createGlobalStyle`
html {
  font-size: 62.5%;
}
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
* {
  box-sizing: border-box;
}
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
  font-family: 'Lato', sans-serif;
  font-size:.8rem;
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
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
}
a {
  text-decoration: none;
  color:${theme.colors.black}
}
ul {
  list-style: none;
}
  img {
    width: 100%;
    display: block;
  }
    p {
        line-height: 1.5;
      }
`;
export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 0.6rem;
`;
export const Links = styled(Link)`
  border-radius: 4px;
  background: ${(props) =>
    props.user ? theme.colors.baseSmooth : theme.colors.base};
  color: ${(props) => (props.user ? theme.colors.black : theme.colors.white)};
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background: ${theme.colors.baseSmooth} !important;
    color: ${theme.colors.black};
  }
`;
export const Title = styled.h1`
  font-size: 1.5rem;
  margin: 0;
  padding: 0;
  font-weight: bold;
  font-family: "Lato", sans-serif;
  text-transform: uppercase;
`;
