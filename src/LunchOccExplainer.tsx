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

export default function LunchOccExplainer(): ReactElement {
    return (
        <ComponentWrapper>
            <Info>
                <p>You selected: <b>Lunch</b> </p>
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
                    Lunch breaks, and all other break times, are not considered productive time, and therefore 
                    lowers your Occupancy Rate. And this is why Candid doesn't expect you to have perfect Occupancy. 
                    Some tasks, while not "productive" are totally necessary, and that is always considered when
                    thinking about Occupancy. 
                </i>
            </p>
        </ComponentWrapper>
    )
}
