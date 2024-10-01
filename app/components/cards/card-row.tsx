const styles: React.CSSProperties = {
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  gap: '1rem',
  fontSize: '2rem',
};

export default function CardRow({ children }: { children: React.ReactNode }) {
  return <div style={styles}>{children}</div>;
}
