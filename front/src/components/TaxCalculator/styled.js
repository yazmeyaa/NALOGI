import styled from 'styled-components'

export const Background = styled.div`
background-color: rgba(0,0,0,0.3);
height: 100vh;
width: 100vw;
display: flex;
justify-content: center;
align-items: center;
`

export const PushUpWindow = styled.div`
box-sizing: border-box;
padding: 32px 16px 16px 16px;
background-color: white;
display: flex;
flex-direction: column;
justify-content: space-between;
width: 100%;
height: 100%;

@media screen and (min-width: 768px){
    border-radius: 30px;
    height: auto;
    width: 50%;
}
`

export const ContentGridLayout = styled.div`
display: grid;
grid-template-columns: repeat(1fr);
grid-template-rows: auto;
`

export const ContentContainer = styled.div`

`

export const Title = styled.div`
box-sizing: border-box;
font-size: calc( (100vw - 320px )/(1280 - 320) * (28 - 18) + 18px );
font-family: 'Lab Grotesque';
font-weight: 500;
`

export const Description = styled.div`
&{
    font-family: 'Lab Grotesque';
    line-height: 16px;
    font-weight: 400;
    color: #808080;
    font-size: calc( (100vw - 320px )/(1280 - 320) * (14 - 12) + 12px );
}
`

export const SubTitle = styled(Title)`
font-family: 'Lab Grotesque';
font-weight: 500;
font-size: 14px;
box-sizing: border-box;
`


export const InputText = styled.input`
box-sizing: border-box;
padding: 8px 10px;
width: 100%;
height: 40px;
border: 1px solid #DFE3E6;
border-radius: 3px;
transition: .2s;
&:hover{
    border: 1px solid black;
}
&:focus{
    border: 1px solid #DFE3E6;
}
&:disabled{
    border: 1px solid #808080;
}
&::placeholder{
    color: #BEC5CC;
}
`

export const TextButton = styled.button`
font-family: 'Lab Grotesque';
box-sizing: border-box;
border: none;
width: fit-content;
height: min-content;
color: red;
transition: .2s;    
font-weight: 500;
line-height: 24px;
&:hover{
    color: orange;
    cursor: pointer;
}
&:active{
    color: red;
}
`

export const TagButton = styled.button`
border: none;
display: flex;
justify-content: center;
align-items: center;
color: ${props => {return props.active ? 'white' : 'black' }};
width: fit-content;
height: 36px;
padding: 6px 12px;
background: ${props => {return props.active ? 'linear-gradient(255.35deg, #DC3131 0.83%, rgba(255, 79, 79, 0) 108.93%), #FF5E56;' : '#EEF0F2'}};
border-radius: 50px;
font-family: 'Lab Grotesque';
font-weight: 400;
transition: .5s;
`

export const AddButton = styled.button`
border: none;
display: flex;
width: 100%;
height: 40px;
justify-content: center;
align-items: center;
color: white;
font-family: 'Lab Grotesque';
font-weight: 500;
font-size: calc( (100vw - 320px )/(1280 - 320) * (16 - 12) + 12px );
background: linear-gradient(255.35deg, #DC3131 0.83%, rgba(255, 79, 79, 0) 108.93%), #FF5E56;
box-shadow: 0px 0px 24px rgba(234, 0, 41, 0.33);
border-radius: 6px;
padding: 16px 0;
transition: .2s;
&:hover{
    background: red;
}
`

//18-28