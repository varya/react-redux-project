const ADD = 'cart/ADD';

const initialState = {
  goods: 0
};

export default function cart(state = initialState, action = {}) {

  switch (action.type) {
    case ADD:
      return {
        ...state,
        goods: ++state.goods
      }
    default:
      return state;
  }

}

export function add() {
  return {
    type: ADD
  }
}
