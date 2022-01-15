import {Container, Graphics} from '@inlet/react-pixi'
import {useCallback} from 'react'

const Border = () => {
  const draw = useCallback((g) => {
    g.clear()
    g.lineStyle(4, 0xff0000, 1)
    g.lineTo(2000, 0)
    g.lineTo(2000, 2000)
    g.lineTo(0, 2000)
    g.lineTo(0, 0)
  }, [])

  return (
    <Container>
      <Graphics draw={draw} />
    </Container>
  )
}

export default Border
