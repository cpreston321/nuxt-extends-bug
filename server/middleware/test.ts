export default defineEventHandler((event) => {
  event.context.aiware = { ping: 'pong' }
})
