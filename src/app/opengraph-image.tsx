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
        {/* Terminal Window */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '90%',
            maxWidth: '1000px',
            backgroundColor: '#111',
            borderRadius: '12px',
            border: '1px solid #333',
            overflow: 'hidden',
          }}
        >
          {/* Terminal Header */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '12px 16px',
              backgroundColor: '#1a1a1a',
              borderBottom: '1px solid #333',
            }}
          >
            <div style={{ display: 'flex', gap: '8px' }}>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ff5f57' }} />
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ffbd2e' }} />
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#28c840' }} />
            </div>
            <div style={{ flex: 1, textAlign: 'center', color: '#666', fontSize: '14px' }}>
              gopal@portfolio: ~
            </div>
          </div>
          
          {/* Terminal Body */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              padding: '32px',
              gap: '16px',
            }}
          >
            {/* Name */}
            <div
              style={{
                fontSize: '48px',
                fontWeight: 'bold',
                color: '#00d9ff',
                textShadow: '0 0 20px rgba(0, 217, 255, 0.5)',
              }}
            >
              Gopal Khichar
            </div>
            
            {/* Tagline */}
            <div
              style={{
                fontSize: '28px',
                color: '#ffb000',
                marginBottom: '8px',
              }}
            >
              ⚡ Code Your Thoughts. ⚡
            </div>
            
            {/* Role */}
            <div
              style={{
                fontSize: '24px',
                color: '#39ff14',
              }}
            >
              Lead Software Engineer
            </div>
            
            {/* Skills */}
            <div
              style={{
                display: 'flex',
                gap: '12px',
                marginTop: '16px',
                flexWrap: 'wrap',
              }}
            >
              {['AWS', 'Node.js', 'Python', 'React', 'AI/ML', 'TensorFlow'].map((skill) => (
                <div
                  key={skill}
                  style={{
                    padding: '8px 16px',
                    backgroundColor: 'rgba(0, 217, 255, 0.1)',
                    border: '1px solid #00d9ff',
                    borderRadius: '6px',
                    color: '#00d9ff',
                    fontSize: '16px',
                  }}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Website URL */}
        <div
          style={{
            marginTop: '24px',
            fontSize: '20px',
            color: '#666',
          }}
        >
          gkforge.dev
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}

