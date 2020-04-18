import React from 'react'
import ReactMarkdown from 'react-markdown'
import {connect} from 'react-redux'

const markDown = props => {
    let style = props.showMarkDown ? {visibility:'visible',opacity:'1',transition:'all 0.3s'} : {visibility:'hidden',opacity:'0',transition:'all 0.3s'} 
    return(
        <div style={style}>
            <ReactMarkdown source={props.source} escapeHtml={true} />
        </div>
    )
}

const mapStateToProps = state => {
    return {
        showMarkDown:state.showMarkDown
    }
}

export default connect(mapStateToProps)(markDown)