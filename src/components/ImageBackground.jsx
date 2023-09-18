import React from 'react';
import { Canvas } from '@react-three/fiber';
import { MeshDistortMaterial, OrbitControls, Sphere } from '@react-three/drei';

export default function ImageBackground() {
   return (
      <div>
         <Canvas>
            <OrbitControls enableZoom={false} enableRotate={false} />
            <ambientLight intensity={1} />
            <directionalLight position={[0, 0, 0]} />
            <Sphere args={[1, 100, 200]} scale={2}>
               <MeshDistortMaterial
                  color="#3d1c56"
                  attach="material"
                  distort={0.5}
                  speed={2}
               />
            </Sphere>
         </Canvas>
      </div>
   );
}
