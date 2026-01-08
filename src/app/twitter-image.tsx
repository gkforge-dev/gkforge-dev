import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Gopal Khichar - Lead Software Engineer'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0a0a0a',
          backgroundImage: 'radial-gradient(circle at 25% 25%, #111 0%, #0a0a0a 50%)',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '20px',
          }}
        >
          <div
            style={{
              fontSize: '64px',
              fontWeight: 'bold',
              color: '#00d9ff',
              textShadow: '0 0 30px rgba(0, 217, 255, 0.5)',
            }}
          >
            Gopal Khichar
          </div>
          
          <div
            style={{
              fontSize: '32px',
              color: '#ffb000',
            }}
          >
            ⚡ Code Your Thoughts. ⚡
          </div>
          
          <div
            style={{
              fontSize: '28px',
              color: '#39ff14',
              marginTop: '10px',
            }}
          >
            Lead Software Engineer | AWS | AI/ML | Node.js
          </div>
          
          <div
            style={{
              fontSize: '22px',
              color: '#666',
              marginTop: '20px',
            }}
          >
            gkforge.dev
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}

