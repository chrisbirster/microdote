import { createSignal, onCleanup, onMount } from "solid-js";
import { Tasks } from "./tasks";

const GapTimer = (props: any) => {
  const [isLoading, setIsLoading] = createSignal(true);
  const [workDuration, setWorkDuration] = createSignal(25); // in minutes
  const [remainingTime, setRemainingTime] = createSignal(workDuration() * 60); // in seconds
  const [isPaused, setIsPaused] = createSignal(true);
  const [isWorking, setIsWorking] = createSignal(true);
  const [completedSessions, setCompletedSessions] = createSignal(0);
  const [showSettings, setShowSettings] = createSignal(false);
  const [gaps, setGaps] = createSignal<number[]>([]);
  const [priorRemainingTime, setPriorRemainingTime] = createSignal(0); // New State

  let intervalId: NodeJS.Timeout | null = null;

  const successSound = new Audio("/music/success.mp3");
  const errorSound = new Audio("/music/error.mp3");
  const MIN_GAP_SPACING = 90; // minimum 90 seconds between gaps
  const GAP_DURATION = 10; // 10 seconds

  function calculateNumberOfGaps(workDurationInSeconds: number): number {
    const gapsPerTwoMinutes = workDurationInSeconds / 120;
    return Math.max(1, Math.floor(gapsPerTwoMinutes)); // Ensure at least 1 gap
  }

  function generateGapTimes(workDurationInSeconds: number) {
    const numberOfGaps = calculateNumberOfGaps(workDurationInSeconds);
    if (numberOfGaps === 0) return [];

    const gapTimes: number[] = [];
    const interval = Math.floor(workDurationInSeconds / numberOfGaps);

    for (let i = 0; i < numberOfGaps; i++) {
      const min = MIN_GAP_SPACING + i * interval;
      const max = (i + 1) * interval - GAP_DURATION;

      // Ensure that min is less than max to avoid negative range
      if (max <= min) {
        gapTimes.push(min); // Place gap at min if no range
        continue;
      }

      const gapTime = Math.floor(min + Math.random() * (max - min));
      gapTimes.push(gapTime);
      gapTimes.sort((a, b) => b - a); // Sort in descending order
      setGaps(gapTimes);
    }
  }

  // Format time as MM:SS
  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  // Calculate progress for the SVG circle
  const getProgress = () => {
    const totalTime = isWorking() ? workDuration() * 60 : GAP_DURATION;
    const progress = (remainingTime() / totalTime) * 283; // 283 is circumference of circle (2 * π * 45)
    return progress;
  };

  const updateTimer = () => {
    setRemainingTime((prev) => {
      if (prev <= 0) {
        if (isWorking()) {
          // Work period complete
          setCompletedSessions((count) => count + 1);
          setIsPaused(true);
          if (intervalId) {
            clearInterval(intervalId);
            intervalId = null;
          }
          successSound
            .play()
            .catch((err) => console.log("Audio playback failed:", err));
          const newWorkDuration = workDuration() * 60;
          generateGapTimes(newWorkDuration);
          return newWorkDuration;
        } else {
          // Rest period complete
          setIsWorking(true);
          errorSound
            .play()
            .catch((err) => console.log("Audio playback failed:", err));
          return priorRemainingTime();
        }
      }

      if (isWorking()) {
        if (prev === gaps()[0]) {
          // Time for a gap
          setIsWorking(false);
          setPriorRemainingTime(prev);
          setGaps(gaps().slice(1));
          successSound
            .play()
            .catch((err) => console.log("Audio playback failed:", err));
          return GAP_DURATION;
        }
      }

      return prev - 1; // Continue countdown
    });
  };

  // Start button handler
  const onStart = () => {
    if (isPaused()) {
      setIsPaused(false);
      if (!intervalId) {
        intervalId = setInterval(updateTimer, 300);
      }
    }
  };

  // Pause button handler
  const onPause = () => {
    setIsPaused(true);
    if (intervalId) {
      clearInterval(intervalId);
      intervalId = null;
    }
  };

  // Handle work duration change
  const handleWorkDurationChange = (
    event: Event & { currentTarget: HTMLInputElement },
  ) => {
    const newDurationInMinutes = Number.parseInt(event.currentTarget.value);
    const newDurationInSeconds = newDurationInMinutes * 60;

    // Generate gaps based on new duration
    generateGapTimes(newDurationInSeconds);

    // Update state
    setWorkDuration(newDurationInMinutes);
    setRemainingTime(newDurationInSeconds);
    setIsWorking(true);
    setPriorRemainingTime(0); // Reset prior remaining time

    // Reset if timer is paused
    if (isPaused()) {
      if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
      }
      setCompletedSessions(0);
    }
  };

  // Cleanup on component unmount
  onCleanup(() => {
    if (intervalId) {
      clearInterval(intervalId);
    }
  });

  // Initialize gaps on component mount
  onMount(() => {
    generateGapTimes(workDuration() * 60);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  });

  const onSubmit = (e: SubmitEvent) => {
    e.preventDefault();
    setShowSettings(false);
  };

  return (
    <>
      <div
        id="microdote-timer"
        classList={{
          "timer-running": !isPaused(),
          "timer-paused": isPaused(),
          "rest-mode": !isWorking(),
        }}
      >
        {/* Loading overlay */}
        <div
          id="microdote-timer-overlay"
          style={{
            display: isLoading() ? "flex" : "none",
          }}
        >
          <img src="spinner-red.gif" alt="Loading..." />
        </div>

        {/* Settings toggle button */}
        <span
          class="btn-icon"
          id="microdote-toggle-settings"
          onClick={() => setShowSettings(true)}
        >
          <i class="fa fa-cog"></i>
        </span>

        {/* Timer circle */}
        <div id="microdote-timer-progress">
          <svg id="circle-timer" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" class="circle-background" />
            <circle
              cx="50"
              cy="50"
              r="45"
              class="circle-progress"
              style={{
                "stroke-dashoffset": getProgress(),
              }}
            />
            <text
              id="microdote-timer-time"
              x="50"
              y="50"
              text-anchor="middle"
              dy=".3em"
              font-size="18"
            >
              {formatTime(remainingTime())}
            </text>
            {isPaused() && (
              <text
                id="microdote-timer-pause"
                x="50"
                y="68"
                text-anchor="middle"
                dy=".3em"
                font-size="7"
              >
                Paused
              </text>
            )}
            {!isWorking() && (
              <text
                id="microdote-timer-mode"
                x="50"
                y="68"
                text-anchor="middle"
                dy=".3em"
                font-size="7"
              >
                Rest
              </text>
            )}
          </svg>
        </div>

        {/* Sessions counter */}
        <div
          id="microdote-timer-sessions"
          style={{
            opacity: showSettings() ? 0 : 1,
            visibility: showSettings() ? "hidden" : "visible",
            transition: "opacity 0.3s ease-in-out, visibility 0.3s ease-in-out",
          }}
        >
          <p id="microdote-completed-label">Completed Work Sessions</p>
          <p id="microdote-completed-sessions">{completedSessions()}</p>
        </div>

        {/* Settings and controls */}
        <div id="microdote-timer-function">
          {/* Settings panel */}
          <div
            id="microdote-timer-settings"
            style={{
              opacity: showSettings() ? 1 : 0,
              visibility: showSettings() ? "visible" : "hidden",
              transition:
                "opacity 0.3s ease-in-out, visibility 0.3s ease-in-out",
            }}
          >
            <span
              class="btn-icon"
              id="microdote-close-settings"
              onClick={() => setShowSettings(false)}
            >
              <i class="fa fa-times"></i>
            </span>
            <form id="microdote-timer-form" onSubmit={onSubmit}>
              <p class="microdote-timer-line">
                <label for="work-duration">Work Duration:</label>
                <input
                  type="number"
                  id="work-duration"
                  value={workDuration()}
                  min="1"
                  onChange={handleWorkDurationChange}
                />
              </p>
            </form>
          </div>

          {/* Control buttons */}
          <div
            id="microdote-timer-buttons"
            style={{
              opacity: showSettings() ? 0 : 1,
              visibility: showSettings() ? "hidden" : "visible",
              transition:
                "opacity 0.3s ease-in-out, visibility 0.3s ease-in-out",
            }}
          >
            <button
              class="bg-red-800"
              id="pause-btn"
              type="button"
              onClick={onPause}
              style={{ display: !isPaused() ? "inline-block" : "none" }}
            >
              <i class="fa fa-pause"></i>
            </button>
            <button
              class="bg-red-800"
              id="start-btn"
              type="button"
              onClick={onStart}
              style={{ display: isPaused() ? "inline-block" : "none" }}
            >
              <i class="fa fa-play"></i>
            </button>
          </div>
        </div>
      </div>
      <div class="absolute top-10 right-0 mt-10">
        <Tasks user={props.user} />
      </div>
    </>
  );
};

export default GapTimer;
