import { useEffect, useRef, useState } from "react";
import clsx from "clsx";

export default function Counter({
  end,
  start = 0,
  duration = 2000,
  prefix = "",
  suffix = "",
  title,
  className = "",
}) {
  const [count, setCount] = useState(start);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    const startTime = performance.now();

    const animate = (currentTime) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);

      const value = Math.floor(start + (end - start) * progress);

      setCount(value);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [hasAnimated, start, end, duration]);

  return (
    <div ref={ref} className={clsx("flex flex-col", className)}>
      <h3 className="text-3xl md:text-4xl font-bold text-white">
        {prefix}
        {count}
        {suffix}
      </h3>

      {title && (
        <p className="mt-2 text-sm text-zinc-400">
          {title}
        </p>
      )}
    </div>
  );
}