'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function HeroCanvas() {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    // Scene
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(60, mount.clientWidth / mount.clientHeight, 0.1, 100)
    camera.position.set(0, 0, 5)

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(mount.clientWidth, mount.clientHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x000000, 0)
    mount.appendChild(renderer.domElement)

    // ── PARTICLE SPHERE ──
    const particleCount = 2800
    const positions = new Float32Array(particleCount * 3)
    const colors = new Float32Array(particleCount * 3)
    const sizes = new Float32Array(particleCount)

    const blueColor  = new THREE.Color('#2563EB')
    const dimColor   = new THREE.Color('#1d4ed8')
    const lightColor = new THREE.Color('#38BDF8')
    const whiteColor = new THREE.Color('#f2f2f0')

    for (let i = 0; i < particleCount; i++) {
      // Fibonacci sphere distribution
      const phi = Math.acos(1 - (2 * (i + 0.5)) / particleCount)
      const theta = Math.PI * (1 + Math.sqrt(5)) * i

      const r = 1.8 + (Math.random() - 0.5) * 0.4
      positions[i * 3]     = r * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      positions[i * 3 + 2] = r * Math.cos(phi)

      // Color variation: blue / dim-blue / light-blue / white
      const pick = Math.random()
      const c = pick < 0.45 ? blueColor : pick < 0.7 ? dimColor : pick < 0.88 ? lightColor : whiteColor
      colors[i * 3]     = c.r
      colors[i * 3 + 1] = c.g
      colors[i * 3 + 2] = c.b

      sizes[i] = Math.random() * 2.5 + 0.5
    }

    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3))
    geo.setAttribute('size', new THREE.BufferAttribute(sizes, 1))

    const mat = new THREE.PointsMaterial({
      size: 0.018,
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
      sizeAttenuation: true,
    })

    const sphere = new THREE.Points(geo, mat)
    scene.add(sphere)

    // ── INNER WIREFRAME ICOSAHEDRON ──
    const icoGeo = new THREE.IcosahedronGeometry(1.2, 1)
    const icoMat = new THREE.MeshBasicMaterial({
      color: '#2563EB',
      wireframe: true,
      transparent: true,
      opacity: 0.06,
    })
    const ico = new THREE.Mesh(icoGeo, icoMat)
    scene.add(ico)

    // ── OUTER RING ──
    const ringGeo = new THREE.TorusGeometry(2.1, 0.004, 8, 120)
    const ringMat = new THREE.MeshBasicMaterial({ color: '#2563EB', transparent: true, opacity: 0.18 })
    const ring = new THREE.Mesh(ringGeo, ringMat)
    ring.rotation.x = Math.PI / 2.5
    scene.add(ring)

    const ring2Geo = new THREE.TorusGeometry(2.4, 0.003, 8, 120)
    const ring2Mat = new THREE.MeshBasicMaterial({ color: '#38BDF8', transparent: true, opacity: 0.08 })
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat)
    ring2.rotation.x = Math.PI / 3
    ring2.rotation.y = Math.PI / 5
    scene.add(ring2)

    // ── FLOATING INNER CORE ──
    const coreGeo = new THREE.SphereGeometry(0.18, 32, 32)
    const coreMat = new THREE.MeshBasicMaterial({ color: '#2563EB', transparent: true, opacity: 0.7 })
    const core = new THREE.Mesh(coreGeo, coreMat)
    scene.add(core)

    // Core glow halo
    const haloGeo = new THREE.SphereGeometry(0.32, 32, 32)
    const haloMat = new THREE.MeshBasicMaterial({ color: '#38BDF8', transparent: true, opacity: 0.08, side: THREE.BackSide })
    const halo = new THREE.Mesh(haloGeo, haloMat)
    scene.add(halo)

    // ── MOUSE INTERACTION ──
    let mouseX = 0
    let mouseY = 0
    let targetX = 0
    let targetY = 0

    const onMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth  - 0.5) * 2
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2
    }
    window.addEventListener('mousemove', onMouseMove)

    // ── RESIZE ──
    const onResize = () => {
      if (!mount) return
      camera.aspect = mount.clientWidth / mount.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(mount.clientWidth, mount.clientHeight)
    }
    window.addEventListener('resize', onResize)

    // ── ANIMATION LOOP ──
    const clock = new THREE.Clock()

    const animate = () => {
      const t = clock.getElapsedTime()

      // Smooth mouse follow
      targetX += (mouseX - targetX) * 0.04
      targetY += (mouseY - targetY) * 0.04

      // Particle sphere rotation (slow + mouse influence)
      sphere.rotation.y = t * 0.09 + targetX * 0.4
      sphere.rotation.x = t * 0.04 + targetY * 0.2
      sphere.rotation.z = t * 0.03

      // Icosahedron counter-rotate
      ico.rotation.y = -t * 0.12 + targetX * 0.3
      ico.rotation.x =  t * 0.07

      // Rings
      ring.rotation.z  = t * 0.05
      ring.rotation.y  = targetX * 0.5
      ring2.rotation.z = -t * 0.04
      ring2.rotation.x = Math.PI / 3 + targetY * 0.3

      // Core pulse
      const pulse = 1 + 0.12 * Math.sin(t * 2.4)
      core.scale.setScalar(pulse)
      halo.scale.setScalar(pulse * 1.1)
      coreMat.opacity = 0.5 + 0.25 * Math.sin(t * 2.4)

      // Particle opacity breathe
      mat.opacity = 0.75 + 0.15 * Math.sin(t * 0.7)

      renderer.render(scene, camera)
    }
    renderer.setAnimationLoop(animate)

    return () => {
      renderer.setAnimationLoop(null)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('resize', onResize)
      renderer.dispose()
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement)
      }
    }
  }, [])

  return <div ref={mountRef} className="w-full h-full" />
}
