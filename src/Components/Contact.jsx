import React, { Component } from 'react'
import contact from '../Components/public/image/contactlogo.png';
import mailme from '../Components/public/image/mailmeimg.png';


class Contact extends Component {
    render() {
        return (
            <section className="container-1">

                <img id="contactimg" src={contact} width="180" height="180" alt="contactlogo"/>
                <h3> <strong>Hash Lover</strong></h3>
                <h4>Random Text Random text Random text</h4>
                <h4>Email Id: hash@gmail.com</h4>
                <h4>Contant Info: 9890344789</h4>

                
                
                        {/* <a href="https://www.facebook.com/abhishek.shaji1">
                        <span className="icon fa fa-facebook" style={{color:'antiquewhite'}} ></span>
                        </a>
                        <a href="https://twitter.com/techstud101" >
                                <span className="icon fa fa-twitter"  style={{color:'antiquewhite'}}></span>
                        </a>
                        <a href="https://github.com/abhishek305">
                                <span className="icon fa fa-github" style={{color:'antiquewhite'}} ></span>
                        </a>
                        <a href="https://www.linkedin.com/in/abhishek-ezhava-477286146/">
                                <span className="icon fa fa-linkedin-square"  style={{color:'antiquewhite'}}></span>
                        </a>
                        <a href="https://techstud105blog.wordpress.com/">
                                <span className="icon fa fa-wordpress" style={{color:'antiquewhite'}}></span>
                        </a> */}
                
            </section>
        )
    }
}

export default Contact
