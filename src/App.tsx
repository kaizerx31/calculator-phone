import React from 'react';
import { useState } from 'react';
import Buttons from './Components/Buttons';
import Header from './Components/Header';
import Result from './Components/Result';

export const App = () => {

  const [result, setResult] = useState("0");

  const _changeResult = (newResult : string) => {
        //console.log("newResult",newResult);
        setResult(newResult);
        //console.log(result);
  }

  return (
    <div className="App">
          <div className = "container">
              <Header />
          </div> 

          <div className = "Calculator-app">
            <Result result={result}/>
            <Buttons _changeResult={_changeResult} 
                     result={result}
            />
          </div>
       
    </div>
  )
}
export default App;
