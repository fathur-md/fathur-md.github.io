import { Loader } from 'lucide-react';

export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center p-10">
      <Loader className="text-accent h-10 w-10 animate-spin" />
    </div>
  );
}
