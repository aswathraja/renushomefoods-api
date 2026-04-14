import { spawn } from "child_process"
import { rmSync } from "fs"

function safeRemove(path, options = {}) {
    try {
        rmSync(path, { recursive: true, force: true, ...options })
    } catch {
        //
    }
}

// साफ (clean build artifacts)
safeRemove("dist")
safeRemove("tsconfig.build.tsbuildinfo")

// Start NestJS using npx (cross-platform)
const child = spawn(
    process.platform === "win32" ? "npx.cmd" : "npx",
    ["nest", "start"],
    { stdio: "inherit" },
)

child.on("close", (code) => {
    process.exit(code)
})
