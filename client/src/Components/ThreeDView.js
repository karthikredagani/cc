import React, { useState, useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { useParams, Link } from 'react-router-dom';
import { QRCodeSVG } from 'qrcode.react'; // Import QRCodeSVG component
import './ThreeDView.css';

// Model component to load the 3D model
const Model = ({ glbFilePath }) => {
  const { scene } = useGLTF(glbFilePath);
  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      ref.current.scale.set(1.4, 1.4, 1.4);
      ref.current.position.set(0, 0, 0);
    }
  }, [scene]);

  return <primitive object={scene} ref={ref} />;
};

const ThreeDView = () => {
  const { productId } = useParams();
  const products = [
    { id: '1', name: 'Modern Sofa', glbFile: '/images/base1.glb', usdzFile: '/images/base1.usdz' },
    { id: '2', name: 'Modern Sofa', glbFile: '/images/base2.glb', usdzFile: '/images/base2.usdz' },
    { id: '3', name: 'Modern Sofa', glbFile: '/images/base3.glb', usdzFile: '/images/base3.usdz' },
    { id: '4', name: 'Modern Sofa', glbFile: '/images/base4.glb', usdzFile: '/images/base4.usdz' },
    { id: '5', name: 'Modern Sofa', glbFile: '/images/base5.glb', usdzFile: '/images/base5.usdz' },
    { id: '6', name: 'Modern Sofa', glbFile: '/images/base6.glb', usdzFile: '/images/base6.usdz' },
    { id: '7', name: 'Modern Sofa', glbFile: '/images/base7.glb', usdzFile: '/images/base7.usdz' },
    { id: '8', name: 'Modern Sofa', glbFile: '/images/base8.glb', usdzFile: '/images/base8.usdz' },
    { id: '9', name: 'Modern Sofa', glbFile: '/images/base9.glb', usdzFile: '/images/base9.usdz' },
    { id: '10', name: 'Modern Sofa', glbFile: '/images/base10.glb', usdzFile: '/images/base10.usdz' },
    { id: '11', name: 'Modern Sofa', glbFile: '/images/base11.glb', usdzFile: '/images/base11.usdz' },
    { id: '12', name: 'Modern Sofa', glbFile: '/images/base12.glb', usdzFile: '/images/base12.usdz' },
    { id: '13', name: 'Modern Sofa', glbFile: '/images/base13.glb', usdzFile: '/images/base13.usdz' },
    { id: '14', name: 'Modern Sofa', glbFile: '/images/base14.glb', usdzFile: '/images/base14.usdz' },
    { id: '15', name: 'Modern Sofa', glbFile: '/images/base15.glb', usdzFile: '/images/base15.usdz' },
    { id: '16', name: 'Modern Sofa', glbFile: '/images/base16.glb', usdzFile: '/images/base16.usdz' },
  ];

  const product = products.find((p) => p.id === productId);
  const [cameraPosition] = useState([0, 1, 5]);
  const [showQRCode, setShowQRCode] = useState(false);
  const [qrCodeValue, setQRCodeValue] = useState('');

  if (!product) {
    return <p>Product not found.</p>;
  }

  const startAR = () => {
    const ipAddress = '192.168.0.124'; // Your local IP address for testing
    const port = '3000'; // Port number of your server

    // Construct the AR URL for this product
    const qrCodeLink = `http://${ipAddress}:${port}/ar/${productId}`;

    setQRCodeValue(qrCodeLink); // Set the QR code URL value
    setShowQRCode(true); // Show the QR code container
  };

  return (
    <div className="threeD-view-page">
      <h2 className="de">3D View</h2>
      {product.glbFile ? (
        <div className="threeD-viewer-container">
          <Canvas
            style={{ width: '100%', height: '400px' }}
            camera={{ position: cameraPosition, fov: 35 }}
          >
            <ambientLight intensity={2} />
            <directionalLight position={[4, 4, 4]} intensity={0.5} />
            <OrbitControls
              enableZoom={true}
              minDistance={1}
              maxDistance={10}
              enablePan={true}
            />
            <Model glbFilePath={product.glbFile} />
          </Canvas>
        </div>
      ) : (
        <p>No 3D view available for this product.</p>
      )}

      {/* Button group container */}
      <div className="button-group">
        <Link to={`/product/${productId}`}>
          <button className="back">Back to Product</button>
        </Link>
        <button className="ar-button" onClick={startAR}>View in AR</button>
      </div>

      {showQRCode && (
        <div className="qr-code-container">
          <h3>Scan this QR code to view in AR:</h3>
          <QRCodeSVG value={qrCodeValue} size={256} />
        </div>
      )}
    </div>
  );
};

export default ThreeDView;
