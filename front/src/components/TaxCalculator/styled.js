import styled from 'styled-components'

export const Window = styled.div`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: 1fr min-content;
padding: 32px 16px 0px 16px;
`

export const ContentContainer = styled.div`
display: grid;
grid-gap: 8px;
grid-template-columns: 1fr;
grid-template-rows: min-content 1fr;
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

export const Title = styled.div`
box-sizing: border-box;
font-size: calc( (100vw - 320px )/(1280 - 320) * (28 - 18) + 18px );
font-family: 'Lab Grotesque';
font-weight: 500;
`

export const SubTitle = styled(Title)`
font-family: 'Lab Grotesque';
font-weight: 500;
font-size: 14px;
box-sizing: border-box;
`

export const Content = styled.div`
box-sizing: border-box;
display:grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(min-content);
grid-gap: 24px;
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

export const TextButton = styled.div`
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

export const TagsContainer = styled.div`
display: grid;
grid-template-columns: repeat(2, min-content);
grid-template-rows: 1fr;
grid-gap: 8px;
`

export const TagButton = styled.div`
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

export const AddButton = styled.div`
display: flex;
height: 40;
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