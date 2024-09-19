import { useState } from 'react'

function App() {
  const [color, setColor] = useState('white')
  return (
    <div className='w-full h-screen duration-200'
    style={{backgroundColor: color}}
    >
      <div className='fixed flex flex-wrap justify-center bottom-16 inset-x-1'>
        <div className='fixed flex flex-wrap justify-center px-3 py-2 bg-white gap-3 rounded-2xl shadow-lg'>
          <button className='outline-none px-4 py-1 text-white rounded-full shadow-lg'
            style={{backgroundColor: 'red'}}
            onClick={() => setColor('red')}>
            Red
          </button>
          <button className='outline-none px-4 py-1 text-white rounded-full shadow-lg'
            style={{backgroundColor: 'green'}}
            onClick={() => setColor('green')}>
            Green
          </button>
          <button className='outline-none px-4 py-1 text-white rounded-full shadow-lg'
            style={{backgroundColor: 'blue'}}
            onClick={() => setColor('blue')}>
            Blue
          </button>
          <button className='outline-none px-4 py-1 text-white rounded-full shadow-lg'
            style={{backgroundColor: 'olive'}}
            onClick={() => setColor('olive')}>
            Olive
          </button>
          <button className='outline-none px-4 py-1 text-white rounded-full shadow-lg'
            style={{backgroundColor: 'black'}}
            onClick={() => setColor('black')}>
            Black
          </button>
          <button className='outline-none px-4 py-1 text-white rounded-full shadow-lg'
            style={{backgroundColor: 'gray'}}
            onClick={() => setColor('gray')}>
            Gray
          </button>
          <button className='outline-none px-4 py-1 text-black rounded-full shadow-lg'
            style={{backgroundColor: 'yellow'}}
            onClick={() => setColor('yellow')}>
            Yellow
          </button>
          <button className='outline-none px-4 py-1 text-black rounded-full shadow-lg'
            style={{backgroundColor: 'pink'}}
            onClick={() => setColor('pink')}>
            Pink
          </button>
          <button className='outline-none px-4 py-1 text-white rounded-full shadow-lg'
            style={{backgroundColor: 'purple'}}
            onClick={() => setColor('purple')}>
            Purple
          </button>
          <button className='outline-none px-4 py-1 text-black border border-black rounded-full shadow-lg'
            style={{backgroundColor: 'white'}}
            onClick={() => setColor('white')}>
            White
          </button>
          <button className='outline-none px-4 py-1 text-white rounded-full shadow-lg'
            style={{backgroundColor: 'orange'}}
            onClick={() => setColor('orange')}>
            Orange
          </button>
         
        </div>
      </div>
    </div>
  )
}

export default App
