import React, {Component} from 'react'
import {connect} from 'react-redux'

class BookDetails extends Component {
  render() {
    /* Conditional rendering to avoid crashes at 
    the beginning. Note the default state defined
    in the reducers active book as `state = null`,
    since there is nothing bing clicked. So,  
    as component renders is going to read 
    this.props.book, which is defined as null */
    if(!this.props.book) { 
      return <div>Select a book to get started!</div> 
    }
    return (
      <div>
        <h3>Details for: </h3>
        <div>Title: {this.props.book.title}</div>
        <div>Pages: {this.props.book.pages}</div>
        <div>Author: {this.props.book.author}</div>
      </div>
    )
  }
}

/*-----------------------------------------------------------------*/
function mapStateToProps(state) {
  /* whatever is return will appear as props 
  inside book-details container, successfully connecting 
  it to the reducers/index which provides the state for 
  the whole app.
  Connected to the store so it is aware of the changes of 
  the activeBooks piece of state. */
  return {
    book: state.activeBook
  }
}

/*-----------------------------------------------------------------*/
/*Connect the app state to the props in the container*/
export default connect(mapStateToProps)(BookDetails)