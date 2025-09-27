import React, { Suspense, useRef, useEffect } from 'react';
// FIX: Import `extend` from @react-three/fiber to explicitly make THREE.js elements available as JSX components.
import { Canvas, useFrame, extend } from '@react-three/fiber';
import { OrthographicCamera, Box, Plane, Icosahedron } from '@react-three/drei';
import * as THREE from 'three';

// FIX: Explicitly extend R3F with all of THREE to fix TypeScript errors where JSX intrinsics are not recognized.
// This is a robust workaround for project setups where automatic type augmentation for @react-three/fiber isn't working.
extend(THREE);

const CodeWindow = ({ position, rotation, size = [4, 5.5], animationOffset = 0 } : { position: [number, number, number], rotation: [number, number, number], size?: [number, number], animationOffset?: number }) => {
  const groupRef = useRef<THREE.Group>(null!);

  useEffect(() => {
    if (groupRef.current) {
      groupRef.current.position.set(...position);
      groupRef.current.rotation.set(...rotation);
    }
  }, []); // Run once on mount

  useFrame(({ clock }) => {
    if (groupRef.current) {
      // Subtle bobbing animation
      groupRef.current.position.y = position[1] + Math.sin(clock.getElapsedTime() * 0.7 + animationOffset) * 0.25;
    }
  });
  
  return (
    <group ref={groupRef}>
      <Plane args={size}>
        <meshStandardMaterial color="#111827" side={THREE.DoubleSide} transparent opacity={0.7} metalness={0.2} roughness={0.7} />
      </Plane>
      <Box args={[size[0], 0.3, 0.05]} position={[0, size[1] / 2 - 0.15, 0.01]}>
         <meshStandardMaterial color="#374151" />
      </Box>
       <Box args={[0.1, 0.1, 0.1]} position={[-size[0]/2 + 0.2, size[1]/2 - 0.15, 0.02]}><meshBasicMaterial color="#ef4444" /></Box>
       <Box args={[0.1, 0.1, 0.1]} position={[-size[0]/2 + 0.4, size[1]/2 - 0.15, 0.02]}><meshBasicMaterial color="#f59e0b" /></Box>
       <Box args={[0.1, 0.1, 0.1]} position={[-size[0]/2 + 0.6, size[1]/2 - 0.15, 0.02]}><meshBasicMaterial color="#10b981" /></Box>
    </group>
  );
};

const Monitor = () => {
  return (
    <group position={[0, -1, 0]}>
      {/* Screen */}
      <Box args={[8, 5, 0.5]}>
        <meshStandardMaterial color="#1f2937" metalness={0.1} roughness={0.8} />
      </Box>
      {/* Screen Content */}
      <Plane args={[7.8, 4.8]} position={[0, 0, 0.26]}>
        <meshStandardMaterial color="#000" />
      </Plane>
      {/* Logo on screen */}
      <Icosahedron args={[0.7, 0]} position={[0, 0.5, 0.3]}>
        <meshStandardMaterial color="#9333ea" roughness={0.1} metalness={0.5} emissive="#4c1d95" emissiveIntensity={0.5} />
      </Icosahedron>
      {/* Stand */}
      <Box args={[1, 2, 0.5]} position={[0, -3.5, 0]}>
        <meshStandardMaterial color="#374151" />
      </Box>
      {/* Base */}
      <Box args={[3, 0.5, 2]} position={[0, -4.75, 0]}>
        <meshStandardMaterial color="#374151" />
      </Box>
    </group>
  );
};

const AnimatedIcosahedron = ({ position }: { position: [number, number, number] }) => {
  const meshRef = useRef<THREE.Mesh>(null!);

  useEffect(() => {
    if (meshRef.current) {
      meshRef.current.position.set(...position);
    }
  }, []); // Run once

  useFrame(({ clock }, delta) => {
    if (meshRef.current) {
      // Gentle rotation
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
      // Gentle bobbing
      meshRef.current.position.y = position[1] + Math.sin(clock.getElapsedTime() * 0.9) * 0.3;
    }
  });

  return (
    <Icosahedron ref={meshRef} args={[1, 0]}>
      <meshStandardMaterial color="#9333ea" roughness={0.2} metalness={0.8} />
    </Icosahedron>
  );
};


const Scene = () => {
  const groupRef = useRef<THREE.Group>(null!);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, state.mouse.x * 0.1, 0.05);
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -state.mouse.y * 0.1, 0.05);
    }
  });

  return (
    <group ref={groupRef} position={[2,0,0]}>
      <Monitor />
      <CodeWindow position={[-3, 2, -2]} rotation={[0, 0.5, 0]} animationOffset={0} />
      <CodeWindow position={[5, 1, -4]} rotation={[0, -0.4, 0]} animationOffset={1.5} />
      <AnimatedIcosahedron position={[-5, -3, 2]} />
    </group>
  );
};

const HeroCanvas: React.FC = () => {
  return (
    <Canvas>
      <OrthographicCamera makeDefault zoom={45} position={[0, 0, 100]} />
      <ambientLight intensity={1.5} />
      <directionalLight position={[10, 10, 5]} intensity={2} />
      <directionalLight position={[-10, -5, -10]} color="#00f5c3" intensity={0.5} />
      <pointLight position={[0,0,5]} color="#9333ea" intensity={2} distance={15} />
      
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
  );
};

export default HeroCanvas;
