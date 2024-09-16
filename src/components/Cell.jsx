import React from 'react'

function Cell({cell,id,player,setPlayer,cells,setCells,winner}) {
    function handlePlayer(e){
        let taken = e.target.firstChild.classList.contains('cross') || e.target.firstChild.classList.contains('circle')
        if(!taken){
            if(player==='cross'){
                e.target.firstChild.classList.add('cross')
                setPlayer('circle')
                handleCellChange('cross')
            }else if(player === 'circle'){
                e.target.firstChild.classList.add('circle')
                setPlayer('cross')
                handleCellChange('circle')
            }
        }
    }
    function handleCellChange(classList){
       let updatedArrayCell = cells.map((cell,index)=>{
        if(index===id){
            return classList
        }else{
           return cell;
        }
       })
        setCells(updatedArrayCell)
    }
  return (
    <div className='square' onClick={handlePlayer}>
        <div className={cell}></div>
    </div>
  )
}

export default Cell