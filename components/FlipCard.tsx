'use client';

import { useState } from 'react';

export default function FlipCard() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flip-card-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        className={`flip-card ${isFlipped ? 'flipped' : ''}`}
        style={{
          width: '300px',
          height: '200px',
          perspective: '1000px',
          cursor: 'pointer',
        }}
      >
        <div
          className="flip-card-inner"
          style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            textAlign: 'center',
            transition: 'transform 0.6s',
            transformStyle: 'preserve-3d',
            transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
          }}
        >
          <div
            className="flip-card-front"
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              backfaceVisibility: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '2px solid',
              borderColor: isHovered ? 'white' : 'rgba(255, 255, 255, 0.2)',
              borderRadius: '12px',
              backgroundColor: isHovered ? 'white' : 'black',
              transition: 'all 0.3s ease',
              boxShadow: isHovered
                ? '0 0 30px rgba(255, 255, 255, 0.5)'
                : '0 0 0 rgba(255, 255, 255, 0)',
            }}
          >
            <h2
              className="text-4xl font-bold panicko-font"
              style={{
                color: isHovered ? 'black' : 'white',
                transition: 'color 0.3s ease',
              }}
            >
              FLIP ME.
            </h2>
          </div>

          <div
            className="flip-card-back"
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              backfaceVisibility: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '2px solid',
              borderColor: 'rgba(255, 255, 255, 0.2)',
              borderRadius: '12px',
              backgroundColor: 'black',
              transform: 'rotateY(180deg)',
              padding: '20px',
            }}
          >
            <p className="text-xl text-white font-medium">
              A Bot Made For Luxury & Speed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
