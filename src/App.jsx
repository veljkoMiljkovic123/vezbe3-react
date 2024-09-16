
import { useEffect, useState } from 'react'
import './App.css'
import Cell from './components/Cell'

function App() {
  const [cells,setCells] = useState([
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    ''
  ])
  const [player, setPlayer] = useState('cross')
  const[winner,setWinner] = useState(null)

  useEffect(()=>{
    handleCheckWinner()
    
  },[cells])

  function handleCheckWinner(){
    let winnerCombination = [
      [0,1,2],[3,4,5],[6,7,8],
      [0,3,6],[1,4,7],[2,5,8],
      [0,4,8],[2,4,6]
    ]

    winnerCombination.forEach((comb=>{
      let crossWinner = comb.every((cell)=>cells[cell]==='cross')
      let circleWinner = comb.every((cell)=>cells[cell]==='circle')

      if(crossWinner){
        setWinner('Winner is Cross')
      }else if(circleWinner){
        setWinner('Winner is Circle')
      }
    }))

  }
  function resetGame(){
    let emptyArray = newArray(9).fill('')
    setCells(emptyArray)
    setWinner(null)

  }
  return (
    <div className='app'>
      <h1 className='title'>X/O GAME</h1>
      <div className="squareContainer">
        {cells.map((cell,index)=>{
          return <Cell key={index} id={index} cell={cell} player={player} setPlayer={setPlayer} cells={cells} setCells={setCells}/>
        })}
      </div>
      <button onClick={resetGame}>Reset Game</button>
      {winner && <h2>{winner}</h2>}
    </div>
  )
}

export default App
