import React, { ReactElement } from 'react'
import styled from 'styled-components'

interface Props {
    color: string,
    text: string
}

const Text = styled.span`
    padding: 2pt;
    font-size: 1.25rem;
    color: ${(props) => props.color};
`

export default function FT({ color, text } : Props): ReactElement {
    return (
        <Text color={color}>
            {text}
        </Text>
    )
}
