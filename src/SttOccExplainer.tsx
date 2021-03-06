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

export default function SttOccExplainer(): ReactElement {
    return (
        <ComponentWrapper>
            <Info>
                <p>You selected: <b>Scheduled Ticket Time</b> </p>
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
                    Selecting Scheduled Ticket Time contributed positively to Nate's Occupancy Rate, even though he wasn't scheduled for
                    STT at that time. Working your old tickets is considered productive time so this counts towards his Occupancy.
                    But remember, because he wasn't scheduled for STT this choice will lower his Adherence Rate.
                </i>
            </p>
        </ComponentWrapper>
    )
}
