import './Jogo.css'
import {useState} from 'react'

export default function JogoDaVelha(){
    return <>
     <h1> Este é o jogo da velha</h1>
    <Tabuleiro/>
    </>
}

function Quadrado(){
    const [valor, setValor] = useState ('')

    function handleClick(){
        setValor('X')
    }
    return <button className ="q" onClick={handleClick}>{valor}</button> 
}

function Tabuleiro(){
    return <>

    <div className="linha">
    <Quadrado/>
    <Quadrado/>
    <Quadrado/>
    </div>
    <div className="linha">
    <Quadrado/>
    <Quadrado/>
    <Quadrado/>
    </div>
    <div className="linha">
    <Quadrado/>
    <Quadrado/>
    <Quadrado/>
    </div>
    </>
}