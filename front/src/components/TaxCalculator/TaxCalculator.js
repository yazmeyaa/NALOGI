import React from 'react'
import { Window, Content, Description, ContentContainer, Title, SubTitle, InputText, TextButton, TagButton, TagsContainer } from './styled'

export default function TaxCalculator() {
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
                <TagButton active>Платёж</TagButton>
                <TagButton active>Срок</TagButton>
            </TagsContainer>
        </ContentContainer>
    </Content>
</Window>
    )
}


//18-28px заголовок