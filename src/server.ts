export default async (request: Request) => {
  return new Response('Portfolio is loading...', {
    status: 200,
    headers: { 'Content-Type': 'text/plain' },
  })
}