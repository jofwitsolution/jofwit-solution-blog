// Route Handler
// API End Point
// GET POST PUT/PATCH DELETE
export async function GET(request) {
  const users = ["femi", "bimpe"];

  return Response.json({ users });
}
