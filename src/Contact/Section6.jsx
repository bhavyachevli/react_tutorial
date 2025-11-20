import React, { useState } from "react";

const Section6 =() =>
{
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            const response = await fetch('http://127.0.0.1:5000/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            const result = await response.json();

            if (result.success) {
                setSubmitStatus({ type: 'success', message: result.message });
                setFormData({ first_name: '', last_name: '', email: '', message: '' });
            } else {
                setSubmitStatus({ type: 'error', message: result.error });
            }
        } catch (error) {
            setSubmitStatus({ type: 'error', message: 'Network error. Please try again.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    return(
        <>
            <section className="contact-section" id="section_5">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f9f9f9" fillOpacity="1" d="M0,96L40,117.3C80,139,160,181,240,186.7C320,192,400,160,480,149.3C560,139,640,149,720,176C800,203,880,245,960,250.7C1040,256,1120,224,1200,229.3C1280,235,1360,277,1400,298.7L1440,320L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>
                <div className="container">
                    <div className="row">

                        <div className="col-lg-12 col-12">
                            <small className="section-small-title">Ask anything.</small>

                            <h2 className="mb-4">Say Hello</h2>
                        </div>

                        <div className="col-lg-6 col-12">
                            {submitStatus && (
                                <div className={`alert ${submitStatus.type === 'success' ? 'alert-success' : 'alert-danger'}`} role="alert">
                                    {submitStatus.message}
                                </div>
                            )}
                            
                            <form className="custom-form contact-form" onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-12">
                                        <div className="input-group align-items-center">
                                            <label htmlFor="first-name">First Name</label>

                                            <input 
                                                type="text" 
                                                name="first_name" 
                                                id="first-name" 
                                                className="form-control" 
                                                placeholder="Jack" 
                                                value={formData.first_name}
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6 col-12">
                                        <div className="input-group align-items-center">
                                            <label htmlFor="last-name">Last Name</label>

                                            <input 
                                                type="text" 
                                                name="last_name" 
                                                id="last-name" 
                                                className="form-control" 
                                                placeholder="Doe" 
                                                value={formData.last_name}
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="input-group align-items-center">
                                    <label htmlFor="email">Email Address</label>

                                    <input 
                                        type="email" 
                                        name="email" 
                                        id="email" 
                                        className="form-control" 
                                        placeholder="Jackdoe@gmail.com" 
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>

                                <div className="input-group textarea-group">
                                    <label htmlFor="message">Message</label>

                                    <textarea 
                                        name="message" 
                                        rows="6" 
                                        className="form-control" 
                                        id="message" 
                                        placeholder="What can we help you?"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        required
                                    ></textarea>
                                </div>

                                <div className="col-lg-3 col-md-4 col-6">
                                    <button 
                                        type="submit" 
                                        className="form-control" 
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? 'Sending...' : 'Send'}
                                    </button>
                                </div>
                            </form>
                        </div>

                        <div className="col-lg-6 col-12 mt-5 mt-lg-0">
                            <div className="custom-block">

                                <h3 className="text-white mb-2">Store</h3>

                                <p className="text-white mb-2">
                                    <i className="contact-icon bi-geo-alt me-1"></i>

                                    102 Utah Road, Berlin, Germany
                                </p>

                                <h3 className="text-white mt-3 mb-2">Contact Info</h3>

                                <div className="d-flex flex-wrap">
                                    <p className="text-white mb-2 me-4">
                                        <i className="contact-icon bi-telephone me-1"></i>

                                        <a href="tel: 090-080-0760" className="text-white">
                                            090-080-0760
                                        </a>
                                    </p>

                                    <p className="text-white">
                                        <i className="contact-icon bi-envelope me-1"></i>

                                        <a href="mailto:info@company.com" className="text-white">
                                            info@company.com
                                        </a>
                                    </p>
                                </div>

                                <iframe className="google-map mt-2" src="https://maps.google.com/maps?q=Udhna%2C%20Surat%2C%20Gujarat%2C%20India&output=embed" width="100%" height="220" style={{border:0}} allowFullScreen="" loading="lazy"></iframe>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}
export default Section6;
