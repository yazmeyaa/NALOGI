import {React, useState } from 'react'
import { Window, Content, Description, ContentContainer, Title, SubTitle, InputText, TextButton, TagButton, TagsContainer, AddButton } from './styled'

export default function TaxCalculator(){
    const [isPaymentChoosed, setPaymentChoosed] = useState(true)
    return (
<Window>
    <Content>
        <ContentContainer>
            <Title>Налоговый вычет</Title>
            <Description>Используйте налоговый вычет чтобы погасить ипотеку досрочно. Размер налогового вычета составляет не более 13% от своего официального годового дохода</Description>
        </ContentContainer>
        <ContentContainer>
            <SubTitle>Ваша зарплата в месяц</SubTitle>
            <InputText placeholder='Введите данные' />
            <TextButton > Рассчитать </TextButton>
        </ContentContainer>
        <ContentContainer>
            <SubTitle>Что уменьшаем?</SubTitle>
            <TagsContainer>
                <TagButton active={isPaymentChoosed} onClick={()=>{
                    if(!isPaymentChoosed){
                        setPaymentChoosed(prevState=>{
                        return !prevState
                    })}
                }}>Платёж</TagButton>
                <TagButton active={!isPaymentChoosed} onClick={()=>{
                    if(isPaymentChoosed){
                        setPaymentChoosed(prevState=>{
                            return !prevState
                        })
                    }
                }}>Срок</TagButton>
            </TagsContainer>
        </ContentContainer>
    </Content>
    <AddButton>Добавить</AddButton>
</Window>
    )
}


//18-28px заголовок