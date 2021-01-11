import React, { ReactElement } from 'react'
import styled from 'styled-components'

import ProductiveTime from './ProductiveTime'
import HoursScheduled from './HoursScheduled'
import AdherenceCircle from './AdherenceCircle'

const ComponentWrapper = styled.div``

const Info = styled.div`
    display: flex;
    justify-content: space-between;
`
const Adh = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export default function TicketOccExplainer(): ReactElement {
    return (
        <ComponentWrapper>
            <Info>
                <p>You selected: <b>Ticket</b> </p>
                <p><ProductiveTime value={3} /></p>
                <p><HoursScheduled /></p>
                <p>Formula : <b>3 / 3.5</b></p>
            </Info>
            <Adh>
                <h2>Occupancy Rate</h2>
                <AdherenceCircle value={'86%'} />
            </Adh>
            <p>
                <i>
                    Selecting Tickets contributed positively to Nate's Occupancy Rate, even though he wasn't scheduled for
                    chats at that time. Tickets are considered productive time so this counts towards his Occupancy. This will
                    lower his Adherence Rate though.
                </i>
            </p>
        </ComponentWrapper>
    )
}
