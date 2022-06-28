import expensesReducer from "../../reducers/expenses";
import expenses from '../fixtures/expenses';


// // Expenses Reducer

// const expensesReducerDefaultState = [];

// export default (state = expensesReducerDefaultState, action) => {
//   switch (action.type) {
//     case 'ADD_EXPENSE':
//       return [
//         ...state,
//         action.expense
//       ];
//     case 'REMOVE_EXPENSE':
//       return state.filter(({ id }) => id !== action.id);
//     case 'EDIT_EXPENSE':
//       return state.map((expense) => {
//         if (expense.id === action.id) {
//           return {
//             ...expense,
//             ...action.updates
//           };
//         } else {
//           return expense;
//         };
//       });
//     default:
//       return state;
//   }
// };


test ('should set default state', () => {
    const state= expensesReducer(undefined, { type:'@@INIT' });
    expect(state).toEqual([])
})

test ('should remove expense by ID', () => {
    const action= {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const state= expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
})

test ('should NOT remove expense if ID is not found', () => {
    const action= {
        type: 'REMOVE_EXPENSE',
        id: 'id che non esiste'
    }
    const state= expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
})

test('should add an expense', () => {
    const expense= {
              id: '109',
              description: 'laptop',
              note:'',
              amount:10200,
              createdAt:0
            }
    const action= {
        type:'ADD_EXPENSE',
        expense
    }
    const state= expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense]);
})

test('should edit an expense', ()=> {
    const amount= 250;
    const action= {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: {amount}
    }
    const state= expensesReducer(expenses, action);
    expect(state[1].amount).toBe(amount)
})

test('should NOT edit an expense if id not found', ()=> {
    const amount= 250;
    const action= {
        type: 'EDIT_EXPENSE',
        id: 'id sbagliato che non esiste',
        updates: {amount}
    }
    const state= expensesReducer(expenses, action);
    expect(state).toEqual(expenses)
})


test('should set expenses', () => {
    const action = {
      type: 'SET_EXPENSES',
      expenses: [expenses[1]]
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[1]]);
  });