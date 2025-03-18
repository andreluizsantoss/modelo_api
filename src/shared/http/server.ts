import { app } from './app'
import { env } from '@shared/env'

app.listen(env.PORT, () => {
  console.log(`Server started on port ${env.PORT} !!!`)
})
