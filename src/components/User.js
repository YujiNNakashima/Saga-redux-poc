import React from 'react'
import { connect } from 'react-redux';

const User = ({user}) => {
    return <h1>user component: {user} </h1>
}

const mapStateToProps = (state) => ({
    user: state.user
})

export default connect(mapStateToProps, null)(User)

