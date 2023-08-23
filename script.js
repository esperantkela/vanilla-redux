//action
const BY_PHONE = "BY_PHONE";

function byPhone() {
  return {
    type: BY_PHONE,
  };
}

//reducer
//(prevState, action) => newState

const initialState = {
  phones: 5,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BY_PHONE:
      return {
        ...state,
        phones: state.phones - 1,
      };

    default:
      return state;
  }
};

const store = Redux.createStore(reducer);
const availlablePhones = document.getElementById("count");

availlablePhones.innerHTML = store.getState().phones;

document.getElementById("buy-phone").addEventListener("click", () => {
  store.dispatch(byPhone());
});

store.subscribe(() => {
  availlablePhones.innerHTML = store.getState().phones;
});
