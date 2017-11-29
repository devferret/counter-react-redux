import React, { Component } from 'react'
import { connect } from 'react-redux'

import CounterControl from '../../components/CounterControl/CounterControl'
import CounterOutput from '../../components/CounterOutput/CounterOutput'

import * as actions from '../../store/actions'

class Counter extends Component {
  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl
          label="Increment"
          clicked={() => this.props.incrementCount()}
        />
        <CounterControl
          label="Decrement"
          clicked={() => this.props.decrementCount()}
        />
        <CounterControl label="Add 5" clicked={() => this.props.addCount(5)} />
        <CounterControl
          label="Subtract 5"
          clicked={() => this.props.subCount(5)}
        />
        <hr />
        <button onClick={() => this.props.storeCount(this.props.ctr)}>
          Store Result
        </button>
        <ul
          style={{
            listStyle: 'none',
            display: 'flex'
          }}>
          {this.props.results.map(result => {
            return (
              <li
                key={result.id}
                onClick={() => this.props.deleteCount(result.id)}
                style={{
                  cursor: 'pointer',
                  backgroundColor: 'black',
                  color: 'white',
                  margin: '12px',
                  padding: '12px',
                  borderRadius: '5px'
                }}>
                {result.value}
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    ctr: state.ctr.counter,
    results: state.res.results
  }
}

export default connect(mapStateToProps, actions)(Counter)
