import { useEffect, useRef, useState } from 'react';
import { SectionProps } from '../../types/Section/SectionProps';
import classNames from 'classnames';

export const Section = ({ id, children }: SectionProps) => {
  const ref = useRef(null);
  const [classes, setClasses] = useState<string[]>(['opacity-0']);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      {
        threshold: 0.4,
      }
    );

    if (ref.current != null) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current != null) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, visible]);

  useEffect(() => {
    if (visible && !classes.includes('animate-section-display')) {
      setClasses(['animate-section-display']);
    }
  }, [visible]);

  return (
    <section ref={ref} id={id} className={classNames(classes)}>
      {children}
    </section>
  );
};
