import React, { ReactElement, useRef, useState, useEffect } from 'react'
import styled from 'styled-components'

interface Props {
    handleSelection : Function
}

export interface SelectionObj {
    color: string, 
    text: string,
    choice: string
}


const ComponentWrapper = styled.div``

export default function JobSelect({handleSelection} : Props): ReactElement {

    const selectRef = useRef<HTMLSelectElement>(null);
    const [ selection, setSelection ] = useState<SelectionObj | undefined>(undefined);
    
    const options = [
        'Chat',
        'Voice',
        'Ticket',
        'Untracked',
        'Lunch',
        'STT'
    ]

    function handleChange(){
        if(null !== selectRef.current){
            switch (selectRef.current.value) {
                case 'Chat':
                    setSelection({color: '#2C93BF', text: 'Chat #4', choice: 'chat'})
                    break;
                case 'Voice':
                    setSelection({color: '#60D302', text: 'Call #4', choice: 'voice'})
                    break;
                case 'Ticket':
                    setSelection({color: '#FF7C21', text: 'Ticket #1', choice: 'ticket'})
                    break;
                case 'Untracked':
                    setSelection({color: 'lightpink', text: 'UNTRACKED', choice: 'untracked'})
                    break;
                case 'Lunch':
                    setSelection({color: '#C20814', text: 'Lunch', choice: 'lunch'})
                    break;
                case 'STT':
                    setSelection({color: '#08045C', text: 'Scheduled Ticket Time', choice: 'stt'})
                    break;
            }
        }        
    }

    useEffect(() => {
        if(selection !== undefined){
            handleSelection(selection);
        }
    }, [selection])

    return (
        <ComponentWrapper>
            <select onChange={handleChange} ref={selectRef}>
                <option>Make a Selection</option>
                {options.map(option => <option>{option}</option>)}
            </select>
        </ComponentWrapper>
    )
}
