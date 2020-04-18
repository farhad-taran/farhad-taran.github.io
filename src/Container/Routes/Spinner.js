import React from 'react'
import spinnerImg from './spinner.png'
import './Spinner.css'
import {connect} from 'react-redux'

const spinner = props=> {
    let style = props.showSpinner ? {visibility:'visible',opacity:'1',height:'50',transition:'all 0.3s 0.3s'} : {visibility:'hidden',opacity:'0',height:'0',transition:'all 0.3s'} 
    return (
        <div className="spinner-holder" style={style} >
            <img src={spinnerImg} className="spinner" alt="spinner"/>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        showSpinner: state.showSpinner
    }
}

export default connect(mapStateToProps)(spinner)