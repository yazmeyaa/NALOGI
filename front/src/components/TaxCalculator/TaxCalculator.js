import React from 'react'
import {Title, ContentWrapper, Description} from './styled'
import Form from './Form'
import { Input } from './Input'

export default function TaxCalculator() {
    return (
        <ContentWrapper>
            <Title min='18' max='28'>Налоговый вычет</Title>
            <Description>Используйте налоговый вычет чтобы погасить ипотеку досрочно. Размер налогового вычета составляет не более 13% от своего официального годового дохода.</Description>
            <Form >
                <Input placeholder='Введите данные' />
            </Form>
        </ContentWrapper>
    )
}
