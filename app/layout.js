
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=' bg-zinc-800 text-white p-5'> {children}</body>
    </html>
  )
}
