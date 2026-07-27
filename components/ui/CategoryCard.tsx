'use client';

import { ProjectCategory } from '@/types/project';
import { ChevronDown } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

interface CategoryCardProps {
  category: ProjectCategory;
  isActive: boolean;
  onClick: () => void;
}

export default function CategoryCard({
  category,
  isActive,
  onClick,
}: CategoryCardProps) {
  return (
    <motion.div
      layout
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      onClick={onClick}
      className={`border-border bg-surface relative flex cursor-pointer flex-col overflow-hidden rounded-3xl border text-left transition-colors ${
        isActive ? 'order-2 col-span-2 p-8 pb-10' : 'hover:bg-surface-hover p-6'
      } ${category.id === 'academic' ? '' : ''}`}
    >
      <motion.div
        layout="position"
        className="flex items-center justify-between"
      >
        <div>
          <h3
            className={`font-semibold transition-colors ${isActive ? 'text-primary text-2xl' : 'text-primary text-xl'}`}
          >
            {category.title}
          </h3>
          <p className="text-muted mt-2 text-sm">{category.description}</p>
        </div>
        <motion.div
          animate={{ rotate: isActive ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="bg-background flex h-10 w-10 items-center justify-center rounded-full"
        >
          <ChevronDown className="text-primary h-5 w-5" />
        </motion.div>
      </motion.div>

      <AnimatePresence initial={false}>
        {isActive && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="border-border mt-6 border-t pt-6"
          >
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {category.projects.map((project) => (
                <div key={project.name}>
                  <h4>{project.name}</h4>
                  <p>{project.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
