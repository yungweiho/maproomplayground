import * as React from "react";
import * as R from "ramda";
import * as THREE from "three";
import CameraControls from "camera-controls";
import { gsap } from "gsap";
import styles from "./Panorama.module.scss";
import CircelArrow from "../materials/CircelArrow";
import { workData } from "../utils/constans";

CameraControls.install({ THREE: THREE });

const Panorama = React.memo(
  ({ panoramaOffset, setPanoramaOffset, setPanoramaOpen, workIndex }) => {
    let renderer,
      scene,
      camera,
      mouse,
      raycaster,
      intersects,
      clock,
      target,
      cameraControls;

    const panoList = workData.find(
      (item) => item.id === workIndex
    ).panorama_list;

    console.log(panoList);

    const init = () => {
      renderer = new THREE.WebGLRenderer({ alpha: true });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth - 40, window.innerHeight - 120);
      renderer.setClearColor(0x000000, 1);

      document.getElementById("panorama").appendChild(renderer.domElement);

      clock = new THREE.Clock();

      scene = new THREE.Scene();

      // 相機
      camera = new THREE.PerspectiveCamera(
        50,
        (window.innerWidth - 40) / (window.innerHeight - 120),
        1,
        1000000
      );

      // consumerData.areaId = "memories";
      // consumerData.panoramaId = 12;

      // const center_index = consumerData.panoramaId;

      // const center_sphere = consumerData.picData.find(
      //   (item) => Number(item?.id) === Number(center_index)
      // );

      // const center = {
      //   x: center_sphere.origin.x,
      //   y: center_sphere.origin.y,
      //   z: center_sphere.origin.z,
      // };

      camera.position.set(0, 0, 0);
      // arrowsHelper(center.x, center.y, center.z, scene, 0.1, -0.5, 1);

      // 控制器
      cameraControls = new CameraControls(camera, renderer.domElement);
      cameraControls.setLookAt(0.01, 0, 0, 0, 0, 0, false);
      cameraControls.polarRotateSpeed = -0.3;
      cameraControls.azimuthRotateSpeed = -0.3;
      cameraControls.dollySpeed = 0.5;
      cameraControls.distance = 1.5;
      cameraControls.maxDistance = 2;
      cameraControls.minDistance = 0;

      // // 初始全景圖
      // const firstPanorama = consumerData.picData.find(
      //   (item) => Number(item.id) === Number(center_index)
      // );

      // // 初始旋轉
      // cameraControls.rotateTo(
      //   firstPanorama.rotate.h,
      //   firstPanorama.rotate.v,
      //   false
      // );

      var loader_1 = new THREE.TextureLoader().load(
        panoList[0].file,
        (texture) => {
          var material = new THREE.MeshBasicMaterial({
            map: texture,
            transparent: true,
            // depthTest: false,
          });

          var geometry = new THREE.SphereBufferGeometry(10, 100, 100);
          geometry.scale(-1, 1, 1);

          var sphere = new THREE.Mesh(geometry, material);
          sphere.position.set(0, 0, 0);
          sphere.userData = {
            id: 1,
          };
          sphere.renderOrder = 3;
          scene.add(sphere);
        }
      );

      var loader_2 = new THREE.TextureLoader().load(
        panoList[1].file,
        (texture) => {
          var material = new THREE.MeshBasicMaterial({
            map: texture,
            transparent: true,
            // depthTest: false,
          });

          var geometry = new THREE.SphereBufferGeometry(10, 100, 100);
          geometry.scale(-1, 1, 1);

          var sphere = new THREE.Mesh(geometry, material);
          sphere.position.set(0, 0, 0);
          sphere.userData = {
            id: 2,
          };
          sphere.renderOrder = 2;

          scene.add(sphere);
        }
      );

      var loader_3 = new THREE.TextureLoader().load(
        panoList[2].file,
        (texture) => {
          var material = new THREE.MeshBasicMaterial({
            map: texture,
            transparent: true,
            // depthTest: false,
          });

          var geometry = new THREE.SphereBufferGeometry(10, 100, 100);
          geometry.scale(-1, 1, 1);

          var sphere = new THREE.Mesh(geometry, material);
          sphere.position.set(0, 0, 0);
          sphere.userData = {
            id: 3,
          };
          sphere.renderOrder = 1;

          scene.add(sphere);
        }
      );

      // loader.minFilter = THREE.NearestFilter;
      // loader.magFilter = THREE.LinearFilter;

      renderer.render(scene, camera);

      // cameraControls.moveTo(-4.8401, 0, 3.4327, false);

      // 雷射
      raycaster = new THREE.Raycaster();
      mouse = new THREE.Vector2();
      target = new THREE.Vector2();

      animate();
    };

    const animate = () => {
      const delta = clock.getDelta();
      const hasControlsUpdated = cameraControls.update(delta);
      renderer.render(scene, camera);
      requestAnimationFrame(animate);

      if (hasControlsUpdated) {
        renderer.render(scene, camera);
      }
    };

    const onWindowReSize = () => {
      camera.aspect = (window.innerWidth - 40) / (window.innerHeight - 120);
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth - 40, window.innerHeight - 120);
    };

    const changePano = (currPano, middlePano, nextPano) => {
      const tl = gsap.timeline({
        onComplete: () => {
          currPano.renderOrder = 1;
          middlePano.renderOrder = 2;
          nextPano.renderOrder = 3;
          panoramaOffset = Number(nextPano.userData.id);
          currPano.material.opacity = 1;
        },
      });

      middlePano.renderOrder = 1;
      nextPano.renderOrder = 2;

      tl.to(currPano.material, { duration: 0.5, opacity: 0 });
    };

    const onPrevHandle = () => {
      const currPano = scene.children.find(
        (item) => Number(item.userData.id) === panoramaOffset
      );

      if (panoramaOffset === 1) {
        const nextPano = scene.children.find((item) => item.userData.id === 3);
        const middlePano = scene.children.find(
          (item) => item.userData.id === 2
        );
        setPanoramaOffset(3);

        changePano(currPano, middlePano, nextPano);
        return;
      }

      if (panoramaOffset === 2) {
        const nextPano = scene.children.find((item) => item.userData.id === 1);
        const middlePano = scene.children.find(
          (item) => item.userData.id === 3
        );
        setPanoramaOffset(1);

        changePano(currPano, middlePano, nextPano);
        return;
      }

      const nextPano = scene.children.find(
        (item) => item.userData.id === Math.ceil(panoramaOffset - 1)
      );
      const middlePano = scene.children.find(
        (item) => item.userData.id === Math.ceil(panoramaOffset - 2)
      );
      setPanoramaOffset(panoramaOffset - 1);

      changePano(currPano, middlePano, nextPano);
    };

    const onNextHandle = () => {
      const currPano = scene.children.find(
        (item) => Number(item.userData.id) === panoramaOffset
      );

      if (panoramaOffset === 3) {
        const nextPano = scene.children.find((item) => item.userData.id === 1);
        const middlePano = scene.children.find(
          (item) => item.userData.id === 2
        );

        setPanoramaOffset(1);

        changePano(currPano, middlePano, nextPano);
        return;
      }

      if (panoramaOffset === 2) {
        const nextPano = scene.children.find((item) => item.userData.id === 3);
        const middlePano = scene.children.find(
          (item) => item.userData.id === 1
        );

        setPanoramaOffset(3);

        changePano(currPano, middlePano, nextPano);
        return;
      }

      const nextPano = scene.children.find(
        (item) => item.userData.id === Math.ceil(panoramaOffset + 1)
      );
      const middlePano = scene.children.find(
        (item) => item.userData.id === Math.ceil(panoramaOffset + 2)
      );

      setPanoramaOffset(panoramaOffset + 1);

      changePano(currPano, middlePano, nextPano);
    };

    const handleDotClick = (e) => {
      const currPano = scene.children.find(
        (item) => Number(item.userData.id) === panoramaOffset
      );
      const nextPano = scene.children.find(
        (item) => item.userData.id === Number(e.target.dataset.id)
      );

      if (Number(e.target.dataset.id) === 1) {
        const middlePano = scene.children.find(
          (item) => item.userData.id === 2
        );
        changePano(currPano, middlePano, nextPano);
        return;
      }

      if (Number(e.target.dataset.id) === 2) {
        const middlePano = scene.children.find(
          (item) => item.userData.id === 3
        );
        changePano(currPano, middlePano, nextPano);
        return;
      }

      const middlePano = scene.children.find((item) => item.userData.id === 1);
      changePano(currPano, middlePano, nextPano);
    };

    React.useEffect(() => {
      window.addEventListener("resize", onWindowReSize, false);
      document
        .getElementById("pano_prev")
        .addEventListener("mousedown", onPrevHandle, false);

      document
        .getElementById("pano_next")
        .addEventListener("mousedown", onNextHandle, false);

      document
        .getElementById("dot1")
        .addEventListener("mousedown", handleDotClick, false);
      document
        .getElementById("dot2")
        .addEventListener("mousedown", handleDotClick, false);
      document
        .getElementById("dot3")
        .addEventListener("mousedown", handleDotClick, false);

      init();

      // return () => {
      //   window.removeEventListener("resize", onWindowReSize, false);
      //   document
      //     .getElementById("pano_prev")
      //     .removeEventListener("mousedown", onPrevHandle, false);

      //   document
      //     .getElementById("pano_next")
      //     .removeEventListener("mousedown", onNextHandle, false);
      // };
    }, []); // eslint-disable-line

    return (
      <div className={styles.container}>
        <div className={styles.drop} onClick={() => setPanoramaOpen(false)} />
        <div id="panorama" className={styles.panorama_block}>
          <div id="pano_prev" className={styles.prev}>
            <CircelArrow />
          </div>
          <div id="pano_next" className={styles.next}>
            <CircelArrow />
          </div>
        </div>
        <div className={styles.dot_block}>
          {R.range(1, 4).map((item) => (
            <div
              key={item}
              id={`dot${item}`}
              className={styles.dot}
              data-id={item}
              style={{
                backgroundColor: panoramaOffset === item ? "white" : "initial",
              }}
            />
          ))}
        </div>
      </div>
    );
  }
);

export default Panorama;
