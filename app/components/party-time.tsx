'use client';

import confetti from 'canvas-confetti';
import { Button } from 'antd';

export default function PartyTime() {
  const handleClick = () => {
    const duration = 2 * 1000;
    const end = Date.now() + duration;

    function frame() {
      const soccerBalls = confetti.shapeFromText({ text: '⚽️' });
      confetti({
        shapes: [soccerBalls, 'star'],
        colors: ['#9c824a', '#063672', '#ffffff'],
        scalar: 2,
        particleCount: 2,
        angle: 60,
        spread: 110,
        origin: { y: 1 },
        startVelocity: 100,
        drift: -0.5,
      });
      confetti({
        shapes: [soccerBalls, 'star'],
        colors: ['#9c824a', '#063672', '#ffffff'],
        scalar: 2,
        particleCount: 2,
        angle: 120,
        spread: 110,
        origin: { y: 1 },
        startVelocity: 100,
        drift: 0.5,
        gravity: 0.5,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }

    frame();
  };

  return (
    <Button color={'primary'} onClick={handleClick}>
      Party Time
    </Button>
  );
}
