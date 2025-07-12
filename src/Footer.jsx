import React, { useState } from 'react';
import { 
  FaEnvelope, 
  FaGithub, 
  FaLinkedin, 
  FaTwitter, 
  FaInstagram
} from 'react-icons/fa';

export default function Footer() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const mailtoLink = `mailto:roshanbiswanathpatra@gmail.com?subject=Contact from ${name}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;
    window.open(mailtoLink);
    setFormData({ name: '', email: '', message: '' });
  };

  const socialLinks = [
    { icon: FaEnvelope, label: "Email", link: "mailto:roshanbiswanathpatra@gmail.com" },
    { icon: FaLinkedin, label: "LinkedIn", link: "https://linkedin.com/in/roshanbiswanath" },
    { icon: FaGithub, label: "GitHub", link: "https://github.com/roshanbiswanath" },
    { img: "/twinverse.ico", label: "Twinverse", link: "https://twinverse.in" },
    { icon: FaTwitter, label: "Twitter", link: "https://twitter.com/roshanbiswanath" },
    { icon: FaInstagram, label: "Instagram", link: "https://instagram.com/roshanbiswanath" }
  ];

  return (
    <footer
      style={{
        marginTop: "80px", // Add space before footer
        backgroundColor: "#0a0a0a",
        color: "#ffffff",
        padding: "40px 0 20px 0",
        borderTop: "1px solid rgba(255, 255, 255, 0.08)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 40px",
        }}
      >
        {/* Main Footer Content */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "60px",
            marginBottom: "40px",
          }}
        >
          {/* Connect Section */}
          <div>
            <h3
              style={{
                fontSize: "18px",
                fontWeight: "500",
                marginBottom: "20px",
                color: "#ffffff",
              }}
            >
              Connect
            </h3>
            <div
              style={{
                display: "flex",
                gap: "16px",
                flexWrap: "wrap",
              }}
            >
              {socialLinks.map((social, index) => {
                return (
                  <div
                    key={index}
                    onClick={() => window.open(social.link, '_blank')}
                    title={social.label}
                    style={{
                      width: "44px",
                      height: "44px",
                      backgroundColor: "rgba(255, 255, 255, 0.08)",
                      border: "1px solid rgba(255, 255, 255, 0.12)",
                      borderRadius: "8px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.12)";
                      e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.2)";
                      e.currentTarget.style.transform = "translateY(-1px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.08)";
                      e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.12)";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    {social.img ? (
                      <img src={social.img} alt={social.label} style={{ width: 22, height: 22, objectFit: 'contain', filter: 'invert(1)' }} />
                    ) : (
                      React.createElement(social.icon, { size: 18, color: "#ffffff" })
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3
              style={{
                fontSize: "18px",
                fontWeight: "500",
                marginBottom: "20px",
                color: "#ffffff",
              }}
            >
              Get in Touch
            </h3>
            <form onSubmit={handleSubmit}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "12px",
                  marginBottom: "12px",
                }}
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  style={{
                    padding: "10px 14px",
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    borderRadius: "6px",
                    color: "#ffffff",
                    fontSize: "14px",
                    outline: "none",
                  }}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  style={{
                    padding: "10px 14px",
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    borderRadius: "6px",
                    color: "#ffffff",
                    fontSize: "14px",
                    outline: "none",
                  }}
                />
              </div>
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows="3"
                style={{
                  width: "100%",
                  padding: "10px 14px",
                  marginBottom: "16px",
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "6px",
                  color: "#ffffff",
                  fontSize: "14px",
                  outline: "none",
                  resize: "vertical",
                }}
              />
              <button
                type="submit"
                style={{
                  width: "100%",
                  padding: "10px",
                  backgroundColor: "#ffffff",
                  color: "#000000",
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer",
                  fontSize: "14px",
                  fontWeight: "500",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#f0f0f0";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "#ffffff";
                }}
              >
                Send
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: "20px",
            borderTop: "1px solid rgba(255, 255, 255, 0.08)",
            fontSize: "12px",
            color: "#666666",
          }}
        >
          <p>© 2025 Biswanath Patra</p>
          <p>Built with React</p>
        </div>
      </div>
    </footer>
  );
}
