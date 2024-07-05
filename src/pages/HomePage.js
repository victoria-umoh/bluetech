import React, { Component } from 'react'
// import NavMenu from '../partials/NavMenu'
import DepartmentList from '../components/DepartmentList'

export class HomePage extends Component {
  render() {
    return (
      <>
        {/* <NavMenu /> */}
        <DepartmentList />
      </>
    )
  }
}

export default HomePage
