import "./App.css";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import {
  decrement,
  increment,
  incrementByAmount,
  reset,
} from "./store/slices/counterSlice";

function App() {
  const count = useAppSelector((state) => state.counter.value);

  const dispatch = useAppDispatch();

  return (
    <div>
      <h1>Counter App</h1>
      <h3>{count}</h3>

      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        Decrement
      </button>

      <button
        onClick={() => {
          dispatch(incrementByAmount(20));
        }}
      >
        Increase by amount
      </button>

      <button
        onClick={() => {
          dispatch(reset());
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default App;
