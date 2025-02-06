import React from "react"
import { ThemeProvider } from "./hooks/useTheme"
import { Chat } from "./components/chat"

export default function App() {
    return (
        // <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <main className="min-h-screen p-4 bg-gray-50">
                <Chat />
            </main>
        // </ThemeProvider>
    )
}