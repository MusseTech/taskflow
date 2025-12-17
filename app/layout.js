import "./globals.css";
import { MantineProvider } from "@mantine/core";
import '@mantine/core/styles.css';

export const metadata = {
    title: "Doable",
    description: "Make it doable.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <MantineProvider>
                    {children}
                    </MantineProvider>
            </body>
        </html>
    );
}