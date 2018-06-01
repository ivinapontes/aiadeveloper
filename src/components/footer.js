import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <div>
         <footer className="footer ">
                <div className="shadow-lg p-3 mb-5 bg-white rounded" >
                        <div className="container text-center text-md-left">
                            <div className="row">
                                 <div className="col-md-4 mx-auto">
                                 <a href="/"><img   src="https://restart.network/assets/partials/particles_partial/assets/images/restart.png" alt="Restart Logo" height="75px" width="200px"/></a>

                                      <h6><strong><em>Stichting Restart Network is a non-profit organization.</em></strong></h6>
                                 </div> 
                                      <div className="col-md-2 mx-auto" style={{marginTop:10+"px"}}>
                                        Restart Network
                                        <ul className="list-unstyled">
                                            <li>
                                                <a href="https://restart.network/about/"> About</a>
                                            </li>
                                            <li>
                                                <a href="#!">Press</a>
                                            </li>
                                            <li>
                                                <a href="https://restart.network/#">Contact</a>
                                            </li>
                                        
                                        </ul>
                                      </div>
                                      <div className="col-md-2 mx-auto">
                                        
                                        <div className="social-networks" style={{marginTop:10+"px", position: "relative"}}>
                                          <a href="https://twitter.com/Restart_Network"  className="fa fa-twitter" > Twitter</a>
                                        <br/>
                                        <a href="https://www.facebook.com/restartnetwork"  className="fa fa-facebook"> Facebook</a>
                                        <br/>
                                        <a href="https://instagram.com/restartnetwork/"  className="fa fa-instagram">Instagram</a>

                                        </div>
                                        <div className="Logo">
                                          <img width={100} height={50} src={'http://localhost:3001/uploads/images (1).png-1527791672154.png'} /> 
                                          <h6><center><strong><em>AIA Developers</em></strong></center></h6>
                                         </div>
                                      </div>
                                    

                            </div>  
                           
                        </div>
                </div>        
            </footer>
      </div>
    )
  }
}
