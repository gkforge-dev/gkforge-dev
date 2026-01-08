import { ImageResponse } from 'next/og'

export const size = {
  width: 180,
  height: 180,
}
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 100,
          background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#00d9ff',
          fontWeight: 'bold',
          fontFamily: 'monospace',
          borderRadius: '36px',
          textShadow: '0 0 20px rgba(0, 217, 255, 0.5)',
        }}
      >
        GK
      </div>
    ),
    {
      ...size,
    }
  )
}

