import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Atom(props) {
  const { nodes, materials } = useGLTF('/assets/3d/primitive_carbon_atom.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={materials.material_0}
        scale={[1.197, 1.197, 1.837]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_6.geometry}
        material={materials.bLUE}
        position={[1.561, 0.018, 1.334]}
        scale={0.103}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_8.geometry}
        material={materials.material_0}
        position={[-0.155, 0.042, 0.105]}
        rotation={[3.063, 1.515, -1.125]}
        scale={[1.197, 1.197, 1.837]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_10.geometry}
        material={materials.bLUE}
        position={[-1.632, -1.361, -0.358]}
        rotation={[3.063, 1.515, -1.125]}
        scale={0.103}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_12.geometry}
        material={materials.material_0}
        position={[-0.009, 0.022, -0.015]}
        rotation={[0.148, 0.55, 0.263]}
        scale={[1.197, 1.197, 1.837]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_14.geometry}
        material={materials.bLUE}
        position={[-2.006, -0.3, -0.536]}
        rotation={[0.148, 0.55, 0.263]}
        scale={0.103}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_16.geometry}
        material={materials.material_0}
        position={[-0.006, 0.004, -0.021]}
        rotation={[-1.046, 0.188, -1.377]}
        scale={[1.197, 1.197, 1.837]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_18.geometry}
        material={materials.bLUE}
        position={[-0.564, -0.432, -1.987]}
        rotation={[-1.046, 0.188, -1.377]}
        scale={0.103}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_20.geometry}
        material={materials.material_0}
        position={[-0.003, 0.008, -0.005]}
        rotation={[0.148, 0.55, 0.263]}
        scale={[0.428, 0.428, 0.657]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_22.geometry}
        material={materials.bLUE}
        position={[-0.718, -0.107, -0.192]}
        rotation={[0.148, 0.55, 0.263]}
        scale={0.09}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_24.geometry}
        material={materials.material_0}
        position={[-0.002, 0.001, -0.008]}
        rotation={[-1.046, 0.188, -1.377]}
        scale={[0.428, 0.428, 0.657]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_26.geometry}
        material={materials.bLUE}
        position={[-0.202, -0.155, -0.711]}
        rotation={[-1.046, 0.188, -1.377]}
        scale={0.09}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_28.geometry}
        material={materials['Material.002']}
        position={[0, 0, -0.119]}
        rotation={[0.148, 0.55, 0.263]}
        scale={0.09}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_30.geometry}
        material={materials.material}
        position={[-0.103, 0, -0.059]}
        rotation={[1.811, 1.441, -1.473]}
        scale={0.09}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_32.geometry}
        material={materials['Material.002']}
        position={[-0.103, 0, 0.059]}
        rotation={[2.999, 0.488, -2.734]}
        scale={0.09}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_34.geometry}
        material={materials.material}
        position={[0, 0, 0.119]}
        rotation={[2.994, -0.55, -2.879]}
        scale={0.09}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_36.geometry}
        material={materials['Material.002']}
        position={[0.103, 0, 0.059]}
        rotation={[1.331, -1.441, 1.669]}
        scale={0.09}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_38.geometry}
        material={materials.material}
        position={[0.103, 0, -0.059]}
        rotation={[0.142, -0.488, 0.407]}
        scale={0.09}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_40.geometry}
        material={materials.material}
        position={[0, 0.13, -0.066]}
        rotation={[0.148, 0.55, 0.263]}
        scale={0.09}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_42.geometry}
        material={materials['Material.002']}
        position={[-0.057, 0.13, 0.033]}
        rotation={[2.999, 0.488, -2.734]}
        scale={0.09}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_44.geometry}
        material={materials.material}
        position={[0.057, 0.13, 0.033]}
        rotation={[1.331, -1.441, 1.669]}
        scale={0.09}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_46.geometry}
        material={materials.material}
        position={[0, -0.128, -0.067]}
        rotation={[0.148, 0.55, 0.263]}
        scale={0.09}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_48.geometry}
        material={materials['Material.002']}
        position={[-0.057, -0.128, 0.032]}
        rotation={[2.999, 0.488, -2.734]}
        scale={0.09}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_50.geometry}
        material={materials['Material.002']}
        position={[0.057, -0.128, 0.032]}
        rotation={[1.331, -1.441, 1.669]}
        scale={0.09}
      />
    </group>
  )
}

useGLTF.preload('/assets/3d/primitive_carbon_atom.glb')
