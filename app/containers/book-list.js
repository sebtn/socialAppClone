import React, {Component} from 'react'
import {connect} from 'react-redux'

class BookList extends Component {

/*-----------------------------------------------------------------*/
	renderList = () => {
		return this.props.books.map((book) => {
			return (
				<li key={book.title} className="list-group-item">{book.title}</li>
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
	 * Glues react and react together.
	 */
	return {
		books: state.books,
	}
}

/*-----------------------------------------------------------------*/
/* Connect takes a function and a component and 
 * produces a ...Container => component aware of the state 
 */
export default connect(mapStateToProps)(BookList)
