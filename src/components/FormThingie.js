import React from 'react'
import database2 from '../data/database.json'

export default class FormThingie extends React.Component {
  render() {
    console.log('rohit')
    const { database } = this.props
    console.log('database2')
    console.log(database2)
    console.log(database)
    return (
      <div>
        hello
      </div>
    )
  }
}
