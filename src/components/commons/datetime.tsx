import { memo, useEffect, useState } from "react";
import { Skeleton } from "../ui/skeleton";

export const DateTime = memo(function DateTime() {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return isMounted ? (
    <div className="flex flex-col items-end">
      <Clock />
      <Day />
      <FullDate />
    </div>
  ) : (
    <div className="flex flex-col items-end gap-1">
      <Skeleton className="h-4 w-16" />
      <Skeleton className="h-4 w-20" />
      <Skeleton className="h-4 w-24" />
    </div>
  );
});

const Clock = memo(function Clock() {
  const formatClock = (clock: Date) => {
    return clock.toLocaleString("id-ID", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };
  const [clock, setClock] = useState(formatClock(new Date()));

  useEffect(() => {
    const interval = setInterval(() => {
      setClock(formatClock(new Date()));
    }, 1000);

    return () => clearInterval(interval);
  }, [clock]);

  return <span className="text-sm">{clock} WIB</span>;
});

const Day = memo(function Day() {
  const formatDay = (day: Date) => {
    return day.toLocaleString("id-ID", { weekday: "long" });
  };
  const [day, setDay] = useState(formatDay(new Date()));

  useEffect(() => {
    const interval = setInterval(() => {
      const currentDay = formatDay(new Date());
      if (currentDay !== day) {
        setDay(currentDay);
      }
    }, 1000 * 60 * 60 * 24);

    return () => clearInterval(interval);
  }, [day]);

  return <span className="text-sm">{day}</span>;
});

const FullDate = memo(function FullDate() {
  const formatDate = (date: Date) => {
    return date.toLocaleString("id-ID", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };
  const [date, setDate] = useState(formatDate(new Date()));

  useEffect(() => {
    const interval = setInterval(() => {
      const currentDate = formatDate(new Date());
      if (currentDate !== date) {
        setDate(currentDate);
      }
    }, 1000 * 60 * 60 * 24);

    return () => clearInterval(interval);
  }, [date]);

  return <span className="text-sm">{date}</span>;
});
