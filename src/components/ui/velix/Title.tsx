export default function Title({
  name,
  subtitle
}: {
  name: string;
  subtitle: string;
}) {
  return (
    <div className="flex flex-col font-space-grotesk gap-4">
      <h2 className="font-bold text-4xl">{name}</h2>
      <p className="text-velix-gray font-normal text-base">{subtitle}</p>
    </div>
  );
}
