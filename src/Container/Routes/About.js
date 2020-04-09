import React,{Component} from 'react'
import './About.css'
import randomGuy from'./randomGuy.jpg' 

class About extends Component {

    render(){
        return(
            <div className="about">
                <div className="cite">
                    <img src={randomGuy} alt="Pic" className="img" />
                    <p className="person-name">Sazzad Aryan</p>
                    <p className="profission">Front-end Engineer</p>
                </div>
                <p className="about-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae dolor vitae dui aliquam porta nec ac neque. Pellentesque et nisi nec elit venenatis imperdiet pharetra vel dui. Vestibulum molestie dolor ut tortor auctor, ac lobortis sem congue. Nullam ac ultrices neque, ut tincidunt quam. Integer ac mauris sed ipsum consequat tempor id vel libero. Curabitur id egestas nisl. Praesent aliquam dapibus eros pharetra condimentum. Mauris viverra lacus at pretium gravida. Suspendisse dapibus mi risus, id efficitur nibh feugiat non. Fusce pulvinar, quam ac feugiat semper, dui nibh vehicula libero, eget accumsan justo odio ut enim. Etiam vel ornare odio, et varius neque. Nullam eu venenatis magna, eget fermentum ex.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae dolor vitae dui aliquam porta nec ac neque. Pellentesque et nisi nec elit venenatis imperdiet pharetra vel dui. Vestibulum molestie dolor ut tortor auctor, ac lobortis sem congue. Nullam ac ultrices neque, ut tincidunt quam. Integer ac mauris sed ipsum consequat tempor id vel libero. Curabitur id egestas nisl. Praesent aliquam dapibus eros pharetra condimentum. Mauris viverra lacus at pretium gravida. Suspendisse dapibus mi risus, id efficitur nibh feugiat non. Fusce pulvinar.</p>
            </div>
        )
    }
}

export default About