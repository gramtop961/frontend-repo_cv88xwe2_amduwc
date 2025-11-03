import React from 'react';
import Spline from '@splinetool/react-spline';

export default function BackgroundScene() {
  return (
    <div className="fixed inset-0 z-0">
      <Spline scene="https://prod.spline.design/w0Qm8xho5uKc3k7R/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/60 to-black/90" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(79,70,229,0.15)_0%,_rgba(0,0,0,0)_45%)]" />
    </div>
  );
}
