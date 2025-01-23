import './Jogo.css'
import {useState} from 'react'

//

export default function JogoDaVelha(){
    return <>
     <h1> Este é o jogo da velha</h1>
    <Tabuleiro/>
    </>
}

function Quadrado({valor}){
    
    function handleClick(){ //  é uma função que será chamada sempre que o botão for clicado.
        setValor('X')
    }
    return <button className ="q" onClick={handleClick}>{valor}</button> 
}

function Tabuleiro(){
    const [quadrados, setQuadrados] = useState (Array(9).fill(''))// possibilita alterar o valor depois e estabalece o tabul como um array
    const [vezDoX, setVezDoX] = useState(true)
    return <>

    <div className="linha">
    <Quadrado/> valor = {quadrados[0]}/>
    <Quadrado/> valor = {quadrados[1]}/>
    <Quadrado/> valor = {quadrados[2]}/>
    </div>
    <div className="linha">
    <Quadrado/> valor = {quadrados[3]}/>
    <Quadrado/> valor = {quadrados[4]}/>
    <Quadrado/> valor = {quadrados[5]}/>
    </div>
    <div className="linha">
    <Quadrado/> valor = {quadrados[6]}/>
    <Quadrado/> valor = {quadrados[8]}/>
    <Quadrado/> valor = {quadrados[9]}/>
    </div>
    </>
}