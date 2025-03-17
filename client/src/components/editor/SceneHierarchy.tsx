import { useEditorStore } from '@/lib/editor';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { ChevronRight, Folder } from 'lucide-react';

export function SceneHierarchy() {
  const objects = useEditorStore((state) => state.objects);
  const selectedObject = useEditorStore((state) => state.selectedObject);
  const setSelectedObject = useEditorStore((state) => state.setSelectedObject);

  return (
    <div className="h-full flex flex-col">
      <div className="p-2 border-b">
        <h2 className="text-sm font-semibold flex items-center gap-2">
          <Folder className="w-4 h-4" />
          Scene Hierarchy
        </h2>
      </div>
      
      <ScrollArea className="flex-1">
        <div className="p-2">
          {objects.map((object) => (
            <Button
              key={object.id}
              variant={selectedObject === object.id ? "secondary" : "ghost"}
              className="w-full justify-start text-left mb-1"
              onClick={() => setSelectedObject(object.id)}
            >
              <ChevronRight className="w-4 h-4 mr-2" />
              {object.name}
            </Button>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
