import { Loader } from 'lucide-react';

export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center">
      <Loader className="h-8 w-8 animate-spin text-gray-400" />
    </div>
  );
}
