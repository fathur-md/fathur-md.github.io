import { Loader } from 'lucide-react';

export default function loading() {
  return (
    <div className="flex min-h-[50vh] flex-1 flex-col items-center justify-center">
      <Loader className="h-8 w-8 animate-spin text-gray-400" />
    </div>
  );
}
