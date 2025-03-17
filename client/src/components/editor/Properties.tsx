import { useEditorStore } from '@/lib/editor';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Slider } from '@/components/ui/slider';
import { Settings } from 'lucide-react';

export function Properties() {
  const objects = useEditorStore((state) => state.objects);
  const selectedObject = useEditorStore((state) => state.selectedObject);
  const updateObject = useEditorStore((state) => state.updateObject);

  const selected = objects.find(obj => obj.id === selectedObject);

  if (!selected) {
    return (
      <div className="h-full flex flex-col">
        <div className="p-2 border-b">
          <h2 className="text-sm font-semibold flex items-center gap-2">
            <Settings className="w-4 h-4" />
            Properties
          </h2>
        </div>
        <div className="p-4 text-sm text-muted-foreground">
          No object selected
        </div>
      </div>
    );
  }

  const handleChange = (field: string, subfield: string, value: string | number) => {
    const numValue = typeof value === 'string' ? parseFloat(value) || 0 : value;
    updateObject(selected.id, {
      [field]: {
        ...selected[field as keyof typeof selected],
        [subfield]: numValue
      }
    } as Partial<typeof selected>);
  };

  return (
    <div className="h-full flex flex-col">
      <div className="p-2 border-b">
        <h2 className="text-sm font-semibold flex items-center gap-2">
          <Settings className="w-4 h-4" />
          Properties
        </h2>
      </div>

      <ScrollArea className="flex-1">
        <div className="p-4 space-y-6">
          <div>
            <Label>Name</Label>
            <Input 
              value={selected.name}
              onChange={(e) => updateObject(selected.id, { name: e.target.value })}
            />
          </div>

          <div>
            <Label>Position</Label>
            <div className="grid grid-cols-3 gap-2">
              <Input
                type="number"
                value={selected.position.x}
                onChange={(e) => handleChange('position', 'x', e.target.value)}
              />
              <Input
                type="number"
                value={selected.position.y}
                onChange={(e) => handleChange('position', 'y', e.target.value)}
              />
              <Input
                type="number"
                value={selected.position.z}
                onChange={(e) => handleChange('position', 'z', e.target.value)}
              />
            </div>
          </div>

          <div>
            <Label>Rotation</Label>
            <div className="grid grid-cols-3 gap-2">
              <Input
                type="number"
                value={selected.rotation.x}
                onChange={(e) => handleChange('rotation', 'x', e.target.value)}
              />
              <Input
                type="number"
                value={selected.rotation.y}
                onChange={(e) => handleChange('rotation', 'y', e.target.value)}
              />
              <Input
                type="number"
                value={selected.rotation.z}
                onChange={(e) => handleChange('rotation', 'z', e.target.value)}
              />
            </div>
          </div>

          <div>
            <Label>Scale</Label>
            <div className="grid grid-cols-3 gap-2">
              <Input
                type="number"
                value={selected.scale.x}
                onChange={(e) => handleChange('scale', 'x', e.target.value)}
              />
              <Input
                type="number"
                value={selected.scale.y}
                onChange={(e) => handleChange('scale', 'y', e.target.value)}
              />
              <Input
                type="number"
                value={selected.scale.z}
                onChange={(e) => handleChange('scale', 'z', e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-4">
            <Label>Material</Label>

            <div className="space-y-2">
              <Label className="text-sm">Color</Label>
              <Input
                type="color"
                value={selected.material.color}
                onChange={(e) => handleChange('material', 'color', e.target.value)}
                className="h-8"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-sm">Metalness</Label>
              <Slider
                value={[selected.material.metalness]}
                onValueChange={([value]) => handleChange('material', 'metalness', value)}
                min={0}
                max={1}
                step={0.1}
              />
            </div>

            <div className="space-y-2">
              <Label className="text-sm">Roughness</Label>
              <Slider
                value={[selected.material.roughness]}
                onValueChange={([value]) => handleChange('material', 'roughness', value)}
                min={0}
                max={1}
                step={0.1}
              />
            </div>

            <div className="space-y-2">
              <Label className="text-sm">Emissive Color</Label>
              <Input
                type="color"
                value={selected.material.emissive}
                onChange={(e) => handleChange('material', 'emissive', e.target.value)}
                className="h-8"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-sm">Opacity</Label>
              <Slider
                value={[selected.material.opacity]}
                onValueChange={([value]) => handleChange('material', 'opacity', value)}
                min={0}
                max={1}
                step={0.1}
              />
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}
