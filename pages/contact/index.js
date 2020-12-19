import {useEffect,useState,React} from 'react'
import Header from '../../components/Header'

import dynamic from 'next/dynamic'






export default function Contact() {
    const [componentName, setComponentName] = useState("Test1")

    useEffect(() => {
       
    }, [componentName])

    const DynamicComponentWithNoSSR = dynamic(
        () => import("../../components/"+componentName),
        { ssr: false }
      )
  
  
    return (
        <div>
            <Header/>
            Contact Us
            <DynamicComponentWithNoSSR />
            <button onClick={()=> setComponentName("Test2")} > Dynamically import the component</button>
            
        </div>
    )
}


