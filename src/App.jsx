import { sRGBEncoding, Vector3 } from 'three'
import { Suspense, useEffect, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Reflector, Text, useTexture, useGLTF } from '@react-three/drei'

export default function App() {
  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative' }}>
      <Canvas concurrent="true" gl={{ alpha: false }}  camera={{ position: [0, 3, 100], fov: 14, far: 200 }}>
        <color attach="background" args={['black']} />
        <fog attach="fog" args={['black', 28, 33]} />
        <Suspense fallback={null}>
          <group position={[0, -1, 0]}>
            {/* <Carla rotation={[0, Math.PI - 0.4, 0]} position={[-1.2, 0, 0.6]} scale={[0.26, 0.26, 0.26]} /> */}
            <VideoText position={[0, 1.3, -2]} />
            <Ground />
          </group>
          <ambientLight intensity={0.5} />
          <spotLight position={[0, 10, 0]} intensity={0.3} />
          <directionalLight position={[-50, 0, -40]} intensity={0.7} />
          <Intro />
        </Suspense>
      </Canvas>
    </div>
  )
}

function Carla(props) {
  const { scene } = useGLTF('/carla-draco.glb')
  return <primitive object={scene} {...props} />
}

function VideoText(props) {
  const [video] = useState(() => Object.assign(document.createElement('video'), { src: '/drei.mp4', crossOrigin: 'Anonymous', loop: true, muted: true }))
  useEffect(() => void video.play(), [video])
  return (
    <Text font="/Inter-Bold.woff" fontSize={2} letterSpacing={-0.08} {...props}>
      biswanath
      <meshBasicMaterial toneMapped={false}>
        <videoTexture attach="map" args={[video]} encoding={sRGBEncoding} />
      </meshBasicMaterial>
    </Text>
  )
}

function Ground() {
  const [floor, normal] = useTexture(['/SurfaceImperfections003_1K_var1.jpg', '/SurfaceImperfections003_1K_Normal.jpg'])
  return (
    <Reflector blur={[400, 100]} resolution={512} args={[500, 500]} mirror={0.5} mixBlur={8} mixStrength={1.5} rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
      {(Material, props) => <Material color="#a0a0a0" metalness={0.4} roughnessMap={floor} normalMap={normal} normalScale={[2, 2]} {...props} />}
    </Reflector>
  )
}

function Intro() {
  const [vec] = useState(() => new Vector3())
  return useFrame((state) => {
    const width = window.innerWidth
    const height = window.innerHeight
    
    // The 3D text "biswanath" - tweaked to match actual rendered width
    const textWidth = 11.5
    
    // Target: text should fill this ratio of screen width
    const targetScreenRatio = 1
    
    // Camera FOV is 14 degrees
    const fovRad = (14 * Math.PI) / 180
    
    // For perspective camera: visibleWidth = 2 * distance * tan(fov/2) * aspectRatio
    // Solving for distance: distance = textWidth / (targetScreenRatio * 2 * tan(fov/2) * aspectRatio)
    
    const aspectRatio = width / height
    const baseZoom = textWidth / (targetScreenRatio * 2 * Math.tan(fovRad / 2) * aspectRatio)
    
    // Clamp to reasonable values
    const finalZoom = Math.max(15, Math.min(baseZoom, 120))
    
    // Text is at z=-2, so distance from camera to text is (finalZoom - (-2)) = finalZoom + 2
    // Set fog to start just before text and end after it
    const distanceToText = finalZoom + 2
    state.scene.fog.near = distanceToText - 5
    state.scene.fog.far = distanceToText + 10
    
    // Text is at: group y=-1, VideoText y=1.3, z=-2 → world position (0, 0.3, -2)
    const textY = 0.3
    const textZ = -2
    
    // On narrow screens we're far away, so camera should be near text level
    // On wide screens we're closer, so can be higher for a nice angle with reflection
    // Use aspect ratio to blend: portrait (narrow) = near text level, landscape = higher
    const maxCameraHeight = aspectRatio < 1 ? 0.8 : 3.0
    const cameraY = textY + maxCameraHeight
    
    // Reduce mouse parallax on smaller screens
    const isMobile = width < 768
    const mouseMultiplier = isMobile ? 0.2 : 3
    const yMultiplier = isMobile ? 0.05 : 1
    
    state.camera.position.lerp(vec.set(state.mouse.x * mouseMultiplier, cameraY + state.mouse.y * yMultiplier, finalZoom), 0.05)
    // Look at the text position
    state.camera.lookAt(0, textY, textZ)
  })
}
