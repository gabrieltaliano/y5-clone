export const metadata = {
  title: 'Y5 - Clone',
  description: 'by Gabriel Taliano',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
