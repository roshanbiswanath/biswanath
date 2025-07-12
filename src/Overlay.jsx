import { Footer } from "@pmndrs/branding";

export default function Overlay() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about-section');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100vh', pointerEvents: 'none', zIndex: 10 }}>
      {/* Navigation Menu */}
      <div
        style={{
          position: "absolute",
          top: 40,
          right: 40,
          pointerEvents: 'auto',
        }}
      >
        <button
          onClick={scrollToAbout}
          style={{
            padding: "12px 24px",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            color: "#ffffff",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "14px",
            fontWeight: "500",
            backdropFilter: "blur(10px)",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
            e.target.style.borderColor = "rgba(255, 255, 255, 0.4)";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
            e.target.style.borderColor = "rgba(255, 255, 255, 0.2)";
          }}
        >
          About
        </button>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: 30,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          color: "rgba(255, 255, 255, 0.7)",
          fontSize: "12px",
          animation: "bounce 2s infinite",
          pointerEvents: 'auto',
        }}
      >
        <div style={{ marginBottom: "8px" }}>Scroll down to learn more</div>
        <div style={{ fontSize: "16px" }}>↓</div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "20%",
          pointerEvents: 'auto',
        }}
      >
        <a
          href="https://aquatwin.vercel.app"
          style={{
            position: "absolute",
            bottom: 40,
            left: 40,
            fontSize: "13px",
            textDecoration: "none",
            color: "#efefef",
          }}
        >
          Twinverse
          <br />
          build beyond reality
        </a>
        <div
          style={{
            position: "absolute",
            bottom: 40,
            right: 40,
            fontSize: "13px",
            color: "#efefef",
          }}
        >
          blog
        </div>
      </div>
    </div>
  );
}
