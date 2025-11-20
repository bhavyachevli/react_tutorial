import React, { useState, useEffect } from 'react';
import Header from '../Header';
import Footer from '../Footer';

const Admin = () => {
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchContacts();
    }, []);

    const fetchContacts = async () => {
        try {
            const response = await fetch('http://127.0.0.1:5000/api/contact');
            const result = await response.json();
            
            if (result.success) {
                setContacts(result.data);
            } else {
                setError(result.error);
            }
        } catch (err) {
            setError('Failed to fetch contacts');
        } finally {
            setLoading(false);
        }
    };

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleString();
    };

    return (
        <>
            <Header />
            <main style={{ marginTop: '80px', padding: '20px' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="mb-4">Contact Messages Admin</h1>
                            
                            {loading && <p>Loading contacts...</p>}
                            
                            {error && (
                                <div className="alert alert-danger" role="alert">
                                    {error}
                                </div>
                            )}
                            
                            {!loading && !error && (
                                <>
                                    <p className="mb-4">
                                        <strong>Total Messages: {contacts.length}</strong>
                                    </p>
                                    
                                    {contacts.length === 0 ? (
                                        <div className="alert alert-info" role="alert">
                                            No contact messages found.
                                        </div>
                                    ) : (
                                        <div className="table-responsive">
                                            <table className="table table-striped table-hover">
                                                <thead className="table-dark">
                                                    <tr>
                                                        <th>ID</th>
                                                        <th>Name</th>
                                                        <th>Email</th>
                                                        <th>Message</th>
                                                        <th>Date</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {contacts.map((contact) => (
                                                        <tr key={contact.id}>
                                                            <td>{contact.id}</td>
                                                            <td>
                                                                <strong>
                                                                    {contact.first_name} {contact.last_name}
                                                                </strong>
                                                            </td>
                                                            <td>
                                                                <a href={`mailto:${contact.email}`}>
                                                                    {contact.email}
                                                                </a>
                                                            </td>
                                                            <td>
                                                                <div style={{ maxWidth: '300px', wordWrap: 'break-word' }}>
                                                                    {contact.message}
                                                                </div>
                                                            </td>
                                                            <td>{formatDate(contact.created_at)}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    )}
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Admin;
