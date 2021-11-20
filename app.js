import { createServer } from 'http'

const hostname = '127.0.0.1'
const port = 3000

const server = createServer((req, res) => {
  res.end(gen.next().value + '')
})

function* fibo() {
  let a = 0,
    b = 1
  while (true) {
    ;[a, b] = [b, a + b]
    yield a
  }
}
let gen = fibo()

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})
