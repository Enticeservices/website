import React from "react";

const css = `
.cs-animated-bg:root, .cs-animated-bg {
  background: var(--color-primary-dark);
  color: var(--color-light);
  font-size: 16px;
  overflow: hidden;
  position: relative;
}
.cs-animated-bg *,
.cs-animated-bg *:before,
.cs-animated-bg *:after {
  box-sizing: border-box;
}
.cs-animated-bg .cs-bg-layer {
  pointer-events: none;
  z-index: 1;
}
.cs-animated-bg .cs-bg1,
.cs-animated-bg .cs-bg2,
.cs-animated-bg .cs-bg3,
.cs-animated-bg .cs-bg4 {
  content: "";
  height: calc(100vh + 8em);
  width: calc(100vw + 8em);
  position: absolute;
  left: -4em;
  top: -4em;
  background:
    radial-gradient(circle, currentColor 0.5em, transparent 0.6em) 0 / 4em 8em,
    radial-gradient(circle, currentColor 0.5em, transparent 0.6em) 0 / 4em 8em;
  opacity: 0.35;
  will-change: transform, background-position;
}
.cs-animated-bg .cs-bg1 {
  color: var(--color-primary);
  animation: cs-triangle 8s infinite;
  background-position: 1em 1em, -1em 5em;
  z-index: 5;
}
@keyframes cs-triangle {
  33% {
    transform: translate(2em, 0em);
    background-position: 3em 1em, 1em 5em;
  }
  66% {
    transform: translate(1em, 2em);
    background-position: 2em 3em, 0em 7em;
  }
}
.cs-animated-bg .cs-bg2 {
  color: var(--color-primary-dark);
  animation: cs-heartbeat 8s infinite;
  background-position: 3em 1em, 1em 5em;
  z-index: 4;
}
@keyframes cs-heartbeat {
  33% {
    transform: translate(2em, 0em);
  }
  66% {
    transform: translate(3em, -2em);
  }
  100% {
    transform: translate(4em, 0em);
  }
}
.cs-animated-bg .cs-bg3 {
  color: var(--color-primary);
  animation: cs-dent 8s infinite;
  background-position: 2em 3em, 4em 7em;
  z-index: 3;
}
@keyframes cs-dent {
  33% {
    transform: translate(-2em, 0em);
  }
  66% {
    transform: translate(-1em, -2em);
  }
  100% {
    transform: translate(-2em, -4em);
  }
}
.cs-animated-bg .cs-bg4 {
  color: var(--color-primary-dark);
  animation: cs-semicircle 8s infinite;
  background-position: 4em 3em, 2em 7em;
  z-index: 2;
}
@keyframes cs-semicircle {
  33% {
    transform: translate(-2em, 0em);
  }
  66% {
    transform: translate(-3em, 2em);
  }
  100% {
    transform: translate(-2em, 4em);
  }
}
`;

export default function Banner() {
  React.useEffect(() => {
    // Add global styles only once
    let styleTag = document.getElementById("cs-banner-animated-bg");
    if (!styleTag) {
      styleTag = document.createElement("style");
      styleTag.id = "cs-banner-animated-bg";
      styleTag.innerHTML = css;
      document.head.appendChild(styleTag);
    }
    return () => { /* keep style persistently */ };
  }, []);

  return (
    <div
      className="cs-animated-bg h-[20rem] md:h-[24rem] lg:h-[28rem] xl:h-[36rem] grid grid-cols-30 md:grid-cols-12 relative overflow-hidden max-w-[100vw]"
    >
      <div className="cs-bg-layer cs-bg1" aria-hidden="true" />
      <div className="cs-bg-layer cs-bg2" aria-hidden="true" />
      <div className="cs-bg-layer cs-bg3" aria-hidden="true" />
      <div className="cs-bg-layer cs-bg4" aria-hidden="true" />
      <div className='relative col-start-2 col-end-30 md:col-end-12 flex flex-col gap-2 md:gap-6 pb-6 lg:py-20 justify-end h-full z-50'>
        <span className='text-3xl title md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-white leading-tight max-w-3xl'>
          Case Studies
        </span>
        <span className='text-sm md:text-base lg:text-lg pr-6 md:pr-0 xl:text-xl text-white/90 leading-relaxed pt-2 block max-w-2xl'>
          Discover how we've helped businesses transform their demand generation strategies and achieve remarkable results.
        </span>
      </div>
    </div>
  );
}
