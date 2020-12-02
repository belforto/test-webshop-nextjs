import React from 'react'
import Header from '../../components/Header'
import {useStore} from '../../store/Store.tsx'

export default function Contact() {

    const bears = useStore(state => state.bears)
   

    return (
        <div>
            <Header/>
            <h1>{bears} around here ...</h1>
            Contact Us
        </div>
    )
}
