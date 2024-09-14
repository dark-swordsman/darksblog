import DarkContainer from "../components/DarkContainer/DarkContainer";
import Navbar from "../components/Navbar/Navbar";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-zinc-900 text-sky-200">
        <Navbar />
        <DarkContainer>
          <div className="my-10 px-6 w-full">
            {children}
          </div>
        </DarkContainer>
      </body>
    </html>
  )
}