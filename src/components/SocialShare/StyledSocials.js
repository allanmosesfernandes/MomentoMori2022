import styled from "styled-components";

export const SocialsContainer = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
gap: 1rem;
font-family: neue-bold, monospace;

h2 {
    display: flex;
    font-size: 3.5rem;
    gap: 1rem;
    justify-content: center;
}
`


export const StyledList = styled.ul`
li {
    display: flex;
    gap: 3rem;
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
}

`