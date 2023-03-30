import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const HelloWorld = () => {

  const scenrRef = useRef(new THREE.Scene());
  const cameraRef= useRef(new THREE.PerspectiveCamera(75, 1/1, 1, 1000));
  const rendererRef = useRef(new THREE.WebGLRenderer());
  const cubeRef = useRef(null);

  const animate = () =>{
    requestAnimationFrame(animate);
    rendererRef.current.render(scenrRef.current, cameraRef.current);
    cubeRef.current.rotation.x += 0.01;
    cubeRef.current.rotation.y += 0.01;
  }

  useEffect(() => {

    rendererRef.current.setSize(window.innerWidth, window.innerHeight);
    document.querySelector('#boxGeometry').appendChild(rendererRef.current.domElement);


    const geometry = new THREE.BoxGeometry(1,1,1);
    const material = new THREE.MeshBasicMaterial({color: 0x00ff00});
    cubeRef.current = new THREE.Mesh(geometry, material);

    scenrRef.current.add(cubeRef.current);
    cameraRef.current.position.z = 5;

    animate();
    
  }, []);

  return <div id="boxGeometry">888</div>;
};

export default HelloWorld;
