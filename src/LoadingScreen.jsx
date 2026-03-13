import { useState, useEffect } from 'react';
import { useProgress } from '@react-three/drei';

export default function LoadingScreen() {
  const { progress, active, loaded, total } = useProgress();
  const [isLoading, setIsLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(true);
  const [displayProgress, setDisplayProgress] = useState(0);

  // Smooth out the progress jump and add fake initial progress
  useEffect(() => {
    if (progress === 0 && displayProgress === 0) {
      // Fake initial progress to give the illusion of immediate loading
      const initialDelay = setTimeout(() => {
        setDisplayProgress(23); // Smoothly animate to 23% and pause there
      }, 150);
      return () => clearTimeout(initialDelay);
    } else if (progress >= 100) {
      setDisplayProgress(100);
    } else if (progress > displayProgress) {
      // Only update if actual progress overtakes our fake display progress
      setDisplayProgress(progress);
    }
  }, [progress, displayProgress]);

  // Handle unmounting smoothly - with foolproof fallback
  useEffect(() => {
    // Condition 1: Normal React Three Fiber completion
    // Condition 2: Failsafe if it's no longer active but has loaded the queue
    const isDone = progress >= 100 || (total > 0 && loaded >= total && !active);

    if (isDone) {
      setDisplayProgress(100);
      const hideTimeout = setTimeout(() => {
        setIsLoading(false);
      }, 600);
      return () => clearTimeout(hideTimeout);
    }
  }, [progress, active, loaded, total]);

  // Ultimate Fallback: If the 3D assets load from cache instantly or focus is lost,
  // the hook might not update. This ensures the loader clears after a maximum time.
  useEffect(() => {
    const fallbackTimeout = setTimeout(() => {
      // Only force end if still loading after 4.5 seconds
      if (isLoading) {
        setDisplayProgress(100);
        setTimeout(() => setIsLoading(false), 500);
      }
    }, 4500);
    return () => clearTimeout(fallbackTimeout);
  }, [isLoading]);

  useEffect(() => {
    if (!isLoading) {
      // Wait for opacity transition to finish before removing from DOM
      const unmountTimeout = setTimeout(() => {
        setIsMounted(false);
        // FORCE RENDER WAKEUP: Dispatch a resize event to the window.
        // This fixes a known React Three Fiber bug where the canvas pauses
        // or miscalculates dimensions until a physical browser interaction occurs.
        window.dispatchEvent(new Event('resize'));
      }, 800);
      return () => clearTimeout(unmountTimeout);
    }
  }, [isLoading]);

  useEffect(() => {
    // Aggressive scroll lock
    if (isLoading) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      // Force scroll to top instantly
      window.scrollTo(0, 0);
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      // Only hide horizontal scroll globally as set in CSS
      document.documentElement.style.overflowX = 'hidden';
      document.body.style.overflowX = 'hidden';
    }

    // Cleanup
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      document.documentElement.style.overflowX = 'hidden';
      document.body.style.overflowX = 'hidden';
    };
  }, [isLoading]);

  if (!isMounted) return null;

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
        backgroundColor: '#000000', // Matches the 3D Canvas pure black exactly
        zIndex: 9999,
        transition: 'opacity 0.8s cubic-bezier(0.65, 0, 0.35, 1)',
        opacity: isLoading ? 1 : 0,
        pointerEvents: isLoading ? 'all' : 'none',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
        <h1
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: 'clamp(32px, 5vw, 48px)', // Responsive size
            fontWeight: '600',
            letterSpacing: '0.05em',
            margin: 0,
            color: '#ffffff', // Bright white instead of dim gradient
            animation: 'pulseGlow 2s ease-in-out infinite alternate',
          }}
        >
          biswanath
        </h1>

        {/* Sleek, thin progress track */}
        <div
          style={{
            width: '120px',
            height: '1px',
            backgroundColor: 'rgba(255,255,255,0.1)',
            position: 'relative',
            overflow: 'hidden',
            borderRadius: '2px'
          }}
        >
          {/* Active progress line */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              height: '100%',
              width: `${displayProgress}%`,
              backgroundColor: '#ffffff',
              transition: 'width 0.4s cubic-bezier(0.65, 0, 0.35, 1)', // Smooth CSS width transition
              boxShadow: '0 0 10px rgba(255,255,255,0.5)' // Subtle glow on strictly the active bar
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes pulseGlow {
          0% { filter: drop-shadow(0 0 4px rgba(255,255,255,0.1)); }
          100% { filter: drop-shadow(0 0 12px rgba(255,255,255,0.3)); }
        }
      `}</style>
    </div>
  );
}
