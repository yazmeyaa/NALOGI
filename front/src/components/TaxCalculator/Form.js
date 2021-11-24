import React from 'react'

export default function Form({children, ...props}) {
    return (
        <form {...props} noValidate>{children}</form>
    )
}
