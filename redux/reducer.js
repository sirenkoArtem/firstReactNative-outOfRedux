const reducer = (state, action) => {
  switch(action.type) {
      case 'CLICKED':
          return {...state, clicked: true};
      default:
          return state;
  }
}

export { reducer };