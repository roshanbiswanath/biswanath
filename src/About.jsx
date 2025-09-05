import Footer from './Footer';

export default function About() {
  return (
    <div
      id="about-section"
      style={{
        position: "absolute",
        top: "100vh",
        left: 0,
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#0a0a0a",
        color: "#ffffff",
        paddingTop: "80px",
        paddingBottom: "80px",
        zIndex: 10,
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 40px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "center",
          }}
        >
          {/* Left side - About content */}
          <div>
            <h2
              style={{
                fontSize: "48px",
                fontWeight: "bold",
                marginBottom: "30px",
                background: "linear-gradient(135deg, #ffffff, #cccccc)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              About Biswanath
            </h2>
            <div
              style={{
                fontSize: "18px",
                lineHeight: "1.7",
                color: "#e0e0e0",
              }}
            >
              <p style={{ marginBottom: "24px" }}>
                Welcome! I'm Biswanath Patra, a developer passionate about building immersive digital experiences. My work ranges from WebVR applications showcased to thousands in Dubai to cutting-edge AR/VR and creative technology solutions.
              </p>
              <p style={{ marginBottom: "24px" }}>
                As Project Lead at Twinverse, I've architected MultiUser WebVR experiences, built AR Experience Builders that reduced development time by 95%, and optimized ML-based virtual try-on systems achieving 90% performance improvements. I'm passionate about creating technology that makes a real impact.
              </p>
              <p style={{ marginBottom: "24px" }}>
                My projects have taken me from hackathons and open source to Dubai's Gitex Global Tech Summit and a presentation to President Putin in Russia. I love solving complex problems with innovative solutions.
              </p>
              <p>
                Ready to bring your next ambitious project to life? Let's build something extraordinary together!
              </p>
            </div>
          </div>

          {/* Right side - Skills */}
          <div>
            <h3
              style={{
                fontSize: "32px",
                fontWeight: "600",
                marginBottom: "30px",
                color: "#ffffff",
              }}
            >
              I specialize in
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {[
                "WebXR Development (VR/AR Experiences, Unity, WebVR)",
                "Full Stack Development (React, Node.js, Express.js, MongoDB)",
                "Machine Learning & AI (PyTorch, Computer Vision, Virtual Try-On)",
                "Backend Systems (Python, Flask, RESTful APIs, SQLite)",
                "Cloud & DevOps (AWS Deployment, Performance Optimization)",
                "Hardware Integration (Arduino, IoT, Sensor Systems)",
                "Product Development (Design Thinking, Project Management)",
                "3D Web Technologies (Three.js, WebGL, Interactive Experiences)"
              ].map((skill, index) => (
                <div
                  key={index}
                  style={{
                    padding: "20px",
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    borderRadius: "12px",
                    backdropFilter: "blur(10px)",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
                    e.target.style.borderColor = "rgba(255, 255, 255, 0.2)";
                    e.target.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "rgba(255, 255, 255, 0.05)";
                    e.target.style.borderColor = "rgba(255, 255, 255, 0.1)";
                    e.target.style.transform = "translateY(0)";
                  }}
                >
                  <div
                    style={{
                      fontSize: "16px",
                      fontWeight: "500",
                      color: "#ffffff",
                    }}
                  >
                    {skill}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Achievements section */}
        <div
          style={{
            marginTop: "80px",
            padding: "40px",
            backgroundColor: "rgba(255, 255, 255, 0.02)",
            borderRadius: "20px",
            border: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <h3
            style={{
              fontSize: "32px",
              fontWeight: "600",
              marginBottom: "30px",
              color: "#ffffff",
              textAlign: "center",
            }}
          >
            Key Achievements
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "30px",
            }}
          >
            {[
              {
                title: "YouthX Unipreneur Award Winner",
                description: "Won at Gitex Global Tech Summit 2022, Dubai for Twinverse project"
              },
              {
                title: "Top 50 National Selection",
                description: "Project selected in top 50 projects of India in ATL Marathon 2018"
              },
              {
                title: "International Experience & Presidential Recognition",
                description: "Selected for AIM-Sirius Student Exchange Program, Sochi, Russia, and presented a project to President Putin."
              }
            ].map((achievement, index) => (
              <div
                key={index}
                style={{
                  padding: "24px",
                  backgroundColor: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "12px",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "rgba(255, 255, 255, 0.05)";
                  e.target.style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "rgba(255, 255, 255, 0.03)";
                  e.target.style.transform = "translateY(0)";
                }}
              >
                <h4
                  style={{
                    fontSize: "18px",
                    fontWeight: "600",
                    color: "#ffffff",
                    marginBottom: "12px",
                  }}
                >
                  {achievement.title}
                </h4>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#cccccc",
                    lineHeight: "1.5",
                  }}
                >
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact section */}
        <div
          style={{
            marginTop: "80px",
            textAlign: "center",
            padding: "40px",
            backgroundColor: "rgba(255, 255, 255, 0.03)",
            borderRadius: "20px",
            border: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <h3
            style={{
              fontSize: "28px",
              fontWeight: "600",
              marginBottom: "20px",
              color: "#ffffff",
            }}
          >
            Let's Build Something Extraordinary
          </h3>
          <p
            style={{
              fontSize: "16px",
              color: "#cccccc",
              marginBottom: "30px",
              maxWidth: "600px",
              margin: "0 auto 30px auto",
            }}
          >
            From award-winning VR experiences to enterprise-scale systems, I'm passionate 
            about turning ambitious ideas into reality. Currently working at ServiceNow 
            and always excited to collaborate on cutting-edge projects.
          </p>
          <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
            <button
              style={{
                padding: "12px 30px",
                backgroundColor: "transparent",
                color: "#ffffff",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                borderRadius: "8px",
                cursor: "pointer",
                fontSize: "16px",
                fontWeight: "500",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
                e.target.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "transparent";
                e.target.style.transform = "translateY(0)";
              }}
            >
              View Projects
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
