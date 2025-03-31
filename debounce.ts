type F = (...args: number[]) => void;

function debounce(fn: F, t: number): F {
  let timerId;
  return function (...args) {
    clearTimeout(timerId);
    timerId = setTimeout(() => fn(...args), t);
  };
}

const log = debounce(console.log, 100);
log("hello"); // cancelled
log("hello"); // cancelled
log("hello"); // Logged at t=100ms
