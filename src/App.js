import React, { useReducer } from "react";
import reducer, { initialState } from "./reducers/index";
import {
  addOne,
  applyNumber,
  changeOperator,
  clearDisplay,
  memoryClear,
  memoryPlus,
  memoryReset,
} from "./actions/index";

import "./App.css";

import TotalDisplay from "./components/TotalDisplay";
import CalcButton from "./components/CalcButton";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  // const handleAddOne = (e) => {
  //   e.preventDefault();
  //   //console.log(addOne());
  //   dispatch(addOne());
  // };
  const handleApplyNumber = (e) => {
    e.preventDefault();
    console.log(applyNumber(parseInt(e.target.innerText)));
    dispatch(applyNumber(parseInt(e.target.innerText)));
  };

  const handleOperatorChange = (e) => {
    e.preventDefault();
    console.log(changeOperator(e.target.innerText));
    dispatch(changeOperator(e.target.innerText));
  };

  const handleClearDisplay = (e) => {
    e.preventDefault();
    dispatch(clearDisplay());
  };
  const handleMemoryPlus = (e) => {
    e.preventDefault();
    dispatch(memoryPlus());
  };
  const handleMemoryReset = (e) => {
    e.preventDefault();
    dispatch(memoryReset());
  };
  const handleMemoryClear = (e) => {
    e.preventDefault();
    dispatch(memoryClear());
  };

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          <img width="40px" src="./Lambda-Logo-Red.png" /> Lambda Reducer
          Challenge
        </a>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            <TotalDisplay value={state.total} />
            <div className="row details">
              <span id="operation">
                <b>Operation:</b> {state.operation}
              </span>
              <span id="memory">
                <b>Memory:</b> {state.memory}
              </span>
            </div>

            <div className="row">
              <CalcButton value={"M+"} onClick={handleMemoryPlus} />
              <CalcButton value={"MR"} onClick={handleMemoryReset} />
              <CalcButton value={"MC"} onClick={handleMemoryClear} />
            </div>

            <div className="row">
              <CalcButton value={1} onClick={handleApplyNumber} />
              <CalcButton value={2} onClick={handleApplyNumber} />
              <CalcButton value={3} onClick={handleApplyNumber} />
            </div>

            <div className="row">
              <CalcButton value={4} onClick={handleApplyNumber} />
              <CalcButton value={5} onClick={handleApplyNumber} />
              <CalcButton value={6} onClick={handleApplyNumber} />
            </div>

            <div className="row">
              <CalcButton value={7} onClick={handleApplyNumber} />
              <CalcButton value={8} onClick={handleApplyNumber} />
              <CalcButton value={9} onClick={handleApplyNumber} />
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={handleOperatorChange} />
              <CalcButton value={"*"} onClick={handleOperatorChange} />
              <CalcButton value={"-"} onClick={handleOperatorChange} />
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={handleClearDisplay} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
