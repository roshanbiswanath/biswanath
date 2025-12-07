import { useState, useEffect } from 'react';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    setHasAnimated(true);

    const handlePageLoad = () => {
      // Hide as soon as the page is fully loaded
      setIsLoading(false);
    };

    if (document.readyState === 'complete') {
      handlePageLoad();
    } else {
      window.addEventListener('load', handlePageLoad);
      return () => window.removeEventListener('load', handlePageLoad);
    }
  }, []);

  if (!isLoading) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0a0a0a',
        color: '#ffffff',
        zIndex: 9999,
        transition: 'opacity 0.3s ease',
        opacity: isLoading ? 1 : 0,
        pointerEvents: isLoading ? 'all' : 'none',
      }}
    >
      <h1
        style={{
          fontSize: '48px',
          fontWeight: 'bold',
          marginBottom: '30px',
          background: 'linear-gradient(135deg, #ffffff, #cccccc)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          position: 'relative',
        }}
      >
        <span
          style={{
            display: 'inline-block',
            animation: hasAnimated ? `revealText 2s ease-out forwards` : 'none',
            width: '100%',
            background: 'linear-gradient(135deg, #ffffff, #cccccc)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          biswanath
        </span>
        <style>{`
          @keyframes revealText {
            0% {
              clip-path: inset(0 100% 0 0);
            }
            100% {
              clip-path: inset(0 0 0 0);
            }
          }
        `}</style>
      </h1>
      
      <p
        style={{
          marginTop: '20px',
          fontSize: '14px',
          color: '#888888',
        }}
      >
        Loading experience...
      </p>
    </div>
  );
}
