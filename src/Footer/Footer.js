import React from 'react';

const Footer = () => {
    return (
        <footer style={{"position": "fixed", "bottom": "0", "left": "0", "width": "100%"}}>
            <footer className="bg-dark text-light text-center text-lg-start mt-3">
                
                <div className="text-center p-3" style={{"backgroundColor": "rgba(0, 0, 0, 0.05)"}}>
                © 2024 Copyright: ReunionIpssi
                
                </div>
                
            </footer>
        </footer>
    );
};

export default Footer;