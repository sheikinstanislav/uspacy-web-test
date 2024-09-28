import { motion } from 'framer-motion';
import { FC, useEffect, useState } from 'react';
import { styles } from './styles';

interface AnimatedHeadingProps {
  duration?: number;
}

export const AnimatedHeading: FC<AnimatedHeadingProps> = ({
  duration = 3000,
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const animatedText = [
    'підприємництво',
    'мрію',
    'перемогу',
    'сенси',
    'майбутнє',
    'лідерство',
    'місію',
    'бізнес',
    'візію',
    'допомогу',
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % animatedText.length);
    }, duration);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <h1 css={styles.heading}>
      Ми віримо у <br />
      <motion.span
        key={currentIndex}
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 40 }}
        transition={{ duration: 0.5 }}
      >
        {animatedText[currentIndex]}
      </motion.span>
    </h1>
  );
};
