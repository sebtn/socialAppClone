/* state argument is not the apps's state, 
 * it is a kind of local state for which the 
 * reducer is responsible   */
export default function (state = null, action) {
  switch (action.type) {
    case 'BOOK_SELECTED':
      return action.payload
    default: 
      return state
    }
}