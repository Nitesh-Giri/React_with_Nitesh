import { useCallback, useState , useEffect, useRef } from 'react'

function App() {
  
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [specialCharAllowed, setSpecialCharAllowed] = useState(false);
  const [password, setPassword] = useState('');
  const passwordRef = useRef(null)
  const passwordGenerator = useCallback(() => {

    let pass = "";
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numberAllowed){
      string += "0123456789";
    }

    if(specialCharAllowed){
      string += "!@#$%^&*()";
    }

    for(let i = 1; i <= length; i++){
      pass += string.charAt(Math.floor(Math.random() * string.length));
    }
    setPassword(pass);


  }, [length, numberAllowed,specialCharAllowed, setPassword]);


  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current.select();
    passwordRef.current.setSelectionRange(0, 3);
    window.navigator.clipboard.writeText(password);
  },[password])

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed , specialCharAllowed , passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500
       bg-gray-700'>
        <h1 className='text-white text-center my-3'>Generate a Password</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
            <input type='text'
            value={password}
            className='outline-none w-full px-1 py-3'
            placeholder='Password'
            readOnly
            ref={passwordRef}
            />
            <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
            onClick={copyPasswordToClipboard}
            >Copy</button>
        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'> 
              <input type='range'
              min={6} max={100}
              value={length}
              className='cursor-pointer'
              onChange={e => setLength(e.target.value)}
              />
              <label>length : {length}</label>
          </div>
          <div className='flex items-center gap-x-1'> 
              <input type='checkbox'
              defaultChecked={numberAllowed}
              id='numberInput'
              onChange={() => setNumberAllowed((prev) => !prev)}
              />
              <label>Number</label>
          </div>

          <div className='flex items-center gap-x-1'> 
              <input type='checkbox'
              defaultChecked={specialCharAllowed}
              id='specialCharInput'
              onChange={() => setSpecialCharAllowed((prev) => !prev)}
              />
              <label>SpecialChar</label>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
