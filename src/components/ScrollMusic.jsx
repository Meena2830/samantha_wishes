import { useEffect, useRef, useState } from "react";

const AUDIO_TRACKS = [
  {
    id: "opening",
    label: "Start",
    title: "Ulaga Pookalin Vasam",
    files: ["/audio/ulaga-pookalin-vasam.mp3"],
    range: [0, 0.34],
  },
  {
    id: "memories",
    label: "Middle",
    title: "Hema Kisses Prabhu",
    files: ["/audio/hema-kisses-prabhu-bgm.mp3"],
    range: [0.34, 0.68],
  },
  {
    id: "reveal",
    label: "Final Reveal",
    title: "She Points Her Finger",
    files: [
      "/audio/she-points-her-finger-bgm.mp3",
      "/audio/soundtrack.mp3",
    ],
    range: [0.68, 1],
  },
];

const BASE_VOLUME = 0.24;
const FADE_STEP = 0.05;

function createAudio() {
  const audio = new Audio();
  audio.loop = true;
  audio.preload = "auto";
  audio.volume = 0;
  return audio;
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

export default function ScrollMusic() {
  const tracksRef = useRef([]);
  const fadeFrameRef = useRef(0);
  const progressRef = useRef(0);
  const activeTrackRef = useRef(null);
  const startedRef = useRef(false);
  const autoplayAttemptedRef = useRef(false);

  const [started, setStarted] = useState(false);
  const [error, setError] = useState("");

  // INIT AUDIO
  useEffect(() => {
    tracksRef.current = AUDIO_TRACKS.map((track) => ({
      ...track,
      audio: createAudio(),
    }));

    return () => {
      window.cancelAnimationFrame(fadeFrameRef.current);
      tracksRef.current.forEach(({ audio }) => {
        audio.pause();
        audio.src = "";
      });
    };
  }, []);

  // SCROLL TRACK SWITCH
  useEffect(() => {
    const updateProgress = () => {
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight || 1;
      progressRef.current = clamp(window.scrollY / maxScroll, 0, 1);
      syncTrack();
    };

    window.addEventListener("scroll", updateProgress);
    updateProgress();

    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  const getTrack = (progress) =>
    AUDIO_TRACKS.find(
      (track) => progress >= track.range[0] && progress < track.range[1]
    ) || AUDIO_TRACKS[AUDIO_TRACKS.length - 1];

  // PLAY TRACK
  const playTrack = async (track) => {
    try {
      track.audio.src = track.files[0]; // direct path
      await track.audio.play();
      return true;
    } catch (err) {
      console.log("Audio error:", err);
      return false;
    }
  };

  // FADE EFFECT
  const fadeToTrack = (trackId) => {
    cancelAnimationFrame(fadeFrameRef.current);

    const animate = () => {
      let running = false;

      tracksRef.current.forEach((track) => {
        const isActive =
          track.id === trackId && startedRef.current;

        const targetVolume = isActive ? BASE_VOLUME : 0;
        const diff = targetVolume - track.audio.volume;

        if (Math.abs(diff) > 0.01) {
          track.audio.volume += diff * FADE_STEP;
          running = true;
        } else {
          track.audio.volume = targetVolume;
        }

        if (isActive && track.audio.paused) {
          playTrack(track);
        }

        if (!isActive && track.audio.volume === 0) {
          track.audio.pause();
        }
      });

      if (running) {
        fadeFrameRef.current = requestAnimationFrame(animate);
      }
    };

    fadeFrameRef.current = requestAnimationFrame(animate);
  };

  // SYNC TRACK
  const syncTrack = () => {
    const next = getTrack(progressRef.current);

    if (activeTrackRef.current !== next.id) {
      activeTrackRef.current = next.id;

      if (startedRef.current) {
        fadeToTrack(next.id);
      }
    }
  };

  const beginSoundtrack = async () => {
    if (startedRef.current) return;

    const track = getTrack(progressRef.current);

    const success = await playTrack(
      tracksRef.current.find((t) => t.id === track.id)
    );

    if (!success) {
      setError("Audio failed to play");
      return false;
    }

    startedRef.current = true;
    setStarted(true);
    setError("");

    fadeToTrack(track.id);
    return true;
  };

  useEffect(() => {
    if (autoplayAttemptedRef.current || !tracksRef.current.length) {
      return;
    }

    autoplayAttemptedRef.current = true;

    const tryAutoplay = async () => {
      const success = await beginSoundtrack();

      if (success) {
        return;
      }

      const unlockAudio = async () => {
        setError("");
        await beginSoundtrack();
      };

      window.addEventListener("pointerdown", unlockAudio, { once: true });
      window.addEventListener("keydown", unlockAudio, { once: true });
    };

    tryAutoplay();
  }, []);

  // START MUSIC
  const startSoundtrack = async () => {
    setError("");
    await beginSoundtrack();
  };

  const stopSoundtrack = () => {
    cancelAnimationFrame(fadeFrameRef.current);
    startedRef.current = false;
    setStarted(false);

    tracksRef.current.forEach(({ audio }) => {
      audio.volume = 0;
      audio.pause();
      audio.currentTime = 0;
    });
  };

  return (
    <div className="music-control">
      <button
        type="button"
        className={`music-button-icon ${started ? "is-playing" : ""} ${error ? "has-error" : ""}`}
        onClick={started ? stopSoundtrack : startSoundtrack}
        aria-label={started ? "Stop music" : "Play music"}
        title={
          error
            ? "Autoplay blocked. Click to play music."
            : started
              ? "Stop music"
              : "Play music"
        }
      >
        <span aria-hidden="true">{started ? "■" : "▶"}</span>
      </button>
    </div>
  );
}
