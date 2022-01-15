import {Container, Graphics} from '@inlet/react-pixi'
import {useCallback} from 'react'

interface Props {
  position: [number, number]
}

const Tile = ({position}: Props) => {
  const draw = useCallback((g) => {
    g.clear()
    g.lineStyle(2, 0xffd900, 1)
    g.moveTo(1, 1)
    g.lineTo(29, 1)
    g.lineTo(29, 29)
    g.lineTo(1, 29)
    g.lineTo(1, 1)
  }, [])

  return (
    <Container position={position}>
      <Graphics draw={draw} />
    </Container>
  )
}

export default Tile
