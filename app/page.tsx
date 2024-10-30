import { Divider } from 'antd';
import Image from 'next/image';
import ColorCardGrid from '@/app/components/cards/color-card-grid';

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
      <ColorCardGrid />
    </main>
  );
}
