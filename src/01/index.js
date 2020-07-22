const elBox = document.querySelector("#box");

const machine = {
  initial: "inactive",
  states: {
    inactive: {
      on: {
        CLICK: "active",
      },
    },
    active: {
      on: {
        CLICK: "inactive",
      },
    },
  },
};

// Pure function that returns the next state,
// given the current state and sent event
function transition(state, event) {
  return machine.states[state].on[event] || state;
}

// Keep track of your current state
let currentState = machine.initial;

function send(event) {
  // Determine the next value of `currentState`
  const nextState = transition(currentState, event);
  currentState = nextState;
  elBox.dataset.state = currentState;
}

elBox.addEventListener("click", () => {
  // send a click event
  send("CLICK");
});
