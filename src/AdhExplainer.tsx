import React, { ReactElement } from 'react'
import styled from 'styled-components'

import ChatsExplainer from './ChatsExplainer'
import VoiceExplainer from './VoiceExplainer'
import TicketsExplainer from './TicketsExplainer'
import UntrackedExplainer from './UntrackedExplainer'
import LunchExplainer from './LunchExplainer'
import STTExplainer from './STTExplainer'

import { SelectionObj } from './JobSelect'

interface Props {
    selection : SelectionObj | undefined,
    isVisible : boolean
}

interface StyleProps {
    visibility: string;
}

const ComponentWrapper = styled.div<StyleProps>`
    display: ${p => p.visibility}; 
`

export default function AdhExplainer({selection, isVisible}: Props): ReactElement {
    
    const components : any = { 
        chat: <ChatsExplainer />,
        voice: <VoiceExplainer />,
        ticket: <TicketsExplainer />,
        untracked: <UntrackedExplainer />,
        lunch: <LunchExplainer />,
        stt: <STTExplainer />
    }

    return (
        <ComponentWrapper visibility={(isVisible ? 'block' : 'none')}>
            {(selection?.text ? components[selection.choice] : <p>Loading...</p>)}
        </ComponentWrapper>
    )
}
