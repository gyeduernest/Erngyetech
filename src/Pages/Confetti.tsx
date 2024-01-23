import { useState, useEffect } from 'react';
import Confetti from 'react-confetti';

const Congratulations = () => {
  const [isConfettiActive, setConfettiActive] = useState(true);

  useEffect(() => {
    // Set isConfettiActive to true when the component mounts

    // Reset the confetti after a certain duration (e.g., 3 seconds)
    const timeoutId = setTimeout(() => {
      setConfettiActive(false);
    }, 9000);

    // Clear the timeout when the component unmounts
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div>
      {isConfettiActive && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          recycle={false}
          numberOfPieces={900}
          gravity={0.1}
        />
      )}
    </div>
  );
};

export default Congratulations;
