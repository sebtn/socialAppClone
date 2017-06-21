/* This is an action creator. Need to returns an 
 * object with type property and sometimes a payload */
export function selectBook(book) {
  return {
    type: "BOOK_SELECTED",
    payload: book,
  }
}