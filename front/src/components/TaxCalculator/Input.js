import React, {forwardRef} from "react"
import { InputText } from "./styled"

export const Input = forwardRef((props, ref) =>{
    return <InputText 
    inputRef={ref}
    {...props}/>
})
