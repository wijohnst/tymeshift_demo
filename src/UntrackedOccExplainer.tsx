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

export default function UntrackedOccExplainer(): ReactElement {
    return (
        <ComponentWrapper>
            <Info>
                <p>You selected: <b>Untracked</b> </p>
                <p><ProductiveTime value={2.5} /></p>
                <p><HoursScheduled /></p>
                <p>Formula : <b>2.5 / 3.5</b></p>
            </Info>
            <Adh>
                <h2>Occupancy Rate</h2>
                <AdherenceCircle value={'71%'} />
            </Adh>
            <p>
                <i>
                    Selecting Untracked lowered Nate's Occupancy Rate. Untracked time is not considered productive
                    time. Untracked time also lowers his Adherence Rate. Unscheduled, 
                    non-productive tasks should be avoided whenever possible as they negatively impact both of your
                    key performance measurements.
                </i>
            </p>
        </ComponentWrapper>
    )
}
