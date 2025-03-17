import { useEffect, useRef } from 'react';
import { useEditorStore } from '@/lib/editor';
import { SceneManager } from '@/lib/scene';
import type { Object3D } from 'three';

export function Viewport() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneManagerRef = useRef<SceneManager>();
  const objects = useEditorStore((state) => state.objects);

  useEffect(() => {
    if (!containerRef.current) return;

    const sceneManager = new SceneManager(containerRef.current);
    sceneManagerRef.current = sceneManager;

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        sceneManager.resize(width, height);
      }
    });

    resizeObserver.observe(containerRef.current);

    return () => {
      resizeObserver.disconnect();
      sceneManager.cleanup();
    };
  }, []);

  useEffect(() => {
    if (!sceneManagerRef.current) return;

    // Clear existing objects
    const scene = sceneManagerRef.current.scene;
    scene.children = scene.children.filter((child: Object3D) => 
      child.userData.id === undefined
    );

    // Add new objects
    objects.forEach(object => {
      const mesh = sceneManagerRef.current!.createMesh(object);
      scene.add(mesh);
    });
  }, [objects]);

  return (
    <div 
      ref={containerRef} 
      className="w-full h-full bg-background"
    />
  );
}
