import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

import  '././styles/app.scss' 
import BookApp from './components/book-app'
import reducers from './reducers'

const createStoreWithMiddleware = applyMiddleware()(createStore)

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)} >
		<BookApp />
	</Provider> 
  ,document.getElementById('root'))