'use client';

import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls, Center, Environment } from '@react-three/drei';
import { Suspense, useEffect } from 'react';

function Model({ color }: { color?: string }) {
  const { scene, materials } = useGLTF('/models/headphone.glb'); 

  useEffect(() => {
    if (!color) return;
    if (materials && (materials.white as any)) {
      (materials.white as any).color.set(color);
    }
  }, [materials, color]);

  return (
    <Center>
      <group scale={3.2}>
        <primitive object={scene} />
      </group>
    </Center>
  );
}

export default function CanvasViewer({ color }: { color?: string }) {
  return (
    <div className="w-full h-full relative flex items-center justify-center">
      <Canvas camera={{ position: [0, 0, 2.2], fov: 45 }} className="w-full h-full">
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} />
        
        <Suspense fallback={null}>
          <Model color={color} />
          {/* HDR Environment preset for studio lighting & metallic shines */}
          <Environment preset="city" />
          
          <OrbitControls 
            enableZoom={false} 
            enablePan={false} 
            autoRotate={false} 
            minPolarAngle={Math.PI / 2} 
            maxPolarAngle={Math.PI / 2} 
          />
        </Suspense>
      </Canvas>
    </div>
  );
}

useGLTF.preload('/models/headphone.glb');