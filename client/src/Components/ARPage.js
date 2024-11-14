import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

const Model = ({ glbFilePath }) => {
  const { scene } = useGLTF(glbFilePath);
  return <primitive object={scene} />;
};

const ARPage = () => {
  const { productId } = useParams();
  const products = [
    { id: '1', name: 'Modern Sofa', glbFile: '/images/base1.glb' },
    { id: '2', name: 'Modern Sofa', glbFile: '/images/base2.glb' },
    { id: '3', name: 'Modern Sofa', glbFile: '/images/base3.glb' },
    { id: '4', name: 'Modern Sofa', glbFile: '/images/base4.glb' },
    { id: '5', name: 'Modern Sofa', glbFile: '/images/base5.glb' },
    { id: '6', name: 'Modern Sofa', glbFile: '/images/base6.glb' },
    { id: '7', name: 'Modern Sofa', glbFile: '/images/base7.glb' },
    { id: '8', name: 'Modern Sofa', glbFile: '/images/base8.glb' },
    { id: '9', name: 'Modern Sofa', glbFile: '/images/base9.glb' },
    { id: '10', name: 'Modern Sofa', glbFile: '/images/base10.glb' },
    { id: '11', name: 'Modern Sofa', glbFile: '/images/base11.glb' },
    { id: '12', name: 'Modern Sofa', glbFile: '/images/base12.glb' },
    { id: '13', name: 'Modern Sofa', glbFile: '/images/base13.glb' },
    { id: '14', name: 'Modern Sofa', glbFile: '/images/base14.glb' },
    { id: '15', name: 'Modern Sofa', glbFile: '/images/base15.glb' },
    { id: '16', name: 'Modern Sofa', glbFile: '/images/base16.glb' },
  ];

  const product = products.find((p) => p.id === productId);

  useEffect(() => {
    // Initialize AR logic here (WebXR or A-Frame)
  }, [product]);

  return (
    <div>
      <h1>AR View</h1>
      {product && (
        <Canvas>
          <ambientLight />
          <directionalLight position={[10, 10, 5]} />
          <Model glbFilePath={product.glbFile} />
          <OrbitControls />
        </Canvas>
      )}
    </div>
  );
};

export default ARPage;
