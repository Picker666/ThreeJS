import { useEffect, useRef } from 'react';
import * as THREE from 'three';

import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const HelloWorld = () => {
  const onceTime = useRef(false);

  const scenrRef = useRef(new THREE.Scene());
  const cameraRef = useRef(
    new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      1,
      1000
    )
  );
  const rendererRef = useRef(new THREE.WebGLRenderer());
  const cubeRef = useRef(null);
  const controlsRef = useRef();
  const axesHelperRef = useRef(new THREE.AxesHelper(5));
  const clockRef = useRef(new THREE.Clock());

  const move = (time) => {
    // const moveLength = ((time / 1000) * 1) % 5;
    // cubeRef.current.position.x = moveLength;

    // const totalTime = clockRef.current.getElapsedTime();
    const deltaTime = clockRef.current.getDelta();
    const moveLength = deltaTime * 1;
    console.log('deltaTime: ', deltaTime);

    cubeRef.current.position.x += moveLength;
    // cubeRef.current.position.y += 0.01;
    // cubeRef.current.position.z += 0.01;
    if (cubeRef.current.position.x >= 5) {
      cubeRef.current.position.set(0, 0, 0);
    }
  };

  const rotation = () => {
    cubeRef.current.rotation.x += 0.01;
    // cubeRef.current.rotation.y += 0.01;
    // cubeRef.current.rotation.z += 0.01;
  };

  const animate = (time) => {
    rendererRef.current.render(scenrRef.current, cameraRef.current);
    move(time);
    // rotation();
    requestAnimationFrame(animate);
  };

  const cube = () => {
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
    cubeRef.current = new THREE.Mesh(geometry, material);

    // cubeRef.current.scale.set(3, 2, 1);
    cubeRef.current.scale.y = 2;

    cubeRef.current.rotation.set(Math.PI / 4, 0, 0, 'ZYX');

    scenrRef.current.add(cubeRef.current);
  };

  const draw = () => {
    rendererRef.current.setSize(window.innerWidth, window.innerHeight);
    document
      .querySelector('#boxGeometry')
      .appendChild(rendererRef.current.domElement);

    cube();

    cameraRef.current.position.z = 10;

    controlsRef.current = new OrbitControls(
      cameraRef.current,
      rendererRef.current.domElement
    );

    scenrRef.current.add(axesHelperRef.current);

    animate();
  };

  useEffect(() => {
    if (!onceTime.current) {
      draw();
      onceTime.current = true;
    }
    console.log(onceTime.current, '====');
  }, []);

  return <div id="boxGeometry">888</div>;
};

export default HelloWorld;
