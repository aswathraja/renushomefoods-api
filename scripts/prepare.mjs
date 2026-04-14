import { chmodSync, copyFileSync, mkdirSync, readdirSync } from "fs"
import { dirname, join } from "path"

const hooksSrc = join(dirname(), "hooks")
const hooksDest = join(dirname(), "..", ".git", "hooks")

mkdirSync(hooksDest, { recursive: true })

readdirSync(hooksSrc).forEach((file) => {
    const src = join(hooksSrc, file)
    const dest = join(hooksDest, file)

    copyFileSync(src, dest)
    chmodSync(dest, 0o755)
})
