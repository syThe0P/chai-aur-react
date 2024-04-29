import React, { useCallback, useEffect, useRef, useState } from "react";

function App() {



  const [password, setPassword] = useState("");
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [length, setLength] = useState(8);


  //useref
    const passwordRef = useRef(null);


  const passGenerator = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numberAllowed) {
      str += "0123456789";
    }
    if (characterAllowed) {
      str += "~`!@#$%^&*(){}[]|<>.,?/:;";
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() *str.length * 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [numberAllowed, characterAllowed, length, setPassword]);

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);

  },[password])


  useEffect(()=>{
    passGenerator()
  },[length, numberAllowed, characterAllowed,passGenerator])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md px-4 py-3 my-8 rounded-lg bg-gray-700 ">
        <h1 className="text-orange-500 text-center mb-2">Password Generator</h1>
        <div className="flex shadow rounded-lg mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full rounded-tl-lg rounded-bl-lg py-1 px-3"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button onClick={copyPasswordToClipboard} className="rounded-tr-lg rounded-br-lg outline-none bg-blue-700 text-white px-3 py-0.5">
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label>Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={characterAllowed}
              id="characterInput"
              onChange={() => {
                setCharacterAllowed((prev) => !prev);
              }}
            />
            <label>Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
