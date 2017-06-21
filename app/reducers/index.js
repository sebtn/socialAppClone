import {combineReducers} from 'redux'
import BooksReducer from './reducer_books'
import ActiveBook from './reducer_active_book'

/* Books reducer is responsible for creating 
 * the value of books, creates the property books,
 * so the state that gets passed is the one that 
 * BooksReducer generates previously. 
 * Any key in the combineReducer object is a key
 * in the global state object as well   */
const rootReducer = combineReducers({
	books: BooksReducer,
  activeBook: ActiveBook
})

export default rootReducer