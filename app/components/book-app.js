import React, {Component} from 'react'
import BookList from '../containers/book-list'
import BookDetails from '../containers/book-details'

/* State form the components is not the same as the 
application state, they are different objects 
this is a dumb component because only displays things
it does not concern itself with props or state neither
local or global */
export default class BookApp extends Component {

	render() {
		return (
			<div>
				<BookList />			
				<BookDetails />			
			</div>
		)
	}
}