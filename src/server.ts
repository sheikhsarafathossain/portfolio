import { createRequestHandler } from '@tanstack/react-start/server'
import { createMemoryHistory } from '@tanstack/react-router'
import { StartServer } from '@tanstack/react-start'
import { createRouter } from './router'

export default createRequestHandler({
  createRouter: () => createRouter({ history: createMemoryHistory() }),
})