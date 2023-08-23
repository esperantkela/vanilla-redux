//action
const BY_PHONE = "BY_PHONE";
const BY_TABLET = "BY_TABLET";

function byPhone() {
  return {
    type: BY_PHONE,
  };
}

function byTablet() {
  return {
    type: BY_TABLET,
  };
}

//reducer
//(prevState, action) => newState

const initialState = {
  phones: 5,
  tablet: 10,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BY_PHONE:
      return {
        ...state,
        phones: state.phones - 1,
      };

    case BY_TABLET:
      return {
        ...state,
        tablet: state.tablet - 1,
      };
    default:
      return state;
  }
};

const store = Redux.createStore(reducer);
const availlablePhones = document.getElementById("count");

availlablePhones.innerHTML = store.getState().phones;

const availlableTablets = document.getElementById("count-tab");
availlableTablets.innerHTML = store.getState().tablet;

document.getElementById("buy-phone").addEventListener("click", () => {
  store.dispatch(byPhone());
});

document.getElementById("buy-tablet").addEventListener("click", () => {
  store.dispatch(byTablet());
});

store.subscribe(() => {
  availlablePhones.innerHTML = store.getState().phones;
  availlableTablets.innerHTML = store.getState().tablet;
});
