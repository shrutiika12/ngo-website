
import './globals.css';
import Navbar from '../components/Navbar';

export const metadata = {
  title: 'NGO Website',
  description: 'Simple NGO Website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className=" h-screen bg-[url('earth.jpg')] bg-cover bg-center bg-no-repeat  ">
        <Navbar />
        <main className="p-4">{children}</main>
      </body>
    </html>
  )
}

