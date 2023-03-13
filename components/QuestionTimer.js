import { useEffect, useState } from 'react';

const QuestionTimer = () => {
  const [selecting, setSelecting] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    return function cleanup() {
      clearTimeout(time);
    };
  }, []);

  const endTimer = () => {
    if (time !== 0) {
      clearTimeout(time);
      setTime(0);
      setSelecting(false);
    }
  }

  const resetTimer = () => {
    setSelecting(true);
    if (time !== 0) {
      clearTimeout(time);
    }

    const time = setTimeout(endTimer, 5000);
    setTime(time);
  }

  return { selecting, resetTimer };
};

export default QuestionTimer;


