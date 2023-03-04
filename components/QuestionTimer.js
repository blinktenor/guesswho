import { useEffect } from 'react';

const QuestionTimer = (props) => {
  let intervalId = 0;
  const timerUp = () => {
    console.log('timerUp ' + intervalId);
  };

  let intervalid;
  useEffect(() => {
    intervalId = setInterval(() => {console.log("Iterate " + intervalId); }, 5000);

      return function cleanup() {
        console.log("cleaning up");
        clearInterval(intervalId);
      };
  }, []);
};

export default QuestionTimer;


