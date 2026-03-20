import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'fahrimert.dev — building things that ship';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0a0a0f',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          fontFamily: 'monospace',
          position: 'relative',
        }}
      >
        {/* Border accent */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '3px',
            background: '#00ff88',
          }}
        />

        {/* Terminal prompt */}
        <div
          style={{
            color: '#00ff88',
            fontSize: '22px',
            marginBottom: '24px',
            display: 'flex',
          }}
        >
          &gt; fahrimert.dev
        </div>

        {/* Main title */}
        <div
          style={{
            color: '#e4e4ec',
            fontSize: '64px',
            fontWeight: 'bold',
            lineHeight: 1.1,
            marginBottom: '24px',
            display: 'flex',
          }}
        >
          building things that ship
        </div>

        {/* Description */}
        <div
          style={{
            color: '#6b6b80',
            fontSize: '28px',
            display: 'flex',
          }}
        >
          I build tools for developers, freelancers, and the internet.
        </div>

        {/* Bottom tag */}
        <div
          style={{
            position: 'absolute',
            bottom: '60px',
            right: '80px',
            color: '#6b6b80',
            fontSize: '20px',
            display: 'flex',
          }}
        >
          @fahrimertdev
        </div>
      </div>
    ),
    { ...size }
  );
}
