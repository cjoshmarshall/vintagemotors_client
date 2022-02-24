import React from 'react'
import Masthead from './Masthead'
import './OwnAFranchise.css'

function OwnAFranchise() {
    return (
        <>
        <div className='ownAFranchise'>
            <div className='ownAFranchise_image'>
            <div className='ownAFranchise_container1'>
                <div className='ownAFranchise_content'>
                    <h1>Partner with Vintage Motors Rentals</h1>
                </div>
            </div>
            </div>
            <div className='ownAFranchise_container2'>
                <h1 className='ownAFranchise_title'>
                    What is in store for you
                </h1>
                <div className='ownAFranchise_content2'>
                    <div className='ownAFranchise_subcontainer1'>
                        <h3 className='ownAFranchise_subtitle'>
                            A Brand trusted by many
                        </h3>
                        <div className='ownAFranchise_body'>
                        Our consistency in quality can be seen by good reviews we've received across all social channels.
                        </div>
                    </div>
                    <div className='ownAFranchise_subcontainer2'>
                        <h3 className='ownAFranchise_subtitle'>
                            Leverage our strength for your gains
                        </h3>
                        <div className='ownAFranchise_body'>
                            Our team is constantly looking to add more locations and expand in different geographical areas that have a promising future in the bike-rental domain.
                        </div>
                    </div>
                    <div className='ownAFranchise_subcontainer3'>
                        <h3 className='ownAFranchise_subtitle'>
                            Technology-driven approach to optimize efficiency
                        </h3>
                        <div className='ownAFranchise_body'>
                            Our team has built highly sophisticated operational tools that help in easing out our end to end operations. Our analytical tools determine the demand and supply through which we regulate our inventory time and again.
                        </div>                        
                        <div className='ownAFranchise_buttoncontainer'>
                            <a href='/contact-us'>
                                <button className='ownAFranchise_button'>
                                    Apply for Franchise
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>            
        </div>
        <Masthead />
        </>
    )
}

export default OwnAFranchise
