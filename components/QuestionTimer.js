import { useEffect, useState } from 'react';

const QuestionTimer = () => {
  const [selecting, setSelecting] = useState(false);
  const [intervalId, setIntervalId] = useState(0);

  useEffect(() => {
    return function cleanup() {
      clearInterval(intervalId);
    };
  }, []);

  const resetTimer = () => {
    setSelecting(true);
    if (intervalId !== 0) {
      clearInterval(intervalId);
    }

    setIntervalId(setInterval(() => {
      clearInterval(intervalId);
      setSelecting(false);
    }, 5000));
  }

  return { selecting, resetTimer };
};

export default QuestionTimer;


