export function FormHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div>
      <h1 className="text-2xl font-semibold">{title}</h1>
      <h2 className="text-xl font-normal">{subtitle}</h2>
    </div>
  );
}
