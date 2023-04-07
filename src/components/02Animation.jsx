import { useRef, useEffect } from 'react';
import {
  Scene,
  PerspectiveCamera,
  WebGL1Renderer,
  Mesh,
  BoxGeometry,
  MeshBasicMaterial,
  AxesHelper,
  Clock,
} from 'three';

import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const Animation = () => {
  const renderedRef = useRef(false);

  const sceneRef = useRef(new Scene());
  const cameraRef = useRef(
    new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000)
  );
  const redererRef = useRef(new WebGL1Renderer());
  const cubeRef = useRef(null);
  const clock = useRef(new Clock());
  const rorationClock = useRef(new Clock());

  const move = () => {
    const delta = clock.current.getDelta();
    cubeRef.current.position.x += delta;
    if (cubeRef.current.position.x >= 4) {
      cubeRef.current.position.x = 0;
    }
  };

  const rotation = () => {
    const delta = rorationClock.current.getDelta();
    cubeRef.current.rotation.x += delta * Math.PI;
  };

  const animate = () => {
    move();
    rotation();
    redererRef.current.render(sceneRef.current, cameraRef.current);
    requestAnimationFrame(animate);
  };

  useEffect(() => {
    if (!renderedRef.current) {
      renderedRef.current = true;

      // 初始化立方体 并添加到场景
      const geometry = new BoxGeometry(1, 1, 1);
      const materal = new MeshBasicMaterial({ color: '#ffffa0' });
      cubeRef.current = new Mesh(geometry, materal);
      sceneRef.current.add(cubeRef.current);

      // 设置摄像机位置
      cameraRef.current.position.z = 5;

      // 初始化坐标轴并添加到场景中
      const axesHelper = new AxesHelper(5);
      sceneRef.current.add(axesHelper);

      // 设置渲染器尺寸并将渲染器添加到Dom中
      redererRef.current.setSize(window.innerWidth, window.innerHeight);
      document
        .querySelector('#animation')
        .appendChild(redererRef.current.domElement);

      // 添加轨道控制器，
      new OrbitControls(cameraRef.current, redererRef.current.domElement);

      // 动起来
      animate();
    }
  }, []);

  return <div id="animation"></div>;
};

export default Animation;
