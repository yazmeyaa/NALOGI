import {React, useState } from 'react'
import {Description, Title, SubTitle, InputText, TextButton, TagButton,  AddButton } from './styled'
import { Background, PushUpWindow, ContentGridLayout, ContentContainer } from './styled'
export default function TaxCalculator(){
    const [isPaymentChoosed, setPaymentChoosed] = useState(true)
    return (
        <Background>
            <PushUpWindow>
                <ContentGridLayout>
                    <ContentContainer>
                        <Title>Налоговый вычет</Title>
                        <Description>Используйте налоговый вычет чтобы погасить ипотеку досрочно. Размер налогового вычета составляет не более 13% от своего официального годового дохода</Description>
                    </ContentContainer>

                    <ContentContainer>
                        <SubTitle>Ваша зарплата в месяц</SubTitle>
                        <InputText placeholder='Введите данные' />
                        <TextButton type='button'> Рассчитать </TextButton>
                    </ContentContainer>


                    <ContentContainer>
                        <SubTitle>Что уменьшаем?</SubTitle>
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

                    </ContentContainer>
                </ContentGridLayout>

                    <AddButton>Добавить</AddButton>
                    </PushUpWindow>
            </Background>
    )
}


//18-28px заголовок