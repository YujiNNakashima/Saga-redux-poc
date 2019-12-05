import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { loadRequestUser, testeAction } from './ducks/search/actions';
import User from './components/User'

function App({addInputToStoreAction}) {

  const [inputState, setInputState] = useState({
    input: ''
  })

  useEffect(() => {
  })

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputState.input)
    // chama a action
    loadRequestUser(inputState.input)
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="insert" onChange={(e) => setInputState({input: e.target.value})}></input>
        <button type="submit">clica</button>
      </form>
      <User></User>
    </div>
  );
}

const mapStateToProps = state => ({
  store: state
})

const mapDispatchToProps = dispatch => ({
  // addInputToStoreAction: (input) => dispatch(addInputToStoreAction(input))
  loadRequestUser: (id) => dispatch(loadRequestUser(id)),
  testeAction: () => dispatch(testeAction())
})




export default connect(mapStateToProps, mapDispatchToProps)(App);
