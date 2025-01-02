export const metadata = {
  title: "Restaurant Table Booking",
  description: "Book a table at your favorite restaurant!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-gray-900 text-gray-200">
        {/* Header */}
        <header className="bg-gradient-to-r from-purple-700 via-pink-600 to-red-500 text-white py-6 shadow-md">
          <h1 className="text-4xl font-extrabold text-center tracking-wide uppercase text-white">
            🍽️ Restaurant Booking System
          </h1>
        </header>

        {/* Main Content */}
        <main className="flex-grow p-6 container mx-auto">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">{children}</div>
        </main>

        {/* Footer */}
        <footer className="bg-gray-800 text-gray-400 py-4 text-center border-t border-gray-700">
          <p className="text-sm">
            © 2025 Restaurant Booking System | All Rights Reserved
          </p>
          <p className="text-xs mt-1">
            Designed with ❤️ by Harit
          </p>
        </footer>
      </body>
    </html>
  );
}
