/**
 * @template-source next-template
 * @template-sync auto
 * @description This file originates from the base template repository.
 * Do not modify unless you intend to backport changes to the template.
 */

import { TimerDirection } from '@repo/types/enums';
import { Timer } from '@repo/types/date-time';
import { getTimeElapsed, getTimeRemaining } from '@repo/utilities/date-time';
import { useEffect, useRef, useState } from 'react';

interface UseTimerOptions {
  active?: boolean;
  autoSwitch?: boolean; // when DOWN finishes, start counting UP
}

export function useTimer(
  targetDate: Date,
  direction: TimerDirection = TimerDirection.DOWN,
  options: UseTimerOptions = {}
) {
  const { active = true, autoSwitch = false } = options;

  const [isActive, setActive] = useState(active);
  const [currentDirection, setDirection] = useState(direction);
  // Initialize state directly to avoid the first "null" flicker
  const [time, setTime] = useState<Timer | null>(() =>
    direction === TimerDirection.DOWN
      ? getTimeRemaining(targetDate)
      : getTimeElapsed(targetDate)
  );

  useEffect(() => {
    if (!isActive) return;

    const tick = () => {
      const getLatestTime =
        currentDirection === TimerDirection.DOWN
          ? getTimeRemaining
          : getTimeElapsed;

      const newTime = getLatestTime(targetDate);

      if (currentDirection === TimerDirection.DOWN && newTime === null) {
        if (autoSwitch) {
          setDirection(TimerDirection.UP);
        } else {
          setActive(false);
        }
      }

      setTime(newTime);
    };

    const intervalId = window.setInterval(tick, 1000);
    return () => clearInterval(intervalId);
  }, [targetDate, isActive, currentDirection, autoSwitch]);

  return {
    time,
    isActive,
    setActive,
    direction: currentDirection,
    setDirection,
  };
}
