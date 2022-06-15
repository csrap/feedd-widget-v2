// interface ButtonProps {
//   text: string; 
// }

// function Button(props: ButtonProps){
//   return <button className='bg-violet-500 px-4 h-10 rounded hover:bg-purple-700 transition-colors'>{props.text}</button>
// }
// function App() {
//   return (
//     <div className="flex gap-2">
//       <Button  text="enviar"/>
//       <Button  text="Ok"/>
//     </div>
//   )
// }

// export default App


import React from 'react'
import { Widget }  from './components/Widget'

export  function App() {
  return <Widget/>
  
}

