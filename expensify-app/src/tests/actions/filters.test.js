import moment from 'moment';
import { setStartDate, setEndDate, setTextFilter, sortByDate, sortByAmount } from '../../actions/filters';


// SET_START_DATE
// export const setStartDate = (startDate) => ({
//     type: 'SET_START_DATE',
//     startDate
//   });
  
test ('should generate set start date object', () => {
    const action= setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate:moment(0)
    })    
})



// SET_END_DATE
// export const setEndDate = (endDate) => ({
//     type: 'SET_END_DATE',
//     endDate
//   });
  
test ('should generate set end date object', () => {
    const action= setEndDate(moment(0));
    expect(action).toEqual({
        type:'SET_END_DATE',
        endDate:moment(0)
    })    
})



// // SET_TEXT_FILTER
// export const setTextFilter = (text = '') => ({
//     type: 'SET_TEXT_FILTER',
//     text
//   });

test ('should generate text object with the user input', () => {
    const action= setTextFilter('water');
    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        text:'water'
    })    
})

test ('should generate set end date object with no input (with default value)', () => {
    const action= setTextFilter();
    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        text:''
    })    
})



//   // SORT_BY_DATE
//   export const sortByDate = () => ({
//     type: 'SORT_BY_DATE'
//   });

test ('should generate sort by date object', () => {
    const action= sortByDate();
    expect(action).toEqual({
        type:'SORT_BY_DATE'
    })    
})



//   // SORT_BY_AMOUNT
//   export const sortByAmount = () => ({
//     type: 'SORT_BY_AMOUNT'
//   });

test ('should generate sort by amount object', () => {
    const action= sortByAmount();
    expect(action).toEqual({
        type:'SORT_BY_AMOUNT'
    })    
})