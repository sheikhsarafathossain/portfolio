import {
  RootRoute,
  Router,
} from '@tanstack/react-router'
import Root from './routes/Root'
import Index from './routes/Index'

const rootRoute = new RootRoute({
  component: Root,
})

const indexRoute = new RootRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Index,
})

export function createRouter(opts?: any) {
  return new Router({
    routeTree: rootRoute.addChildren([indexRoute]),
    ...opts,
  })
}

declare module '@tanstack/react-router' {
  interface Register {
    router: ReturnType<typeof createRouter>
  }
}