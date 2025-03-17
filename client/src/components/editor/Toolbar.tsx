import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useEditorStore, createPrimitive } from '@/lib/editor';
import { Box, Circle, Square, Cylinder, Trash2 } from 'lucide-react';

export function Toolbar() {
  const addObject = useEditorStore((state) => state.addObject);
  const selectedObject = useEditorStore((state) => state.selectedObject);
  const removeObject = useEditorStore((state) => state.removeObject);

  return (
    <div className="h-12 border-b px-2 flex items-center gap-2">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => addObject(createPrimitive('cube', 'New Cube'))}
      >
        <Box className="h-4 w-4" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        onClick={() => addObject(createPrimitive('sphere', 'New Sphere'))}
      >
        <Circle className="h-4 w-4" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        onClick={() => addObject(createPrimitive('cylinder', 'New Cylinder'))}
      >
        <Cylinder className="h-4 w-4" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        onClick={() => addObject(createPrimitive('plane', 'New Plane'))}
      >
        <Square className="h-4 w-4" />
      </Button>

      <Separator orientation="vertical" className="mx-2" />

      <Button
        variant="ghost"
        size="icon"
        disabled={!selectedObject}
        onClick={() => selectedObject && removeObject(selectedObject)}
      >
        <Trash2 className="h-4 w-4" />
      </Button>
    </div>
  );
}
