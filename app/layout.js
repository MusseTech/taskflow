import "./globals.css";

export const metadata = {
    title: "TaskFlow",
    description: "Manage your tasks efficiently",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}