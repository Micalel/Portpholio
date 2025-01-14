import React, { useState } from "react";
import styles from "./Contact.module.scss";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    setIsSubmitted(true); 
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className={styles.contact}>
      <h2>Contactez-moi ici ou via mes liens!</h2>
      {isSubmitted && <p className={styles.successMessage}>Merci pour votre message ! Je vous répondrai bientôt.</p>}
      <form onSubmit={handleSubmit} className={styles.contactForm}>
        <div className={styles.inputGroup}>
          <label htmlFor="firstName">Prénom</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Votre prénom"
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="lastName">Nom</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Votre nom"
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Votre email"
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Votre message"
            required
          />
        </div>
        <button type="submit" className={styles.submitButton}>Envoyer</button>
      </form>
    </div>
  );
};

export default Contact;
