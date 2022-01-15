import {Sprite, Stage} from '@inlet/react-pixi'
import Border from './background/Border'
import Tile from './background/Tile'
import Viewport from './plumbing/Viewport'

const App = () => {
  return (
    <Stage options={{resizeTo: window}}>
      <Viewport>
        <Sprite position={[150, 100]} image="./sprites/raccoon.png" />
        <Tile position={[0, 0]} />
        <Tile position={[30, 0]} />
        <Border />
      </Viewport>
    </Stage>
  )
}
export default App
