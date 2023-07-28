import styled from "styled-components";
import { cx, css, keyframes } from "@emotion/css";
import { globalClass } from "./GlobalStyles";
import Fab from "@mui/material/Fab";
import { Typography } from "@mui/material";
// import { Button as btn } from "@mui/material";
const Title = styled.h1`
  font-size: 5.5em;
  text-align: center;
  color: #bf4f74;
`;

const NewTitle = styled(Typography)`
  color: red;
`;
// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

// const Button = styled.button`
//   color: #bf4f74;
//   font-size: 1em;
//   margin: 1em;
//   padding: 0.25em 1em;
//   border: 2px solid #bf4f74;
//   border-radius: 3px;
// `;

// // A new component based on Button, but with some override styles
// const TomatoButton = styled(Button)`
//   color: tomato;
//   border-color: tomato;
// `;

const Button = styled.button`
  display: inline-block;
  color: #bf4f74;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #bf4f74;
  border-radius: 3px;
  // display: block;
  background: #f9f9f9;
  &.nothing {
    background: orange; // <Thing> tagged with an additional CSS class ".something"
  }
  &.something {
    background: #cbffa9; // <Thing> tagged with an additional CSS class ".something"
  }
  .otherthing & {
    color: red;
  }
`;

const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;

export const cls2 = css`
  // padding: 100px;
  background: red;
`;
// can use other classes also with cx
// className={cx(cls1, 'profile')}

//keyFrame

const bounce = keyframes`
  from, 20%, 53%, 80%, to {
    transform: translate3d(0,0,0);
  }

  40%, 43% {
    transform: translate3d(0, -30px, 0);
  }

  70% {
    transform: translate3d(0, -15px, 0);
  }

  90% {
    transform: translate3d(0,-4px,0);
  }
`;
const imgClass = css`
  width: 96px;
  height: 96px;
  border-radius: 50%;
  animation: ${bounce} 1s ease infinite;
  transform-origin: center bottom;
`;
function StyledComponents() {
  const v = true;
  const URL =
    "https://imgs.search.brave.com/OhR3tlZfwYR4Qx2zcZ3pvGH4OxYk7Xnu0jRL9mQG-Tw/rs:fit:200:200:1/g:ce/aHR0cHM6Ly9jb21t/dW5pdHkuYXRsYXNz/aWFuLmNvbS9odG1s/L0AyNTg3NjBEMENE/MTc2MkI2RjNEMEQw/RTIxMzNBQjRGRi9h/c3NldHMvYXRsYXNz/aWFuLWNvbW11bml0/eS1zaGFyZS1jYXJk/LTYzMHg2MzAucG5n";

  return (
    <>
      <div className={cx(globalClass, cls2)}>
        <Wrapper>
          <Fab color="primary" aria-label="add">
            +
          </Fab>
          <Title className={cx(globalClass)}>Hii</Title>
          <NewTitle>hello</NewTitle>
          <Button className={globalClass}>Normal Button</Button>
          <Button className={v ? "something" : "nothing"}>Class Button</Button>
          <TomatoButton>Tomato Button</TomatoButton>
          <Button as="a" href="#">
            Link with Button styles
          </Button>
          <img className={imgClass} src={URL} />
        </Wrapper>
      </div>
    </>
  );
}

export default StyledComponents;
