import moment from 'moment';
import filtersReducer from '../../reducers/filters';


// export default (state = filtersReducerDefaultState, action) => {
//     switch (action.type) {
//       case 'SET_TEXT_FILTER':
//         return {
//           ...state,
//           text: action.text
//         };
//       case 'SORT_BY_AMOUNT':
//         return {
//           ...state,
//           sortBy: 'amount'
//         };
//       case 'SORT_BY_DATE':
//         return {
//           ...state,
//           sortBy: 'date'
//         };
//       case 'SET_START_DATE':
//         return {
//           ...state,
//           startDate: action.startDate
//         };
//       case 'SET_END_DATE':
//         return {
//           ...state,
//           endDate: action.endDate
//         };
//       default:
//         return state;
//     }
//   };
  

test('should setup default filter values', () => {
  const state = filtersReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
});

test('should set sortBy to amount', () => {
  const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
  expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
  const currentState = {
    text: '',
    startDate: undefined,
    endDate: undefined,
    sortBy: 'amount'
  };
  const action = { type: 'SORT_BY_DATE' };
  const state = filtersReducer(currentState, action);
  expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
  const text = 'This is my filter';
  const action = {
    type: 'SET_TEXT_FILTER',
    text
  };
  const state = filtersReducer(undefined, action);
  expect(state.text).toBe(text);
});

test('should set startDate filter', () => {
  const startDate = moment();
  const action = {
    type: 'SET_START_DATE',
    startDate
  };
  const state = filtersReducer(undefined, action);
  expect(state.startDate).toEqual(startDate);
});

test('should set endDate filter', () => {
  const endDate = moment();
  const action = {
    type: 'SET_END_DATE',
    endDate
  };
  const state = filtersReducer(undefined, action);
  expect(state.endDate).toEqual(endDate);
});
