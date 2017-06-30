import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import {selectBook} from '../actions/index'

class BookList extends Component {
/*-----------------------------------------------------------------*/
	renderList = () => {
		return this.props.books.map( (book) => {
			return (
				<li key={book.title}
          onClick={ () => this.props.selectBook(book) } 
          className="list-group-item">
          {book.title}
        </li>
			)
		})
	}

/*-----------------------------------------------------------------*/
	render() {
		return (
			<ul className="list-group col-sm-4">
				{this.renderList()}
			</ul>
		)
	}
}

/*-----------------------------------------------------------------*/
function mapStateToProps(state) {
  /* The return whatever will show up as props inside
   * of BookList class, usually returns an object
   * Glues react and redux together.
   * reducer for book return an array of books  
   * note books is also referred in the index/reducers*/
  return {
    books: state.books,
  }
}

/*-----------------------------------------------------------------*/
/* anything return from this func will get passed as props
 * in the container BookList, the idea is to be 
 * able to call the selectBook action creator as
 * this.props.selectBook() inside the class container.
 *  Useful for defining and actions as props and
 * firing up them as callbacks to parents => i.e onCLick  */
function mapDispatchToProps(dispatch) {
 /* Bind action creators takes two args first is an object
  * for action second is dispatch.
  * whenever selectBook is called, the result (value in this case) 
  * is passed to all reducers. The binding does the flow 
  * note that the action defined selecteBook contains a type 
  * called 'BOOK_SELECTED' which is referred in the reducers*/
  return bindActionCreators({ selectBook: selectBook }, dispatch)
}

/*-----------------------------------------------------------------*/
/* Connect takes a function and a component and 
 * produces a ...Container => component aware of the state 
 * need to know about selectBook action as prop. 
 * the idea behind this is also connect to the store  */
export default connect(mapStateToProps, mapDispatchToProps)(BookList)
