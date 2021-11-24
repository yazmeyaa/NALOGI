import styled from 'styled-components'

export const ContentWrapper = styled.div`
&{
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    padding-left: 32px;
}
&>span{
    padding-top: 16px;
}
`

export const Title = styled.span`
font-size: calc((100vw - 320px)/(1440 - 320) * (${props => {return props.max}} - ${props => {return props.min}}) + ${props => {return props.min}}px);
font-weight: 500;
font-family: 'Lab Grotesque';
line-height: 24px;
`
export const Description = styled.span`
width: fit-content;
font-family: 'Lab Grotesque';
font-size: calc((100vw - 320px)/(1440 - 320) * (14 - 12) + 12px);
color: #808080;
font-weight: 400;
font-family: 'Lab Grotesque';
line-height: 24px;
margin-right: 52px;
`

export const InputText = styled.input`
&{
    border: 1px solid #DFE3E6;
    border-radius: 3px;
    width: 100%;
}
&:hover{
    border: 1px solid black;
}

`