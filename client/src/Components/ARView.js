import React from 'react';
import { useParams, Link } from 'react-router-dom';
import '@google/model-viewer';
import './ARView.css';

const ARView = () => {
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

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <div className="ar-view-page">
      <h2>View {product.name} in AR</h2>

      {/* Model Viewer for AR */}
      <div className="model-viewer-container">
        <model-viewer
          src={product.glbFile}
          ios-src={product.usdzFile}
          alt={`3D model of ${product.name}`}
          ar
          ar-modes="scene-viewer webxr quick-look"
          environment-image="neutral"
          auto-rotate
          camera-controls
          style={{ width: '100%', height: '80vh' }}
          loading="eager"
        ></model-viewer>
      </div>

      {/* Back button */}
      <div className="ar-buttons">
        <Link to={`/product/${productId}`}>
          <button className="back-button">Back to Product</button>
        </Link>
      </div>
    </div>
  );
};

export default ARView;