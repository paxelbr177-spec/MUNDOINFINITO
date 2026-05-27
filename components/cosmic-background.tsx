"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export function CosmicBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 2000);
    camera.position.z = 60;

    // Stars
    const starsCount = window.innerWidth < 768 ? 1200 : 2200;
    const starGeo = new THREE.BufferGeometry();
    const starPositions = new Float32Array(starsCount * 3);
    const starColors = new Float32Array(starsCount * 3);
    const palette = [
      new THREE.Color("#ffffff"),
      new THREE.Color("#a78bfa"),
      new THREE.Color("#f0abfc"),
      new THREE.Color("#fda4af"),
      new THREE.Color("#93c5fd"),
    ];
    for (let i = 0; i < starsCount; i++) {
      starPositions[i * 3] = (Math.random() - 0.5) * 800;
      starPositions[i * 3 + 1] = (Math.random() - 0.5) * 800;
      starPositions[i * 3 + 2] = (Math.random() - 0.5) * 600 - 100;
      const c = palette[Math.floor(Math.random() * palette.length)];
      starColors[i * 3] = c.r;
      starColors[i * 3 + 1] = c.g;
      starColors[i * 3 + 2] = c.b;
    }
    starGeo.setAttribute("position", new THREE.BufferAttribute(starPositions, 3));
    starGeo.setAttribute("color", new THREE.BufferAttribute(starColors, 3));
    const starMat = new THREE.PointsMaterial({
      size: 1.4,
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
      sizeAttenuation: true,
    });
    const stars = new THREE.Points(starGeo, starMat);
    scene.add(stars);

    // Central planet (icosahedron wireframe)
    const planetGeo = new THREE.IcosahedronGeometry(8, 1);
    const planetMat = new THREE.MeshBasicMaterial({
      color: 0x7c3aed,
      wireframe: true,
      transparent: true,
      opacity: 0.55,
    });
    const planet = new THREE.Mesh(planetGeo, planetMat);
    scene.add(planet);

    // Ring
    const ringGeo = new THREE.RingGeometry(12, 12.4, 80);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xf43f5e,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.35,
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 2.5;
    scene.add(ring);

    // Orbiter
    const orbiterGeo = new THREE.IcosahedronGeometry(1.6, 0);
    const orbiterMat = new THREE.MeshBasicMaterial({ color: 0xfda4af, wireframe: true });
    const orbiter = new THREE.Mesh(orbiterGeo, orbiterMat);
    scene.add(orbiter);

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onResize);

    const mouse = { x: 0, y: 0, tx: 0, ty: 0 };
    const onMouse = (e: MouseEvent) => {
      mouse.tx = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.ty = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMouse, { passive: true });

    let scrollY = 0;
    const onScroll = () => {
      scrollY = window.scrollY || window.pageYOffset;
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    const clock = new THREE.Clock();
    let rafId = 0;
    const animate = () => {
      const t = clock.getElapsedTime();
      mouse.x += (mouse.tx - mouse.x) * 0.05;
      mouse.y += (mouse.ty - mouse.y) * 0.05;
      stars.rotation.y += 0.0003;
      stars.rotation.x += 0.00015;
      planet.rotation.x += 0.002;
      planet.rotation.y += 0.003;
      ring.rotation.z += 0.001;
      orbiter.position.x = Math.cos(t * 0.6) * 14;
      orbiter.position.z = Math.sin(t * 0.6) * 14;
      orbiter.position.y = Math.sin(t * 0.4) * 3;
      orbiter.rotation.x += 0.02;
      orbiter.rotation.y += 0.03;
      const zoom = Math.min(scrollY / 1500, 1);
      camera.position.x += (mouse.x * 8 - camera.position.x) * 0.02;
      camera.position.y += (-mouse.y * 6 - camera.position.y) * 0.02;
      camera.position.z = 60 - zoom * 18;
      camera.lookAt(0, 0, 0);
      renderer.render(scene, camera);
      rafId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("scroll", onScroll);
      starGeo.dispose();
      starMat.dispose();
      planetGeo.dispose();
      planetMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      orbiterGeo.dispose();
      orbiterMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="fixed inset-0 -z-20 h-screen w-screen pointer-events-none"
      />
      <div className="bg-nebula" aria-hidden="true" />
    </>
  );
}
