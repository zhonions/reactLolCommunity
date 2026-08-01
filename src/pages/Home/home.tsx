import { useRef } from "react";
import { Link } from "react-router-dom";
import "./home.scss";

const Home = () => {
  const videoRef = useRef<HTMLIFrameElement>(null);
  const hasUserInteractedRef = useRef(false);
  const isMutedRef = useRef(false);

  const toggleSound = () => {
    const player = videoRef.current?.contentWindow;
    if (!player) return;

    const sendCommand = (func: string, args: unknown[] = []) => {
      player.postMessage(
        JSON.stringify({ event: "command", func, args }),
        "https://www.youtube.com",
      );
    };

    if (!hasUserInteractedRef.current || isMutedRef.current) {
      sendCommand("unMute");
      sendCommand("setVolume", [100]);
      sendCommand("playVideo");
      isMutedRef.current = false;
    } else {
      sendCommand("mute");
      isMutedRef.current = true;
    }

    hasUserInteractedRef.current = true;
  };

  return (
    <section className="home-video" aria-label="Featured video">
      <iframe
        ref={videoRef}
        className="home-video-player"
        src="https://www.youtube.com/embed/WWFvGXOXm9w?autoplay=1&loop=1&playlist=WWFvGXOXm9w&playsinline=1&controls=0&fs=0&disablekb=1&cc_load_policy=0&iv_load_policy=3&rel=0&showinfo=0&enablejsapi=1"
        title="Featured League of Legends video"
        allow="autoplay; encrypted-media; picture-in-picture"
        allowFullScreen
      />
      <button
        className="home-video-shield"
        type="button"
        aria-label="Ativar ou desativar som do vídeo"
        onClick={toggleSound}
      />
      <div className="home-video-content">
        <Link className="home-video-cta" to="/account">
          Entrar
        </Link>
      </div>
    </section>
  );
};

export default Home;
