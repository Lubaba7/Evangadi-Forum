import React from 'react';

const Footer = () => {
    return (
        <footer style={{backgroundColor: "#3B455A", height: "150px"}} className='container-fluid'>
            <div className='row d-flex'>
                <div className='col-4'>
                        <div>Logo</div>
                        <div className='d-flex gap-4'>
                            <div>Fa</div>
                            <div>Ins</div>
                            <div>YO</div>
                        </div>
                </div>

                <div className='col-4'>
                    <h2 style={{color: "white"}}>Useful Link</h2>
                    <div style={{color: "#888D98"}}>Terms of Service</div>
                    <div style={{color: "#888D98"}}>Privacy Policy</div>
                </div>
            
                <div className='col-4'>
                    <h2 style={{color: "white"}}>Contact Info</h2>
                    <div style={{color: "#888D98"}}>Evanga@siic.com</div>
                    <div style={{color: "#888D98"}}>+55 555 5555</div>
                </div>
            </div>           
        </footer>
    );
}

export default Footer;
