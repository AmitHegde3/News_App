import React, { Component } from 'react'
import loading from "../loading.gif"

export default class Spinner extends Component {
  render() {
    return (
      <div className='text-center mx-5 my-5'>
        <img src={loading} alt="loading"/>
      </div>
    )
  }
}
