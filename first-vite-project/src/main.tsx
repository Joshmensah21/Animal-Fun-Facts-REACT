import { createRoot } from "react-dom/client"
import MainContent from "./index.tsx"

const root = createRoot(document.getElementById("root")!)
root.render(<MainContent />)