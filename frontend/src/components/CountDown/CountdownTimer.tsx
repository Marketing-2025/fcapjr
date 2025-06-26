import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";

interface CountdownTimerProps {
  targetDate: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = new Date(targetDate).getTime() - new Date().getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeUnits = [
    { value: timeLeft.days, label: "DIAS" },
    { value: timeLeft.hours, label: "HORAS" },
    { value: timeLeft.minutes, label: "MINUTOS" },
    { value: timeLeft.seconds, label: "SEGUNDOS" },
  ];

  return (
    <Box className="mt-12 flex w-full max-w-3xl flex-wrap justify-center gap-4 md:gap-0">
      {timeUnits.map((unit, index) => (
        <Box
          key={unit.label}
          className="flex flex-1 flex-col items-center px-4 text-center"
        >
          <Typography
            variant="h2"
            className="text-5xl font-bold md:text-6xl lg:text-7xl"
          >
            {unit.value}
          </Typography>
          <Typography
            variant="subtitle1"
            className="mt-2 text-sm font-medium md:text-base"
          >
            {unit.label}
          </Typography>
          {index < timeUnits.length - 1 && (
            <Box className="mx-4 hidden absolute ml-50 h-16 w-0.5 bg-white/20 md:block" />
          )}
        </Box>
      ))}
    </Box>
  );
}
