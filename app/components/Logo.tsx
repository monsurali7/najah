export default function Logo({
  height = 40,
}: {
  height?: number;
  inverted?: boolean;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/treelogo.png"
      alt=""
      style={{
        height: `${height}px`,
        width: 'auto',
        display: 'block',
      }}
    />
  );
}
