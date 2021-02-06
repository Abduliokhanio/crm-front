import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getLeads} from '../actions/leadsAction'

export class LeadsIndex extends Component {

    constructor(){
        super()
        this.state = {}
    }

    componentDidMount(){
        this.props.getLeads()

    }

    render() {

        let leads_arr = this.props.leads

        let pgContent = leads_arr.map(element => {
            return <h1>{element.name}</h1>
        })

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
