export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex items-center justify-center h-screen">
      <div className="p-8 pt-16 bg-white rounded-lg">{children}</div>
    </main>
  );
}
