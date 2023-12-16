export async function GET(request: Request) {
  const res = await fetch(
    `https://openapi.foodsafetykorea.go.kr/api/${process.env.OPEN_DATA_KEY}/COOKRCP01/json/1/5`
  )
  const data = await res.json()

  return Response.json({ data })
}
