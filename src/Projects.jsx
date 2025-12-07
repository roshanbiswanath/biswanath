export default function Projects() {
  const projects = [
    {
      title: "Makaan - Real Estate VR Showcase System",
      description: "An innovative Android + VR-based real estate showcase system where a sales agent controls the customer's VR experience in real time using a tablet. The Android app enables seamless switching between different property scenes (living room, bedroom, balcony), instantly updating inside the VR headset for guided, interactive property walkthroughs.",
      image: "/pro1.png",
      technologies: ["Android", "VR/XR", "Real-time Synchronization", "WebSockets", "Node.js", "Flutter"],
      link: "",
      highlights: [
        "Real-time agent-controlled VR navigation",
        "Android tablet control interface",
        "Multi-scene property demonstrations",
        "Enhanced customer engagement for sales"
      ]
    },
    {
      title: "No-Code AR Experience Builder",
      description: "Developed a no-code AR experience builder that empowers anyone to create professional AR applications without coding. Support for both image tracking and face tracking—users can place 3D objects in a visual 3D environment relative to tracked faces or images, then deploy instantly to receive a shareable URL for their AR experience. Reduced development time by 95%.",
      image: "/pro2.png",
      technologies: ["AR.js", "WebXR", "React", "Three.js", "Computer Vision", "Face Tracking", "Image Tracking"],
      highlights: [
        "Image tracking and face tracking support",
        "Visual 3D object placement interface",
        "Instant URL-based deployment",
        "95% reduction in AR development time"
      ]
    },
    {
      title: "TwinTry - 2D Virtual Try-On",
      description: "A generative AI-powered virtual try-on system built using a fine-tuned diffusion model. Users select a clothing image, upload their photo, and instantly see how they look wearing those clothes. The system features optimized inference achieving results in under 10 seconds—dramatically reduced from minutes using traditional methods. Powered by advanced computer vision and generative AI.",
      image: "/pro3.png",
      technologies: ["PyTorch", "Diffusion Models", "Computer Vision", "Generative AI", "Python", "OpenCV"],
      highlights: [
        "Fine-tuned diffusion model for clothing transfer",
        "Inference time optimized to under 10 seconds",
        "Realistic clothing visualization on user images",
        "Significant improvement over traditional methods"
      ]
    },
    {
      title: "The Unbiased Report",
      description: "An LLM-enabled news aggregation platform that scrapes multiple news sources to provide unbiased news reports while identifying bias in individual sources. The system uses ChromaDB for vector-based clustering to group similar/identical news events across sources. Powered by Gemini Flash 2.5 and Ollama LLMs for bias detection and generating comprehensive, balanced news summaries—bringing transparency to news coverage.",
      image: "/pro4.jpg",
      technologies: ["Python", "ChromaDB", "Vector Database", "Gemini Flash 2.5", "Ollama", "LLM", "Web Scraping", "Natural Language Processing"],
      highlights: [
        "Multi-source news aggregation and scraping",
        "Vector clustering for similar news events",
        "Bias detection across news sources",
        "LLM-powered unbiased report generation"
      ]
    }
  ];

  const scrollToContact = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div
      id="projects-section"
      style={{
        position: "relative",
        width: "100%",
        backgroundColor: "#0a0a0a",
        color: "#ffffff",
        paddingTop: "20px",
        paddingBottom: "60px",
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
        <h2
          style={{
            fontSize: "48px",
            fontWeight: "bold",
            marginBottom: "20px",
            textAlign: "center",
            background: "linear-gradient(135deg, #ffffff, #cccccc)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Featured Projects
        </h2>
        
        <p
          style={{
            fontSize: "18px",
            color: "#cccccc",
            textAlign: "center",
            marginBottom: "60px",
            maxWidth: "700px",
            margin: "0 auto 60px auto",
          }}
        >
          From award-winning VR experiences to cutting-edge ML systems, here's a showcase of my work
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(400px, 100%), 1fr))",
            gap: "30px",
            marginBottom: "60px",
          }}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              style={{
                padding: "30px",
                backgroundColor: "rgba(255, 255, 255, 0.03)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "16px",
                transition: "all 0.3s ease",
                display: "flex",
                flexDirection: "column",
                height: "100%",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.05)";
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.2)";
                e.currentTarget.style.transform = "translateY(-5px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.03)";
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "200px",
                  marginBottom: "20px",
                  borderRadius: "12px",
                  overflow: "hidden",
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
              <h3
                style={{
                  fontSize: "22px",
                  fontWeight: "600",
                  color: "#ffffff",
                  marginBottom: "15px",
                }}
              >
                {project.title}
              </h3>
              
              <p
                style={{
                  fontSize: "15px",
                  color: "#cccccc",
                  lineHeight: "1.6",
                  marginBottom: "20px",
                  flex: "1",
                }}
              >
                {project.description}
              </p>

              <div style={{ marginBottom: "20px" }}>
                <h4
                  style={{
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "#ffffff",
                    marginBottom: "10px",
                  }}
                >
                  Key Highlights:
                </h4>
                <ul
                  style={{
                    margin: 0,
                    paddingLeft: "20px",
                    color: "#b0b0b0",
                    fontSize: "14px",
                  }}
                >
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} style={{ marginBottom: "5px" }}>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "8px",
                  marginBottom: "20px",
                }}
              >
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    style={{
                      padding: "6px 12px",
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                      border: "1px solid rgba(255, 255, 255, 0.15)",
                      borderRadius: "20px",
                      fontSize: "12px",
                      color: "#e0e0e0",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {project.link && (
                <button
                  onClick={() => window.open(project.link, '_blank')}
                  style={{
                    padding: "10px 20px",
                    backgroundColor: "transparent",
                    color: "#ffffff",
                    border: "1px solid rgba(255, 255, 255, 0.3)",
                    borderRadius: "8px",
                    cursor: "pointer",
                    fontSize: "14px",
                    fontWeight: "500",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
                    e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.5)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.3)";
                  }}
                >
                  View Project →
                </button>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div
          style={{
            textAlign: "center",
            padding: "50px 40px",
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
            Interested in Collaborating?
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
            I'm always excited to work on innovative projects that push the boundaries of technology. Let's create something extraordinary together!
          </p>
          <button
            onClick={scrollToContact}
            style={{
              padding: "14px 32px",
              backgroundColor: "#ffffff",
              color: "#000000",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "16px",
              fontWeight: "600",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#f0f0f0";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#ffffff";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
}
