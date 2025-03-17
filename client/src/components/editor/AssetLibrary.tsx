import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { Library } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const SAMPLE_ASSETS = [
  { id: 1, name: 'Basic Props', items: ['Chair', 'Table', 'Lamp'] },
  { id: 2, name: 'Nature', items: ['Tree', 'Rock', 'Bush'] },
  { id: 3, name: 'Architecture', items: ['Wall', 'Door', 'Window'] }
];

export function AssetLibrary() {
  return (
    <div className="h-full flex flex-col">
      <div className="p-2 border-b">
        <h2 className="text-sm font-semibold flex items-center gap-2">
          <Library className="w-4 h-4" />
          Asset Library
        </h2>
      </div>
      
      <ScrollArea className="flex-1">
        <div className="p-4 space-y-4">
          {SAMPLE_ASSETS.map((category) => (
            <Card key={category.id}>
              <CardContent className="p-4">
                <h3 className="font-medium mb-2">{category.name}</h3>
                <div className="space-y-2">
                  {category.items.map((item) => (
                    <Button
                      key={item}
                      variant="ghost"
                      className="w-full justify-start"
                    >
                      {item}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
