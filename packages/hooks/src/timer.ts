'use client';

/**
 * @template-source next-template
 * @template-sync auto
 * @description This file originates from the base template repository.
 * Do not modify unless you intend to backport changes to the template.
 */

import { TimerDirection } from '@repo/types/enums';
import { Timer } from '@repo/types/date-time';
import { getTimeElapsed, getTimeRemaining } from '@repo/utilities/date-time';
import { useCallback, useEffect, useRef, useState } from 'react';

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

  const [time, setTime] = useState<Timer | null>(() =>
    direction === TimerDirection.DOWN
      ? getTimeRemaining(targetDate)
      : getTimeElapsed(targetDate)
  );

  // Use refs to avoid stale closures inside setInterval without resetting the timer
  const targetDateRef = useRef(targetDate);
  targetDateRef.current = targetDate;

  const directionRef = useRef(currentDirection);
  directionRef.current = currentDirection;

  const autoSwitchRef = useRef(autoSwitch);
  autoSwitchRef.current = autoSwitch;

  // Sync state if initial props change externally
  useEffect(() => {
    setActive(active);
  }, [active]);

  useEffect(() => {
    setDirection(direction);
  }, [direction]);

  useEffect(() => {
    if (!isActive) return;

    const intervalId = window.setInterval(() => {
      const dir = directionRef.current;
      const tDate = targetDateRef.current;

      const getLatestTime =
        dir === TimerDirection.DOWN ? getTimeRemaining : getTimeElapsed;

      const newTime = getLatestTime(tDate);

      if (dir === TimerDirection.DOWN && newTime === null) {
        if (autoSwitchRef.current) {
          setDirection(TimerDirection.UP);
        } else {
          setActive(false);
        }
        return;
      }

      setTime(newTime);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [isActive]); // Only depends on isActive, preventing re-trigger jitter

  return {
    time,
    isActive,
    setActive,
    direction: currentDirection,
    setDirection,
  };
}

export interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isExpired: boolean;
}

interface UseCountdownOptions {
  onExpire?: () => void;
}

export function useCountdown(
  targetDate: Date | string | number,
  options: UseCountdownOptions = {}
) {
  const { onExpire } = options;
  const targetTimeRef = useRef(new Date(targetDate).getTime());
  targetTimeRef.current = new Date(targetDate).getTime();

  const onExpireRef = useRef(onExpire);
  onExpireRef.current = onExpire;

  const calculateTimeLeft = useCallback((): TimeLeft => {
    const difference = targetTimeRef.current - Date.now();

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      isExpired: false,
    };
  }, []);

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft);
  const [isRunning, setIsRunning] = useState<boolean>(true);

  // Control functions
  const start = useCallback(() => setIsRunning(true), []);
  const pause = useCallback(() => setIsRunning(false), []);
  const reset = useCallback(
    (newTarget?: Date | string | number) => {
      if (newTarget) {
        targetTimeRef.current = new Date(newTarget).getTime();
      }
      setTimeLeft(calculateTimeLeft());
      setIsRunning(true);
    },
    [calculateTimeLeft]
  );

  useEffect(() => {
    if (!isRunning) return;

    // Immediate check on mount/resume
    const initialCheck = calculateTimeLeft();
    setTimeLeft(initialCheck);
    if (initialCheck.isExpired) {
      setIsRunning(false);
      onExpireRef.current?.();
      return;
    }

    const intervalId = setInterval(() => {
      const currentTimer = calculateTimeLeft();
      setTimeLeft(currentTimer);

      if (currentTimer.isExpired) {
        clearInterval(intervalId);
        setIsRunning(false);
        onExpireRef.current?.();
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [isRunning, calculateTimeLeft]);

  return { ...timeLeft, isRunning, start, pause, reset };
}
