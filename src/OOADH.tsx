import React, { ReactElement } from 'react'

interface Props {
    totalHours : number | string
}

export default function OOADH({totalHours}: Props): ReactElement {
    return (
        <div>
            Time out of Adherence: <b>{totalHours}</b>
        </div>
    )
}
