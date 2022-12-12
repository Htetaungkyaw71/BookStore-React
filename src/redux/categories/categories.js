const initialState = [];
const STATUS = 'STATUS';

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case STATUS:
      return 'Under construction';
    default:
      return state;
  }
};

export const checkStatus = () => ({
  type: STATUS,
});

export default categoriesReducer;
