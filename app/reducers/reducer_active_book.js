/* state argument is not the apps's state, 
 * it is a kind of local state for which the 
 * reducer is responsible, how ever the combination of
 * this local states is the application's state.
 * The new state is assembled and containers
 * get notified about the changes in the state 
 * so they re render    */
export default function (state = null, action) {
  switch (action.type) {
    case 'BOOK_SELECTED':
      return action.payload
    default: 
      return state
    }
}