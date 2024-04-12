import { Banner, Footer } from "@/components";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <main className="m-4">
        <Banner />
        {children}
      </main>
      <Footer />
    </>
  );
}
