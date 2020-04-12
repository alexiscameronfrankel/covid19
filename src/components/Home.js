import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <>
              <section id="start">
                 <article id="start_content">
                     The novel Coronavirus has overwhelmed us. Our health. Our healthcare system. Our jobs. Our connections to one another. 
                    <br/><br/>
                     <div> 
                        <b> We want to connect you to what you need to deal with this pandemic. </b>  
                     </div>
                     <button id="start_btn" type="button">Start Here</button>
                 </article>
              </section>
              <section id="about_home"> 
                <h1>About the Social Support Platform</h1>
                <article>
                    There are thousands of resources created to address COVID-19 all over the world. We hope not to contribute to ever growing list of tools, trackers, and never ending feeds. Instead, we want to help you navigate all of those resources and help you connect with people along the way. 
                    <br/><br/>
                    We believe that together we can survive the pandemic.
                    <br/><br/>
                    <b>Covid-19, Simplified</b> was created by a group of public health professionals with expertise in health behaviors, peer and social support, and community development. The contents of this resource are grounded in research and best practices.
                </article>
                <button id="about_home_btn" type="button">Read More</button>
              </section>
            </>
        );
    }
}

export default Home;