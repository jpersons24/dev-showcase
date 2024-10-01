import { Card } from 'antd';

export default function ColorCard({
  color,
  width,
  children,
}: {
  color: string;
  width: string;
  children: React.ReactNode;
}) {
  return <Card style={{ width, backgroundColor: color }}>{children}</Card>;
}
