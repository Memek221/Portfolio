import React from 'react';
import { Canvas } from '@react-three/fiber';
import { MeshDistortMaterial, OrbitControls, Sphere } from '@react-three/drei';

export default function ImageBackground({size, scale, height}) {
   return (
      <div className={height}>
         <Canvas>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Sphere args={size} scale={scale}>
               <MeshDistortMaterial
                  color="#4e2d67"
                  attach="material"
                  distort={0.5}
                  speed={2}
               />
            </Sphere>
         </Canvas>
      </div>
   );
}
