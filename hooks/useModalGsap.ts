import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';

gsap.registerPlugin(useGSAP);

export interface ModalBounds {
  top: number;
  left: number;
  width: number;
  height: number;
}

export function useModalGsap(
  isOpen: boolean,
  sourceBounds: ModalBounds | null,
) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);

  const [shouldRender, setShouldRender] = useState(false);

  if (isOpen && !shouldRender) {
    setShouldRender(true);
  }

  useEffect(() => {
    if (!isOpen && shouldRender && tl.current) {
      tl.current.reverse();
    }
  }, [isOpen, shouldRender]);

  useGSAP(
    () => {
      if (!shouldRender || !modalRef.current || !overlayRef.current) return;

      gsap.set(modalRef.current, { clearProps: 'all' });
      const finalBounds = modalRef.current.getBoundingClientRect();

      gsap.set(overlayRef.current, { autoAlpha: 0 });

      tl.current = gsap.timeline({
        paused: true,
        onReverseComplete: () => {
          setShouldRender(false);
        },
      });

      tl.current.to(overlayRef.current, {
        autoAlpha: 1,
        duration: 0.3,
        ease: 'power2.out',
      });

      if (sourceBounds) {
        const cardCenterX = sourceBounds.left + sourceBounds.width / 2;
        const cardCenterY = sourceBounds.top + sourceBounds.height / 2;

        const modalCenterX = finalBounds.left + finalBounds.width / 2;
        const modalCenterY = finalBounds.top + finalBounds.height / 2;

        const deltaX = cardCenterX - modalCenterX;
        const deltaY = cardCenterY - modalCenterY;

        const scaleX = sourceBounds.width / finalBounds.width;
        const scaleY = sourceBounds.height / finalBounds.height;

        gsap.set(modalRef.current, {
          x: deltaX,
          y: deltaY,
          scaleX: scaleX,
          scaleY: scaleY,
          transformOrigin: 'center center',
          borderRadius: '12px',
          autoAlpha: 0,
        });

        tl.current.to(
          modalRef.current,
          {
            x: 0,
            y: 0,
            scaleX: 1,
            scaleY: 1,
            autoAlpha: 1,
            borderRadius: '16px',
            duration: 0.5,
            ease: 'power3.inOut',
          },
          '<',
        );
      } else {
        gsap.set(modalRef.current, { autoAlpha: 0, scale: 0.9, y: 30 });
        tl.current.to(
          modalRef.current,
          {
            autoAlpha: 1,
            scale: 1,
            y: 0,
            duration: 0.4,
            ease: 'back.out(1.5)',
          },
          '<',
        );
      }

      tl.current.play();
    },
    { dependencies: [shouldRender, sourceBounds] },
  );

  return { modalRef, overlayRef, shouldRender };
}
