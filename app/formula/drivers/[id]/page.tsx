export default function DriverPage({ params }: { params: { id: number } }) {
  const id = params.id;
  return <div>{`Driver Page ${id}`}</div>;
}
