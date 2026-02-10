"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { Float, Environment, MeshDistortMaterial } from "@react-three/drei"
import { useRef, useMemo } from "react"
import * as THREE from "three"

// Reusable vec to avoid GC pressure in useFrame
// No mouse tracking — pure time-based animations for performance

function HeroObject() {
    const meshRef = useRef<THREE.Mesh>(null!)

    useFrame((state) => {
        const t = state.clock.getElapsedTime()

        // Gentle breathing scale
        const s = 1 + Math.sin(t * 0.8) * 0.02
        meshRef.current.scale.setScalar(s)

        // Time-based rotation only — no mouse tracking
        meshRef.current.rotation.y = t * 0.15
        meshRef.current.rotation.x = Math.sin(t * 0.3) * 0.15
    })

    return (
        <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.4}>
            <mesh ref={meshRef}>
                <torusKnotGeometry args={[1, 0.35, 128, 32]} />
                <MeshDistortMaterial
                    color="#cc2222"
                    envMapIntensity={0.8}
                    clearcoat={1}
                    clearcoatRoughness={0}
                    metalness={0.95}
                    roughness={0.05}
                    distort={0.25}
                    speed={1.5}
                />
            </mesh>
        </Float>
    )
}

function FloatingParticles({ count = 150 }) {
    const points = useRef<THREE.Points>(null!)

    const positions = useMemo(() => {
        const arr = new Float32Array(count * 3)
        for (let i = 0; i < count; i++) {
            arr[i * 3] = (Math.random() - 0.5) * 25
            arr[i * 3 + 1] = (Math.random() - 0.5) * 25
            arr[i * 3 + 2] = (Math.random() - 0.5) * 15
        }
        return arr
    }, [count])

    useFrame(() => {
        if (points.current) {
            points.current.rotation.y += 0.0003
        }
    })

    return (
        <points ref={points}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    args={[positions, 3]}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.04}
                color="#ff4444"
                sizeAttenuation
                transparent
                opacity={0.5}
                blending={THREE.AdditiveBlending}
                depthWrite={false}
            />
        </points>
    )
}

// Rig removed — mouse parallax was causing performance issues

export default function Scene3DBackground() {
    return (
        <div className="fixed inset-0 w-full h-full -z-10 bg-[#050505]" style={{ pointerEvents: "none" }}>
            <Canvas
                dpr={[1, 1.5]}
                camera={{ position: [0, 0, 5], fov: 45 }}
                gl={{
                    antialias: true,
                    alpha: false,
                    powerPreference: "high-performance",
                    stencil: false,
                    depth: true,
                }}
                style={{ pointerEvents: "none" }}
            >
                <color attach="background" args={["#050505"]} />

                {/* Restrained lighting */}
                <ambientLight intensity={0.15} />
                <pointLight position={[8, 6, 8]} intensity={1} color="#cc2222" />
                <pointLight position={[-6, -4, -6]} intensity={0.3} color="#2222cc" />

                {/* Environment for physically-based reflections */}
                <Environment preset="city" />

                <HeroObject />
                <FloatingParticles />
                {/* Rig removed for performance */}
            </Canvas>

            {/* Gradient vignette to blend 3D into content */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: "linear-gradient(to bottom, transparent 0%, transparent 40%, rgba(5,5,5,0.7) 70%, #050505 100%)",
                }}
            />
        </div>
    )
}
