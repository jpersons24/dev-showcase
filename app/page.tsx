import { Divider } from 'antd';
import Image from 'next/image';
import CardRow from '@/app/components/cards/card-row';
import ColorCard from '@/app/components/cards/color-card';

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
        <CardRow>
          <ColorCard width={'60%'} color={'#87D8BF'}>
            <p className={'color-card-text'}>
              Proficiency in front-end development with the latest Javascript,
              Typescript, React, Next.js and more technologies and practices.
            </p>
          </ColorCard>
          <ColorCard width={'40%'} color={'#C4F458'}>
            <p className={'color-card-text'}>
              Cross functional collaboration skills.
            </p>
          </ColorCard>
        </CardRow>
        <CardRow>
          <ColorCard width={'35%'} color={'#F1998C'}>
            <p className={'color-card-text'}>Extreme curiousity.</p>
          </ColorCard>
          <ColorCard width={'65%'} color={'#85CBDA'}>
            <p className={'color-card-text'}>
              Full-stack development experience with technologies like Node.js,
              Express, Golang and MySQL.
            </p>
          </ColorCard>
        </CardRow>
        <CardRow>
          <ColorCard width={'45%'} color={'#9BB6EC'}>
            <p className={'color-card-text'}>
              Headstrong approach to problem solving...anything is possible!
            </p>
          </ColorCard>
          <ColorCard width={'55%'} color={'#B196D0'}>
            <p className={'color-card-text'}>
              Motivation to learn and grow as a team member and individual to
              contribute to successful, continuously improving environment.
            </p>
          </ColorCard>
        </CardRow>
      </div>
    </main>
  );
}
