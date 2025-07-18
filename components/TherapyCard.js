'use client';
 
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
 
export default function TherapyCard({ image, title, description, icon }) {
  const cardRef = useRef();
 
  useEffect(() => {
    const el = cardRef.current;
 
    const hover = gsap.to(el, {
      scale: 1.05,
      boxShadow: "0 20px 30px rgba(0, 0, 0, 0.1)",
      paused: true,
      duration: 0.3,
      ease: "power2.out",
    });
 
    const onEnter = () => hover.play();
    const onLeave = () => hover.reverse();
 
    el.addEventListener('mouseenter', onEnter);
    el.addEventListener('mouseleave', onLeave);
 
    return () => {
      el.removeEventListener('mouseenter', onEnter);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, []);
 
  return (
<div
      ref={cardRef}
      className="bg-white rounded-xl p-6 w-full max-w-sm text-center cursor-pointer transition-transform"
>
<img src={image} alt={title} className="w-full h-40 object-cover rounded-lg mb-4" />
<div className="mb-4">
<div className="mx-auto w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center text-white text-xl">
          {icon}
</div>
</div>
<h3 className="text-lg font-semibold">{title}</h3>
<p className="text-gray-600 text-sm mt-2">{description}</p>
<a href="#" className="text-green-600 text-sm mt-3 inline-block font-medium hover:underline">
        Read More
</a>
</div>
  );
}