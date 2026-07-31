import LoadingSpinner from '@/components/ui/LoadingSpinner';

export default function loading() {
  return (
    <div className="flex min-h-[50vh] flex-1 flex-col items-center justify-center">
      <LoadingSpinner />
    </div>
  );
}
