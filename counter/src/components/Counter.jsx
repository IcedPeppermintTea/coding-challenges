function Counter({ number, add, subtract, reset }) {
  return (
    <div>
      <h1>Counter</h1>

      <div>
        <h2>{`Number: ${number}`}</h2>
      </div>
      <div>
        <button id="inc" type="button" onClick={add}>
          +
        </button>
        <button id="dec" type="button" onClick={subtract}>
          -
        </button>
        <button id="reset" type="button" onClick={reset}>
          reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
