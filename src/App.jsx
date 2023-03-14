import React from 'react'
import ComponentClass from './components/ClassComponent'
// import LifeCycle from './components/LifeCycle'

export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        {/* <LifeCycle />*/}
        <ComponentClass min={1} max={10} />
      </div>
    )
  }
}
