import { app } from '../app'

export const echo = () => {
  app.command('/echo', ({ command, say, ack }) => {
    ack()
    say(`${command.text}`)
  })
}
