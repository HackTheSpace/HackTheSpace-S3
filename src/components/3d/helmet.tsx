import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Helmet(props: any) {
  const { nodes, materials } = useGLTF("/assets/3d/scene.gltf");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.066}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCylinder19_UV_Material_0.geometry}
            material={materials.UV_Material}
            position={[1.994, 2.206, 1.566]}
            rotation={[2.056, 0.387, -0.893]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCylinder20_UV_Material_0.geometry}
            material={materials.UV_Material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCylinder21_UV_Material_0.geometry}
            material={materials.UV_Material}
            position={[1.981, 2.618, 1.587]}
            rotation={[2.056, 0.387, -0.893]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCylinder22_UV_Material_0.geometry}
            material={materials.UV_Material}
            position={[1.72, 3.283, 1.802]}
            rotation={[2.112, 0.603, -1.003]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCylinder23_UV_Material_0.geometry}
            material={materials.UV_Material}
            position={[1.85, 1.641, 1.716]}
            rotation={[2.073, 0.381, -0.931]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCylinder24_UV_Material_0.geometry}
            material={materials.UV_Material}
            position={[-2.461, 2.358, -0.356]}
            rotation={[0.937, 0.011, 1.54]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCylinder25_UV_Material_0.geometry}
            material={materials.UV_Material}
            position={[-2.568, 2.359, -0.092]}
            rotation={[0.937, 0.011, 1.54]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCylinder26_UV_Material_0.geometry}
            material={materials.UV_Material}
            position={[-2.438, 2.359, 1.219]}
            rotation={[0.937, 0.011, 1.54]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCylinder30_UV_Material_0.geometry}
            material={materials.UV_Material}
            position={[2.028, 0.694, 1.008]}
            rotation={[2.41, 0.291, -1.268]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCylinder31_UV_Material_0.geometry}
            material={materials.UV_Material}
            position={[2.203, 0.755, 0.544]}
            rotation={[2.477, 0.199, -1.394]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCylinder33_UV_Material_0.geometry}
            material={materials.UV_Material}
            position={[-2.244, 1.351, -0.129]}
            rotation={[0.927, -0.041, 1.553]}
            scale={0.808}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCylinder34_UV_Material_0.geometry}
            material={materials.UV_Material}
            position={[-2.241, 1.318, 0.217]}
            rotation={[0.927, -0.041, 1.553]}
            scale={0.808}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCylinder35_UV_Material_0.geometry}
            material={materials.UV_Material}
            position={[2.276, 1.204, -0.214]}
            rotation={[2.286, 0.003, -1.578]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCylinder36_UV_Material_0.geometry}
            material={materials.UV_Material}
            position={[2.277, 1.157, 0.072]}
            rotation={[2.286, 0.003, -1.578]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCylinder37_UV_Material_0.geometry}
            material={materials.UV_Material}
            position={[0.144, 1.504, -2.273]}
            rotation={[1.383, -0.715, 3.137]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCylinder38_UV_Material_0.geometry}
            material={materials.UV_Material}
            position={[-0.141, 1.504, -2.273]}
            rotation={[1.383, -0.715, 3.137]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCylinder39_UV_Material_0.geometry}
            material={materials.UV_Material}
            position={[2.405, 2.246, 0.257]}
            rotation={[-3.123, -0.937, -0.016]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCylinder40_UV_Material_0.geometry}
            material={materials.UV_Material}
            position={[2.405, 2.511, 0.257]}
            rotation={[-3.123, -0.937, -0.016]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCylinder41_UV_Material_0.geometry}
            material={materials.UV_Material}
            position={[2.405, 2.57, 0.257]}
            rotation={[0.018, -0.937, -0.016]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCylinder42_UV_Material_0.geometry}
            material={materials.UV_Material}
            position={[2.405, 2.313, 0.257]}
            rotation={[0.018, -0.937, -0.016]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCylinder43_UV_Material_0.geometry}
            material={materials.UV_Material}
            position={[-1.743, 3.803, 1.811]}
            rotation={[1.246, 0.266, 0.723]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCylinder44_UV_Material_0.geometry}
            material={materials.UV_Material}
            position={[-1.862, 3.615, 1.72]}
            rotation={[1.246, 0.266, 0.723]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCylinder45_UV_Material_0.geometry}
            material={materials.UV_Material}
            position={[-1.852, 2.141, 1.743]}
            rotation={[1.373, 0.339, 0.795]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCylinder46_UV_Material_0.geometry}
            material={materials.UV_Material}
            position={[-1.938, 2.342, 1.655]}
            rotation={[1.341, 0.272, 0.805]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCylinder32_UV_Material_0.geometry}
            material={materials.UV_Material}
            position={[2.441, 2.409, -0.654]}
            rotation={[2.204, -0.011, -1.601]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface5001_UV_Material_0.geometry}
            material={materials.UV_Material}
            position={[0.016, 1.69, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface5002_UV_Material_0.geometry}
            material={materials.UV_Material}
            position={[0.016, 1.69, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface5003_UV_Material_0.geometry}
            material={materials.UV_Material}
            position={[0.016, 1.69, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface5004_UV_Material_0.geometry}
            material={materials.UV_Material}
            position={[0.016, 1.69, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface5005_UV_Material_0.geometry}
            material={materials.UV_Material}
            position={[0.016, 1.69, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface5006_UV_Material_0.geometry}
            material={materials.UV_Material}
            position={[0.016, 1.69, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface5007_UV_Material_0.geometry}
            material={materials.UV_Material}
            position={[0.016, 1.69, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface5008_UV_Material_0.geometry}
            material={materials.UV_Material}
            position={[0.016, 1.69, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface5009_UV_Material_0.geometry}
            material={materials.UV_Material}
            position={[0.016, 1.69, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface5010_UV_Material_0.geometry}
            material={materials.UV_Material}
            position={[0.016, 1.69, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface5011_UV_Material_0.geometry}
            material={materials.UV_Material}
            position={[0.016, 1.69, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface5012_UV_Material_0.geometry}
            material={materials.UV_Material}
            position={[0.016, 1.69, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface5013_UV_Material_0.geometry}
            material={materials.UV_Material}
            position={[0.016, 1.69, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface5014_UV_Material_0.geometry}
            material={materials.UV_Material}
            position={[0.016, 1.69, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface5015_UV_Material_0.geometry}
            material={materials.UV_Material}
            position={[0.016, 1.69, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface5016_UV_Material_0.geometry}
            material={materials.UV_Material}
            position={[0.016, 1.69, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface5017_UV_Material_0.geometry}
            material={materials.UV_Material}
            position={[0.016, 1.69, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface5018_UV_Material_0.geometry}
            material={materials.UV_Material}
            position={[0.016, 1.69, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface5019_UV_Material_0.geometry}
            material={materials.UV_Material}
            position={[0.016, 1.69, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface5020_UV_Material_0.geometry}
            material={materials.UV_Material}
            position={[0.016, 1.69, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface5021_UV_Material_0.geometry}
            material={materials.UV_Material}
            position={[0.016, 1.69, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface5022_UV_Material_0.geometry}
            material={materials.UV_Material}
            position={[0.016, 1.69, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface5023_UV_Material_0.geometry}
            material={materials.UV_Material}
            position={[0.016, 1.69, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface5024_UV_Material_0.geometry}
            material={materials.UV_Material}
            position={[0.016, 1.69, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface5025_UV_Material_0.geometry}
            material={materials.UV_Material}
            position={[0.016, 1.69, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface5026_UV_Material_0.geometry}
            material={materials.UV_Material}
            position={[0.016, 1.69, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface5027_UV_Material_0.geometry}
            material={materials.UV_Material}
            position={[0.016, 1.69, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface5028_UV_Material_0.geometry}
            material={materials.UV_Material}
            position={[0.016, 1.69, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface5029_UV_Material_0.geometry}
            material={materials.UV_Material}
            position={[0.016, 1.69, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface5030_UV_Material_0.geometry}
            material={materials.UV_Material}
            position={[0.016, 1.69, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface5031_UV_Material_0.geometry}
            material={materials.UV_Material}
            position={[0.016, 1.69, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface5032_UV_Material_0.geometry}
            material={materials.UV_Material}
            position={[0.016, 1.69, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface5033_UV_Material_0.geometry}
            material={materials.UV_Material}
            position={[0.016, 1.69, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface5034_UV_Material_0.geometry}
            material={materials.UV_Material}
            position={[0.016, 1.69, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface5035_UV_Material_0.geometry}
            material={materials.UV_Material}
            position={[0.016, 1.69, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface5036_UV_Material_0.geometry}
            material={materials.UV_Material}
            position={[0.016, 1.69, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface5037_UV_Material_0.geometry}
            material={materials.UV_Material}
            position={[0.016, 1.69, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface5038_UV_Material_0.geometry}
            material={materials.UV_Material}
            position={[0.016, 1.69, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface5039_UV_Material_0.geometry}
            material={materials.UV_Material}
            position={[0.016, 1.69, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface5040_UV_Material_0.geometry}
            material={materials.UV_Material}
            position={[0.016, 1.69, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface5041_UV_Material_0.geometry}
            material={materials.UV_Material}
            position={[0.016, 1.69, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface5042_UV_Material_0.geometry}
            material={materials.UV_Material}
            position={[0.016, 1.69, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface5043_UV_Material_0.geometry}
            material={materials.UV_Material}
            position={[0.016, 1.69, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface5044_UV_Material_0.geometry}
            material={materials.UV_Material}
            position={[0.016, 1.69, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface5045_UV_Material_0.geometry}
            material={materials.UV_Material}
            position={[0.016, 1.69, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface5046_UV_Material_0.geometry}
            material={materials.UV_Material}
            position={[0.016, 1.69, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface5047_UV_Material_0.geometry}
            material={materials.UV_Material}
            position={[0.016, 1.69, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface5048_UV_Material_0.geometry}
            material={materials.UV_Material}
            position={[0.016, 1.69, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface5049_UV_Material_0.geometry}
            material={materials.UV_Material}
            position={[0.016, 1.69, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface5050_UV_Material_0.geometry}
            material={materials.UV_Material}
            position={[0.016, 1.69, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface5051_UV_Material_0.geometry}
            material={materials.UV_Material}
            position={[0.016, 1.69, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface5052_UV_Material_0.geometry}
            material={materials.UV_Material}
            position={[0.016, 1.69, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface5053_UV_Material_0.geometry}
            material={materials.UV_Material}
            position={[0.016, 1.69, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface5054_UV_Material_0.geometry}
            material={materials.UV_Material}
            position={[0.016, 1.69, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface5055_UV_Material_0.geometry}
            material={materials.UV_Material}
            position={[0.016, 1.69, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface5056_UV_Material_0.geometry}
            material={materials.UV_Material}
            position={[0.016, 1.69, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface5057_UV_Material_0.geometry}
            material={materials.UV_Material}
            position={[0.016, 1.69, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface5058_UV_Material_0.geometry}
            material={materials.UV_Material}
            position={[0.016, 1.69, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface5059_UV_Material_0.geometry}
            material={materials.UV_Material}
            position={[0.016, 1.69, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface5060_UV_Material_0.geometry}
            material={materials.UV_Material}
            position={[0.016, 1.69, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface5061_UV_Material_0.geometry}
            material={materials.UV_Material}
            position={[0.016, 1.69, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface5062_UV_Material_0.geometry}
            material={materials.UV_Material}
            position={[0.016, 1.69, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface5063_UV_Material_0.geometry}
            material={materials.UV_Material}
            position={[0.016, 1.69, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface5064_UV_Material_0.geometry}
            material={materials.UV_Material}
            position={[0.016, 1.69, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface5065_UV_Material_0.geometry}
            material={materials.UV_Material}
            position={[0.016, 1.69, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface5066_UV_Material_0.geometry}
            material={materials.UV_Material}
            position={[0.016, 1.69, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface5067_UV_Material_0.geometry}
            material={materials.UV_Material}
            position={[0.016, 1.69, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface5068_UV_Material_0.geometry}
            material={materials.UV_Material}
            position={[0.016, 1.69, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface5069_UV_Material_0.geometry}
            material={materials.UV_Material}
            position={[0.016, 1.69, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface5070_UV_Material_0.geometry}
            material={materials.UV_Material}
            position={[0.016, 1.69, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface5071_UV_Material_0.geometry}
            material={materials.UV_Material}
            position={[0.016, 1.69, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface5072_UV_Material_0.geometry}
            material={materials.UV_Material}
            position={[0.016, 1.69, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface5073_UV_Material_0.geometry}
            material={materials.UV_Material}
            position={[0.016, 1.69, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface5074_UV_Material_0.geometry}
            material={materials.UV_Material}
            position={[0.016, 1.69, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface5075_UV_Material_0.geometry}
            material={materials.UV_Material}
            position={[0.016, 1.69, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface5076_UV_Material_0.geometry}
            material={materials.UV_Material}
            position={[0.016, 1.69, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface5077_UV_Material_0.geometry}
            material={materials.UV_Material}
            position={[0.016, 1.69, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface5078_UV_Material_0.geometry}
            material={materials.UV_Material}
            position={[0.016, 1.69, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface5079_UV_Material_0.geometry}
            material={materials.UV_Material}
            position={[0.016, 1.69, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface5080_UV_Material_0.geometry}
            material={materials.UV_Material}
            position={[0.016, 1.69, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface5081_UV_Material_0.geometry}
            material={materials.UV_Material}
            position={[0.016, 1.69, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface5082_UV_Material_0.geometry}
            material={materials.UV_Material}
            position={[0.016, 1.69, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface5083_UV_Material_0.geometry}
            material={materials.UV_Material}
            position={[0.016, 1.69, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface5084_UV_Material_0.geometry}
            material={materials.UV_Material}
            position={[0.016, 1.69, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface5085_UV_Material_0.geometry}
            material={materials.UV_Material}
            position={[0.016, 1.69, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface5086_UV_Material_0.geometry}
            material={materials.UV_Material}
            position={[0.016, 1.69, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface5087_UV_Material_0.geometry}
            material={materials.UV_Material}
            position={[0.016, 1.69, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface5088_UV_Material_0.geometry}
            material={materials.UV_Material}
            position={[0.016, 1.69, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface5089_UV_Material_0.geometry}
            material={materials.UV_Material}
            position={[0.016, 1.69, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface5090_UV_Material_0.geometry}
            material={materials.UV_Material}
            position={[0.016, 1.69, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface5091_UV_Material_0.geometry}
            material={materials.UV_Material}
            position={[0.016, 1.69, 0]}
            scale={100}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/assets/3d/scene.gltf");
