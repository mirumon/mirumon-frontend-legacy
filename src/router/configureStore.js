import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import { connectRoutes } from 'redux-first-router'
import appReducer from '../redux/reducer'

import routes from './routes'

export default function configureStore(preloadedState) {
  const routesMap = {}

  Object.keys(routes).forEach(pageName => {
    routesMap[pageName] = routes[pageName].path
  })

  const { reducer, middleware, enhancer } = connectRoutes(routesMap)

  const rootReducer = combineReducers({ page: (state = 'HomePage') => state, location: reducer, app: appReducer })
  const middlewares = applyMiddleware(middleware)
  const enhancers = compose(
    enhancer,
    middlewares,
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )

  const store = createStore(rootReducer, preloadedState, enhancers)

  return { store }
}
