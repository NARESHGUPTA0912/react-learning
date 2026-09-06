import { send } from "vite";

// ! Throttling: Limiting the number of times a function can be called in a given time frame.
function throttledMsg(func, delay = 2000) {
  let flag = true;
  return function (...args) {
    if (flag) {
      func(...args);
      flag = false;
    }
    setTimeout(() => {
      flag = true;
    }, delay);
  };
}

function sendMessage(msg) {
  console.log(`Sending......` + msg);
}

// sendMessage("Hi......")
// sendMessage("Hello......")
// sendMessage("How are you?......")
// sendMessage("Goodbye......")

const msgWithSlowDown = throttledMsg(sendMessage, 5000);

msgWithSlowDown("\nHi......");
msgWithSlowDown("\nBonjour......");
msgWithSlowDown("\nHello World......");
msgWithSlowDown("\nBye......");
msgWithSlowDown("\nGoodbye......");
