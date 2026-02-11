export const metadata = {
  title: "TruthScan",
  description: "Brutally Honest AI Analysis",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, background: "#000", color: "#fff", fontFamily: "Arial, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
