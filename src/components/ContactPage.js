import React, { useRef, useEffect, useState } from 'react';
import './ContactPage.css';

const fields = [
    { id: 'name', label: 'Name', type: 'text', placeholder: 'Your Name' },
    { id: 'email', label: 'Email', type: 'email', placeholder: 'you@example.com' },
    { id: 'message', label: 'Message', type: 'textarea', placeholder: 'Your Message...' },
];

const ContactPage = () => {
    const containerRef = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );
        if (containerRef.current) observer.observe(containerRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={containerRef}
            className={`contact-page fade-in-section ${visible ? 'is-visible' : ''}`}
        >
            <div className="container py-5">
                <h2 className="section-title text-center mb-4">Get in Touch</h2>
                <form className="contact-form mx-auto">
                    {fields.map((field, idx) => (
                        <div
                            key={field.id}
                            className={`form-group fade-item`}
                            style={{ transitionDelay: `${idx * 150}ms` }}
                        >
                            <label htmlFor={field.id}>{field.label}</label>
                            {field.type === 'textarea' ? (
                                <textarea
                                    id={field.id}
                                    placeholder={field.placeholder}
                                    required
                                />
                            ) : (
                                <input
                                    id={field.id}
                                    type={field.type}
                                    placeholder={field.placeholder}
                                    required
                                />
                            )}
                        </div>
                    ))}
                    <button type="submit" className="btn btn-primary btn-submit fade-item" style={{ transitionDelay: `${fields.length * 150}ms` }}>
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default ContactPage;
