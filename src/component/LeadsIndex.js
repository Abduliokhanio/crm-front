import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getLeads} from '../actions/leadsAction'

export class LeadsIndex extends Component {

    constructor(){
        super()
        this.state = {loading: false}
    }

    componentDidMount(){
        this.props.getLeads()
        debugger
    }

    render() {

        let pgContent

        return (
            <div>
                List of all the leads
                {pgContent}
            </div>
        )
    }
}

let mapStateToProps = state => {
    return {
        leads: state.leadReducer.leads,
        loading: state.leadReducer.loading
    }
}

export default connect(mapStateToProps,{getLeads}) (LeadsIndex)
