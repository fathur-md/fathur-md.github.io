'use client';

import { useState } from 'react';
import { projectCategories } from '@/config/project';
import { ProjectCategory } from '@/types/project';
import CategoryCard from '@/components/ui/CategoryCard';

export default function HeroProject() {
  const [activeCategoryId, setActiveCategoryId] = useState<string | null>(null);
  return (
    <section className="min-h-screen-nav mx-auto w-full max-w-5xl px-5">
      <div className="relative mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {projectCategories.map((category) => (
          <CategoryCard
            key={category.id}
            category={category}
            isActive={activeCategoryId === category.id}
            onClick={() =>
              setActiveCategoryId(
                activeCategoryId === category.id ? null : category.id,
              )
            }
          />
        ))}
      </div>
    </section>
  );
}
