import React from 'react';

function ContactSection() {
    return (
        <div className='bg-dark text-light py-5' id='contact'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12 d-flex flex-column justify-content-center'>
                        <h2 className='mb-5'>Contact me</h2>
                        <p className='para'>Email - hardaydwivedi@gmail.com</p>
                        <p className='para'><a onClick={(e) => {e.preventDefault(); window.location.href="https://github.com/harday-dwivedi"}} > Github - harday-dwivedi</a></p>
                        <p className='para'><a onClick={(e) => {e.preventDefault(); window.location.href="https://in.linkedin.com/in/harday-dwivedi-3b97b9362?original_referer=https%3A%2F%2Fwww.linkedin.com%2F"}} >Linkedln - Harday Dwivedi</a></p>
                        <p className='para'><a onClick={(e) => {e.preventDefault(); window.location.href=" https://www.instagram.com/harday_dwivedi_208"}} >Instagram - harday_dwivedi_208</a></p>                       
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactSection;