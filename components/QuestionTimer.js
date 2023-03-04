import { useEffect } from 'react';

const QuestionTimer = (props) => {
  let intervalId = 0;

  useEffect(() => {
    intervalId = setInterval(props.callback, 5000);

      return function cleanup() {
        clearInterval(intervalId);
      };
  }, []);
};

export default QuestionTimer;


