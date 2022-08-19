import React from 'react'
import { useState, useContext } from 'react'
import { GameLogicContext, GameSizeContext } from '../context'
import style from './GameLogic.module.css'
import { Position } from '../components'


type GameLogicProps = {
  p1Turn: boolean
  p1List: Array<number>
  p2List: Array<number>
  //   children?: React.ReactNode
  onSelect: () => void
}

export default function GameLogic(props: GameLogicProps) {
  const { p1Turn, p1List, p2List, onSelect } = props
  const { boardSize } = useContext(GameSizeContext)
  const columns = boardSize
  const rows = boardSize
  //const [win, setWin] = useState(false)
  const { win, setWinState } = useContext(GameLogicContext)
  //const [draw, setDraw] = useState(false
  //const [draw, setDraw] = useState(false)
  const { draw, setDrawState } = useContext(GameLogicContext)

  const checkForFive = (list: number[]) => {
    let desDiagIncrement: number = columns + 1
    let ascDiagIncrement: number = columns - 1
    let verticalIncrement: number = columns
    let horizontalIncrement: number = 1

    list.forEach(element => {
      console.log("checking")
      //Descending diagonal \ code
      if (list.includes(element + desDiagIncrement) && list.includes(element + 2 * desDiagIncrement) && +
        list.includes(element + 3 * desDiagIncrement) && list.includes(element + 4 * desDiagIncrement) && +
        ((element + 4 * desDiagIncrement) % columns !== 0) && ((element + 3 * desDiagIncrement) % columns !== 0) && +
        ((element + 2 * desDiagIncrement) % columns !== 0) && ((element + 1 * desDiagIncrement) % columns !== 0)) {

        setWinState(true)
      }

      //Ascending diagonal / code
      if (list.includes(element - ascDiagIncrement) && list.includes(element - 2 * ascDiagIncrement) && +
        list.includes(element - 3 * ascDiagIncrement) && list.includes(element - 4 * ascDiagIncrement) && +
        ((element - 4 * ascDiagIncrement) % columns !== 0) && ((element - 3 * ascDiagIncrement) % columns !== 0) && +
        ((element - 2 * ascDiagIncrement) % columns !== 0) && ((element - 1 * ascDiagIncrement) % columns !== 0)) {
        setWinState(true)
      }

      //Vertical | code
      if (list.includes(element + verticalIncrement) && list.includes(element + 2 * verticalIncrement) && +
        list.includes(element + 3 * verticalIncrement) && list.includes(element + 4 * verticalIncrement)) {
        setWinState(true)
      }

      //Horizontal - code
      if (list.includes(element + horizontalIncrement) && list.includes(element + 2 * horizontalIncrement) && +
        list.includes(element + 3 * horizontalIncrement) && list.includes(element + 4 * horizontalIncrement) && +
        ((element + 4 * horizontalIncrement) % columns !== 0) && ((element + 3 * horizontalIncrement) % columns !== 0) && +
        ((element + 2 * horizontalIncrement) % columns !== 0) && ((element + 1 * horizontalIncrement) % columns !== 0)) {
        setWinState(true)
      }
    })

    if (p1Turn === false && win === true)
      console.log("Player 1 wins!!!!!!!")
    //gameMessage.element.innerText = "Player 1 Wins!!!!!!!"
    else if (p1Turn === true && win === true)
      console.log("Player 2 wins!!!!!!!")
    //gameMessage.element.innerText = "Player 2 Wins!!!!!!!"

  }

  const checkWinDraw = () => {
    onSelect()
    //p1List = posMap.p1SelectedPositions
    //p2List = posMap.p2SelectedPositions

    if (p1Turn === false)
      checkForFive(p1List)
    else
      checkForFive(p2List)

    if (win === false && ((p1List.length + p2List.length) === (rows * columns))) {
      setDrawState(true)
      console.log("Game is a draw")
      //gameMessage.element.innerText = "Game is a draw, click reset game"
    }
  }

  const handleClick = () => {
    //onSelect()
    console.log("Do we have a winner?", win)
    checkWinDraw()
  }

  return (

    <div className={style.overlay}>
      <div onClick={handleClick}></div>
    </div>
  )
}
