import React, {useState} from "react"
import { Transition } from 'react-transition-group';

const duration = 1000;


const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
}


const transitionStyles = {
  entering: { opacity: 0.4 },
  entered:  { opacity: 1 },
  exiting:  { opacity: 0.5 },
  exited:  { opacity: 0 },
};

const Fade = () => {
  const [inProp, setInProp] = useState(false)

  return(
    <div>
  <Transition in={inProp} timeout={duration}>
    {state => (
      <div style={{
        ...defaultStyle,
        ...transitionStyles[state]
      }}>
       <h1> I'm a fade Transition!</h1>
      </div>
    )}
  </Transition>
  <button onClick={() => setInProp((prop) => !prop)}>
        Click to Enter
      </button>
  </div>
  )
};

export default Fade