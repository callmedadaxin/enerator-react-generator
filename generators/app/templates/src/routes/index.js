import Home from './Home'
import Loadable from 'react-loadable'
import Loading from '@/components/Loading'
import store, { registerReducer } from '@/store'

/**
 * 异步引入组件,Reducer
 */
const AsyncRoutes = (name) => {
  return Loadable({
    loader: () => {
      return import(/* webpackChunkName: '[name]' */ `./${name}/reducers/index.js`)
        .then(res => {
          try {
            registerReducer(store, {
              key: name,
              reducer: res.default
            })
          } catch (error) {
            console.log(error)
          }
          return import(/* webpackChunkName: '[name]' */ `./${name}/index.js`)
            .then(res => res.default)
        })
    },
    loading: Loading
  })
}

export default [{
  path: '/',
  exact: true,
  component: Home
}, {
  path: '/user',
  component: AsyncRoutes('User')
}]
