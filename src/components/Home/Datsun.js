

import { useGLTF } from '@react-three/drei'
import { useLayoutEffect, useRef, useState } from 'react'

export function Model({ color, ...props }) {
  
  const { scene, nodes, materials } = useGLTF('/WBR-comp.glb', { useDraco: true, useMeshopt: true })
  // const { } = useGLTF('/wbr1.glb')
  useLayoutEffect(() => {
    Object.values(nodes).forEach((node) => node.isMesh && (node.receiveShadow = node.castShadow = true))
  }, [nodes, materials])
  return <primitive object={scene} {...props} />
}

useGLTF.preload('/WBR-comp.glb')
