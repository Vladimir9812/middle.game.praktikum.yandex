import { FC, useEffect, useRef, useState } from 'react'
import Game from '../core/Game'
import IntroScene from '../scenes/InroScene'

const EngineCanvas: FC = () => {
  const ref = useRef<HTMLCanvasElement>(null)
  const [game, setGame] = useState<Game | null>(null)

  useEffect(() => {
    if (!game) {
      return
    }
    game.start()
  }, [game])

  useEffect(() => {
    if (ref.current) {
      setGame(new Game(ref.current, IntroScene))
    }
  }, [ref])

  return <canvas ref={ref}></canvas>
}

export default EngineCanvas
