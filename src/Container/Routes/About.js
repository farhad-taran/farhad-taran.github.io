import React,{Component} from 'react'
import './About.css'
import profilePicture from'./profilePicture.jpg' 

class About extends Component {

    render(){
        return(
            <div className="about">
                <div className="cite">
                    <img src={profilePicture} alt="Pic" className="img" />
                    <div className="details">
                        <p className="person-name">Farhad Taran</p>
                        <p className="profission">Senior Software Engineer | Software Craftsman | Solution Architect | Cloud Consultant (Azure, AWS)</p>
                    </div>                    
                </div>
                <div className="about-text">
                    <p>I am a passionate software craftsman who has a deep interest in best practices and principles, software architecture, DevOps, automated testing, and creating highly scalable and available Microservices on the AWS and Azure platforms.</p>
                    <p>I have been involved in white boarding and design of large scale Microservices transformation projects, implementation of CI/CD pipelines, writing SOLID and Test Driven Code and deployment and support of Microservices in production environments.</p>
                    <p>I enjoy learning new technologies and solving complex problems and am always striving to improve.</p>
                    <p>When I am not studying, watching training videos, attending meet-up groups or writing technical articles on my blog, I can usually be found in the gym or jogging in one of the local parks.</p>
                    <br/>
                    <p>My Bookshelf Includes the following and many more:</p>
                    <ul className="books">
                        <li>Adaptive Code via C#: Class and Interface Design, Design Patterns, and SOLID Principles</li>
                        <li>Patterns, Principles and Practices of Domain-Driven Design</li>
                        <li>The Pragmatic Programmer</li>
                        <li>Clean Code: A Handbook of Agile Software Craftsmanship</li>
                        <li>Agile Principles, Patterns, and Practices in C#</li>
                        <li>Dependency Injection in .NET</li>
                        <li>Refactoring: Improving the Design of Existing Code</li>
                        <li>Refactoring to Patterns</li>
                        <li>Test Driven Development</li>
                        <li>Domain Driven Design: Tackling Complexity in the Heart of Software</li>
                        <li>Patterns of Enterprise Application Architecture</li>
                        <li>Professional ASP.NET Design Patterns</li>
                        <li>Head First Design Patterns</li>
                        <li>SOA Patterns</li>
                        <li>Architecting applications for the Enterprise</li>
                        <li>The Art of Unit Testing</li>
                        <li>Effective Unit Testing: A guide for Java developers </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default About