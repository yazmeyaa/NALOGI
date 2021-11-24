import React from 'react'
import {Wrapper, Button, StyledLink} from './styled'
export default function LandScape() {
    return (
        <Wrapper>
            <StyledLink to='/taxcalc'>
            <Button>
                Налоговый вычет
            </Button>
            </StyledLink>
        </Wrapper>
    )
}
