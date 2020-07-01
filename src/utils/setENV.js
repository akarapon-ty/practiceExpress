import dotenv from 'dotenv'
import fs from 'fs'

const envConfig = dotenv.parse(fs.readFileSync(`.env.${process.env.NODE_ENV}`))
for (const k in envConfig) {
  process.env[k] = envConfig[k]
}

export default dotenv