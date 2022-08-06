import React from 'react'
import './App.css'
import Header from './Header'
import Text from './Text'
import Section from './Section'
import Footer from './Footer'
function App(){
    return(<div>
        <Header/>
        <Text/>
        <Section name = "Iphone 13" style = "first-hightlight-wrapper"/>
        <Section name = "Iphone 12" style = "second-hightlight-wrapper"/>
        <Section name = "Macbooks and IPads" style = "third-hightlight-wrapper"/>
        <Footer/>
    </div>)
}

export default App