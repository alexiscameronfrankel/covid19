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
                <div>
                <h1>About the Social Support Platform</h1>
                <article>
                    There are thousands of resources created to address COVID-19 all over the world. We hope not to contribute to ever growing list of tools, trackers, and never ending feeds. Instead, we want to help you navigate all of those resources and help you connect with people along the way. 
                    <br/><br/>
                    We believe that together we can survive the pandemic.
                    <br/><br/>
                    <b>Covid-19, Simplified</b> was created by a group of public health professionals with expertise in health behaviors, peer and social support, and community development. The contents of this resource are grounded in research and best practices.
                </article>
                <button id="about_home_btn" type="button">Read more about the evidence</button>
               </div>
              </section>
              <section id="how_to">
                <h1>How to use this page</h1>
                    <article>
                    <div>
                    <p>If you don’t know where to begin, let’s figure out how we can help. Start here.</p>
                    <p>If you already know what you need, directly explore how you could:</p>
                    <ol>
                        <li>Address isolation</li>
                        <li>Help your community</li>
                        <li>Keep track near where you live</li>
                        <li>Find support post-infection</li>
                        <li>Find support while you grieve</li>
                    </ol>
                    </div>
                    <img src="./3rdsection.png" alt="cartoon girl doing yoga" id="yogagirl" />
                </article>
              </section>
              <section id="resources">
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
               
              </section>
            </>
        );
    }
}

export default Home;