import React from 'react';
import { Card } from 'antd';

export interface ColorCardProps {
  columnStart: number;
  columnEnd: number;
  row: number;
  color: string;
  children?: React.ReactNode;
}

export default function ColorCard({
  columnStart,
  columnEnd,
  row,
  color,
  children,
}: ColorCardProps) {
  const style = {
    gridColumnStart: columnStart,
    gridColumnEnd: columnEnd,
    gridRow: row,
    backgroundColor: color,
  };

  return <Card style={style}>{children}</Card>;
}
