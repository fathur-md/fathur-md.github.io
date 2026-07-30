import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP);

export function useFadeInUp(
  selector: string = '.gsap-item',
  staggerTime: number = 0.15,
  deps: unknown[] = [],
) {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const elements = gsap.utils.toArray(selector);
      if (elements.length === 0) return;

      gsap.fromTo(
        elements,
        {
          y: 30,
          opacity: 0,
          duration: 0.5,
          stagger: staggerTime,
          ease: 'power3.out',
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: staggerTime,
          ease: 'power3.out',
          clearProps: 'all',
        },
      );
    },
    { scope: containerRef, dependencies: deps },
  );
  return containerRef;
}
