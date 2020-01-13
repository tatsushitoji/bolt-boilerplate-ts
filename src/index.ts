import { app } from './app'
import { echo } from './commands/echo'

const runBolt = async () => {
  await app.start(process.env.PORT || 3000)
  console.log('⚡️ Bolt app is running!')
}

runBolt().then(echo)
