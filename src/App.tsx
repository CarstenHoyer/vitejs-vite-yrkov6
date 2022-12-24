import { useState } from 'react';
import './App.css';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';
import { Model as Carl } from './Carl';

function App() {
  return (
    <Canvas shadows style={{ background: '#222' }}>
      <OrbitControls makeDefault />
      <Stage shadows="accumulative" intensity={0.1}>
        <Carl />
      </Stage>
    </Canvas>
  );
}

export default App;
