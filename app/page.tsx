import { Divider, Card } from 'antd';
import Image from 'next/image';

const cardRowStyle: React.CSSProperties = {
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  gap: '1rem',
  fontSize: '2rem',
};

export default function Home() {
  return (
    <main className={'home'}>
      <h1 style={{ fontSize: '6rem' }}>
        Hey, <br />
        I&apos;m Jake!
      </h1>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <h1 style={{ margin: '0 0 3rem 0' }}>
          🧑🏻‍💻 software engineer <br />
          🖥️ elegant UI&apos;s <br />
          🫧 clean and robust backends <br />
          💡 complex problem solving <br />
          🧩 dynamic solutions <br />
          <br />
          i&apos;m an avid soccer ⚽️ and F1 🏎️ fan <br />
          and proud girl dad! 👨🏻‍🍼
        </h1>
      </div>
      <div
        style={{
          margin: '0 auto',
          position: 'relative',
          height: 950,
          width: 742,
        }}
      >
        <Image src='/family.jpeg' alt='My family.' fill />
      </div>
      <Divider
        orientation='center'
        orientationMargin={5}
        style={{ borderColor: '#ffffff76' }}
      >
        <h1>What can you expect from me?</h1>
      </Divider>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          marginBottom: '3rem',
        }}
      >
        <div style={cardRowStyle}>
          <Card style={{ width: '60%', backgroundColor: '#87D8BF' }}>
            <p>
              Writing something in here...and then see if it wraps around the
              card if its too long
            </p>
          </Card>
          <Card style={{ width: '40%', backgroundColor: '#C4F458' }}>
            <p>
              Writing something in here...and then see if it wraps around the
              card if its too long
            </p>
          </Card>
        </div>
        <div style={cardRowStyle}>
          <Card style={{ width: '35%', backgroundColor: '#F1998C' }}>
            <p>
              Writing something in here...and then see if it wraps around the
              card if its too long
            </p>
          </Card>
          <Card style={{ width: '65%', backgroundColor: '#85CBDA' }}>
            <p>
              Writing something in here...and then see if it wraps around the
              card if its too long
            </p>
          </Card>
        </div>
        <div style={cardRowStyle}>
          <Card style={{ width: '45%', backgroundColor: '#9BB6EC' }}>
            <p>
              Writing something in here...and then see if it wraps around the
              card if its too long
            </p>
          </Card>
          <Card style={{ width: '55%', backgroundColor: '#B196D0' }}>
            <p>
              Writing something in here...and then see if it wraps around the
              card if its too long
            </p>
          </Card>
        </div>
      </div>
    </main>
  );
}
