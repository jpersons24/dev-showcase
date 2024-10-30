import { ColorCardProps } from './color-card';

export const colorCardData: ColorCardProps[] = [
  {
    columnStart: 1,
    columnEnd: 12,
    row: 1,
    color: '#87D8BF',
    children: (
      <p className={'color-card-text'}>
        Proficiency in front-end development with the latest Javascript,
        Typescript, React, Next.js and more technologies and practices.
      </p>
    ),
  },
  {
    columnStart: 12,
    columnEnd: 21,
    row: 1,
    color: '#C4F458',
    children: (
      <p className={'color-card-text'}>
        Cross functional collaboration skills.
      </p>
    ),
  },
  {
    columnStart: 1,
    columnEnd: 7,
    row: 2,
    color: '#F1998C',
    children: <p className={'color-card-text'}>Extreme curiousity.</p>,
  },
  {
    columnStart: 7,
    columnEnd: 21,
    row: 2,
    color: '#85CBDA',
    children: (
      <p className={'color-card-text'}>
        Full-stack development experience with technologies like Node.js,
        Express, Golang and MySQL.
      </p>
    ),
  },
  {
    columnStart: 1,
    columnEnd: 9,
    row: 3,
    color: '#9BB6EC',
    children: (
      <p className={'color-card-text'}>
        Headstrong approach to problem solving...anything is possible!
      </p>
    ),
  },
  {
    columnStart: 9,
    columnEnd: 21,
    row: 3,
    color: '#B196D0',
    children: (
      <p className={'color-card-text'}>
        Motivation to learn and grow as a team member and individual to
        contribute to successful, continuously improving environment.
      </p>
    ),
  },
];
