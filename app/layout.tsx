import { ComboboxDemo } from "./components/Combobox";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="p-5">
        <div className="flex justify-center items-center my-5">
          <ComboboxDemo />
        </div>
        {children}
      </body>
    </html>
  );
}
