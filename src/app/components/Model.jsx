import React from 'react';
import { useGLTF } from '@react-three/drei';

function Model() {
  const gltf = useGLTF('/assets/ultra_boy.glb'); // Correct file path
  return (
    <primitive
      object={gltf.scene}
      scale={[2, 2, 2]} // Adjust the scale values here
      position={[0, 0, 4]}    // Optional: Adjust position if needed
      rotation={[2, Math.PI / 2, 1]} // Optional: Adjust rotation
    />
  );
}

export default Model;
