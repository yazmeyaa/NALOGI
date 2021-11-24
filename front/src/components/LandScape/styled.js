import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Wrapper = styled.div`
&{
    display: flex;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
    background: linear-gradient(255.35deg, #DC3131 0.83%, rgba(255, 79, 79, 0) 108.93%), #FF5E56;
}
`

export const Button = styled.div`
&{
    width: fit-content;
    height: fit-content;
    padding: 12px 24px;
    border: 2px solid white;
    border-radius: 6px;
    font-family: 'Lab Grotesque';
    font-weight: 500;
    color: white;
    transition: .1s;
    text-decoration: none;
    font-size: calc((100vw - 320px)/(1440 - 320) * (16 - 12) + 12);
}
&:hover{
    background: white;
    color: black;
    cursor: default;
}

`

export const StyledLink = styled(Link)`
text-decoration: none;
`

//font-size 12-16 px