import React,{Component} from 'react'
import './Contact.css'


class Contact extends Component {
    render(){
        return(
            <div className="contact">
                <p className="info email-info">Email: test@test.com</p>
                <p className="info phone-info">Phone: +25 153378514</p>
            </div>
        )
    }
}

export default Contact