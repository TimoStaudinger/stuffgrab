import {Viewport} from 'pixi-viewport'
import {PixiComponent} from '@inlet/react-pixi'

export default PixiComponent('Viewport', {
  create: (props: any) => {
    const viewport = new Viewport({
      // screenWidth: window.innerWidth,
      // screenHeight: window.innerHeight,
      worldWidth: 2000,
      worldHeight: 2000
      // ticker: props.app.ticker,
      // interaction: props.app.renderer.plugins.interaction // the interaction module is important for wheel to work properly when renderer.view is placed or scaled
    })
    viewport.on('drag-start', () => console.log('drag-start'))
    viewport.on('drag-end', () => console.log('drag-end'))

    viewport
      .drag()
      .pinch()
      .wheel()
      .decelerate({
        friction: 0.5
      })
      .clamp({top: true, left: true, right: true, bottom: true})

    //viewport.scaled = 30;
    return viewport
  },
  applyProps: () => {
    console.log('applyProps')
  },
  didMount: () => {
    console.log('didMount')
  },
  willUnmount: () => {
    console.log('willUnmount')
  }
})
