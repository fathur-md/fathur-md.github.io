import { CloseIcon } from '@/components/Icons';
import { getRepoReadme } from '@/lib/github';
import { GithubRepo } from '@/types/github';
import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useState } from 'react';
import remarkGfm from 'remark-gfm';
import ReactMarkdown from 'react-markdown';
import { useScrollLock } from '@/hooks/use-scroll-lock';

interface RepositoryCardProps {
  repo: GithubRepo;
  isOpen: boolean;
  onClose: () => void;
}

export default function RepositoryModal({
  repo,
  isOpen,
  onClose,
}: RepositoryCardProps) {
  const [readme, setReadme] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useScrollLock(isOpen);

  useEffect(() => {
    if (isOpen && !readme) {
      const fetchReadme = async () => {
        setIsLoading(true);
        try {
          const text = await getRepoReadme(repo.name);
          setReadme(text);
        } catch (error) {
          console.error('Error fetching README:', error);
        } finally {
          setIsLoading(false);
        }
      };
      fetchReadme();
    }
  }, [isOpen, repo.name, readme]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          {/* Latar Belakang Hitam Gelap (Overlay) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="backdrop-blur- sm absolute inset-0 bg-black/60"
          />

          {/* Konten Kotak Putih Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative flex max-h-[85vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"
          >
            {/* Header Modal (Sticky) */}
            <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
              <div>
                <h2 className="text-gray- 800 text-xl font-bold">
                  {repo.name}
                </h2>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-cyan-600 hover:underline"
                >
                  View on GitHub ↗
                </a>
              </div>
              <button
                onClick={onClose}
                className="rounded-full p-2 transition-colors hover:bg-gray-100"
              >
                <CloseIcon className="h-5 w-5 text-gray-500" />
              </button>
            </div>

            {/* Isi Konten (Markdown) */}
            <div className="overflow-y-auto p-6 md:p-8">
              {isLoading ? (
                // Animasi Loading
                <div className="flex items-center justify-center py-20">
                  <div className="h-8 w-8 animate-spin rounded-full border-4 border-cyan-500 border-t-transparent"></div>
                </div>
              ) : (
                <div className="[&>h1]:mb-4 [&>h2]:text-2xl [&>pre]:bg-gray-100 max-w-none text-gray-800 [&>h1]:text-3xl [&>h1]:font-bold [&>h2]:mt-6 [&>h2]:mb-3 [&>h2]:font-semibold [&>h3]:text-xl [&>h3]:font-semibold [&>p]:mb-4 [&>pre]:mb-4 [&>pre]:overflow-x-auto [&>pre]:rounded-lg [&>pre]:p-4 [&>ul]:mb-4 [&>ul]:ml-6 [&>ul]:list-disc">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {readme}
                  </ReactMarkdown>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
