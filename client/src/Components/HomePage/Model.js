// Import the necessary dependencies
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

// Define the Model component
const Model = () => {
  const gltf = useLoader(GLTFLoader, '/path/to/your/model.gltf');

  return <primitive object={gltf.scene} />;
};

// Export the Model component
export default Model;
