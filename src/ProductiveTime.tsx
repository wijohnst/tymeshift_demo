import React, { ReactElement } from 'react'

interface Props {
    value: number 
}

export default function ProductiveTime({value} : Props): ReactElement {
    return (
        <div>
            Productive Time: <b>{value} hrs.</b>
        </div>
    )
}
