import styled from "styled-components";

export const SocialsContainer = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
gap: 1rem;
font-family: neue-bold, monospace;
width: 80%;
h2 {
    display: flex;
    font-size: 3.5rem;
    gap: 1rem;
    justify-content: center;
}

@media only screen and (max-width: 600px) {
  //code goes here
  width: 100%;
  grid-template-columns: 1fr;
  gap: 0;

  h2 {
    font-size: 2rem;
    align-items: center;
    justify-content: flex-start;

    img {
        width: 30px;
        height: 30px;
    }
  }

}
`


export const StyledList = styled.ul`
li {
    display: flex;
    gap: 2rem;
    transition: transform 2000ms ease-in-out;
    transition-delay: 0.1s;
    border-bottom: 1px solid white;
    align-items: center;
    button, p, img{
        transition: transform 200ms ease-in-out;
    }
    img {
        margin-left: auto;
    }

    p:nth-child(2) {
        cursor: pointer;
    }
    &:hover p:nth-child(2){
        transform: translateX(5px);
    }

    &:hover button {
        transform: translateX(5px);
    }

    &:hover img{
        transform: rotate(45deg);
        border: 1px solid white;
        border-radius: 50%;
        width: 20px;
        height: 20px;
    }
button.react-share__ShareButton {
    display: flex;
    width: 100%;
    align-items: center;
    gap: 2rem;
}
}
    @media only screen and (max-width: 600px) {
      //code goes here
      margin-top: -1rem;
    }
`