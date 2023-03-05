import { useEffect, useState } from 'react';

const QuestionTimer = () => {
  const [selecting, setSelecting] = useState(false);

  let intervalId = 0;

  useEffect(() => {
    return function cleanup() {
      clearInterval(intervalId);
    };
  }, []);

  const resetTimer = () => {
    setSelecting(true);
    console.log('selecting');
    if (intervalId) {
      clearInterval(intervalId);
    }

    intervalId = setInterval(() => {
      setSelecting(false);
    }, 5000);
    console.log('interval: ' + intervalId);
  }

  return { selecting, resetTimer };
};

export default QuestionTimer;


