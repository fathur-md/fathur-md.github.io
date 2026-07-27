'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const apps = [
  {
    id: 1,
    name: 'Music',
    description: 'Nikmati jutaan lagu.',
    color: 'bg-indigo-500',
  },
  {
    id: 2,
    name: 'Notes',
    description: 'Catat ide kapan saja.',
    color: 'bg-emerald-500',
  },
];

export default function AppStore() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-sm space-y-4">
        {apps.map((app) => (
          <motion.button
            key={app.id}
            layoutId={`card-${app.id}`}
            onClick={() => setSelected(app)}
            className={`w-full rounded-3xl p-6 text-left text-white shadow-lg ${app.color}`}
          >
            <h2 className="text-2xl font-bold">{app.name}</h2>
            <p className="mt-2 opacity-80">{app.description}</p>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
            />

            {/* Modal */}
            <motion.div
              layoutId={`card-${selected.id}`}
              className={`fixed top-1/2 left-1/2 w-[90%] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-3xl p-8 text-white shadow-2xl ${selected.color}`}
            >
              <h1 className="text-3xl font-bold">{selected.name}</h1>

              <p className="mt-4">
                Ini adalah halaman detail sederhana dengan animasi transisi ala
                App Store menggunakan Motion.
              </p>

              <button
                onClick={() => setSelected(null)}
                className="mt-8 rounded-full bg-white px-5 py-2 font-medium text-black"
              >
                Tutup
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
