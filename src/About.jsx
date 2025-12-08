export default function About() {
  return (
    <div
      id="about-section"
      style={{
        position: "relative",
        width: "100%",
        backgroundColor: "#0a0a0a",
        color: "#ffffff",
        paddingTop: "60px",
        paddingBottom: "20px",
        boxSizing: "border-box",
        overflowX: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 40px",
          boxSizing: "border-box",
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
                I'm Biswanath Patra, a developer passionate about building immersive digital experiences. My expertise spans WebVR applications showcased in Dubai to cutting-edge AR/VR and ML-based solutions.
              </p>
              <p style={{ marginBottom: "24px" }}>
                As Project Lead at Twinverse, I architected MultiUser WebVR experiences, built AR tools that reduced development time by 95%, and optimized virtual try-on systems with 90% performance improvements.
              </p>
              <p>
                From hackathons to Gitex Global and presentations to world leaders—I solve complex problems with innovative solutions. Let's build something extraordinary together!
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
                "WebXR & 3D Web (VR/AR, Unity, Three.js, WebGL, Interactive Experiences)",
                "Full Stack & Backend Development (React, Node.js, Express.js, Python, Flask, MongoDB, SQLite, RESTful APIs)",
                "Machine Learning & AI (PyTorch, Computer Vision, Virtual Try-On, LLM-enabled Apps)",
                "Hardware Integration (Arduino, esp32, IoT, Sensor Systems)"
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
                    wordBreak: "break-word",
                    overflow: "hidden",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
                    e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.2)";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.05)";
                    e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
                    e.currentTarget.style.transform = "translateY(0)";
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
            marginTop: "40px",
            padding: "0px 20px 40px 20px",
            backgroundColor: "rgba(255, 255, 255, 0.02)",
            borderRadius: "20px",
            border: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <h3
            style={{
              fontSize: "32px",
              fontWeight: "600",
              marginBottom: "20px",
              marginTop: "20px",
              color: "#ffffff",
              textAlign: "center",
            }}
          >
            Key Achievements
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(280px, 100%), 1fr))",
              gap: "30px",
            }}
          >
            {[
              {
                title: "YouthX Unipreneur Award Winner",
                description: "Won at Gitex Global Tech Summit 2022, Dubai for Twinverse project",
                image: "/ach1.jpg"
              },
              {
                title: "ATL Marathon Top 50 Project",
                description: "Smart Water Dispenser Project selected in top 50 projects of India in ATL Marathon 2018",
                image: "/ach2.jpg"
              },
              {
                title: "International Recognition",
                description: "Selected for AIM-Sirius Student Exchange Program, Sochi, Russia, and presented a project to President Putin.",
                image: "/ach3.jpg"
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
                  overflow: "hidden",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.05)";
                  e.currentTarget.style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.03)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "180px",
                    marginBottom: "16px",
                    borderRadius: "8px",
                    overflow: "hidden",
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                  }}
                >
                  <img
                    src={achievement.image}
                    alt={achievement.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
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
            marginTop: "40px",
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
        </div>
      </div>
    </div>
  );
}
