import { useState } from "react";
import { validateEmail } from '../utils/helpers';

export default function AboutPage() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            setErrorMessage('Please enter a valid email');
            return;
        } else if (message === '' || name === '' || email === '') {
            setErrorMessage('Fields must be filled out');
            return;
        }

        alert(`Thank you ${name} i will reach out to you soon.`);
        setName('');
        setEmail('');
        setMessage('');
        setErrorMessage('');
    };

    return (
        <div className="container py-3">
            <h1>Contact</h1>
            <form className="form mt-3 w-50" onSubmit={handleFormSubmit}>
                <div className="mb-3">
                    <label for="name" className="form-label">Name :</label>
                    <input
                        value={name}
                        className="form-control"
                        name="name"
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                    />
                </div>
                <div className="mb-3">
                    <label for="email" className="form-label">Email :</label>
                    <input
                        value={email}
                        className="form-control"
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                    />
                </div>
                <div className="mb-3">
                    <label for="message" className="form-label">Message :</label>
                    <textarea
                        value={message}
                        className="form-control"
                        name="message"
                        onChange={(e) => setMessage(e.target.value)}
                        rows='3'
                    ></textarea>
                </div>
                <button type="submit">Submit</button>
            </form>
            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}
        </div>
    );
}
