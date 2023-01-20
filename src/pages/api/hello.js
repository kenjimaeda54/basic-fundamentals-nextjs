// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


// aqui e para construção de uma api em nodejs
// exemplo : http://localhost:3000/api/hello
//a responsta sera objeto { name: 'John Doe' }

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}
