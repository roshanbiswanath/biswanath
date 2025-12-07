import { Footer } from "@pmndrs/branding";

export default function Overlay() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about-section');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100vh', pointerEvents: 'none', zIndex: 10, overflow: 'hidden' }}>
      {/* Navigation Menu */}
      <div
        className="overlay-nav"
        style={{
          position: "absolute",
          top: "clamp(20px, 5vw, 40px)",
          right: "clamp(20px, 5vw, 40px)",
          pointerEvents: 'auto',
        }}
      >
        <button
          onClick={scrollToAbout}
          aria-label="Learn more about me"
          style={{
            padding: "clamp(8px, 2vw, 12px) clamp(16px, 4vw, 24px)",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            color: "#ffffff",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "clamp(12px, 2vw, 14px)",
            fontWeight: "500",
            backdropFilter: "blur(10px)",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
            e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.4)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
            e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.2)";
          }}
        >
          About
        </button>
      </div>

      {/* Scroll indicator */}
      <div
        className="scroll-indicator"
        style={{
          position: "absolute",
          bottom: "clamp(20px, 5vw, 30px)",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          color: "rgba(255, 255, 255, 0.7)",
          fontSize: "clamp(10px, 2vw, 12px)",
          animation: "bounce 2s infinite",
          pointerEvents: 'auto',
        }}
      >
        <div style={{ marginBottom: "8px" }}>Scroll down to learn more</div>
        <div style={{ fontSize: "clamp(12px, 3vw, 16px)" }}>↓</div>
      </div>

      <div
        className="bottom-links"
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
          aria-label="Visit Twinverse project"
          style={{
            position: "absolute",
            bottom: "clamp(20px, 5vw, 40px)",
            left: "clamp(20px, 5vw, 40px)",
            fontSize: "clamp(11px, 2vw, 13px)",
            textDecoration: "none",
            color: "#efefef",
          }}
        >
          Twinverse
          <br />
          build beyond reality
        </a>
      </div>
    </div>
  );
}
