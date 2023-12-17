// import db from "@/server/db/models"

// NOTE: 레시피 데이터를 공공 서비스에서 내 DB로 옮기기 위한 코드
// 총 1124개의 데이터가 있고 startIndex와 lastIndex를 이용해서 원하는 개수의 데이터를 입력가능하다. (단, 한번에 1000개가 최대 호출 개수)

export async function GET() {
  try {
    //     const res = await fetch(
    //       `https://openapi.foodsafetykorea.go.kr/api/${process.env.OPEN_DATA_KEY}/COOKRCP01/json/startIndex/lastIndex`
    //     )
    //     const data = await res.json()

    //     const {
    //       COOKRCP01: { row },
    //     } = data

    //     const mappingFn = (recipe) => ({
    //       title: recipe.RCP_NM,
    //       cook_method: recipe.RCP_WAY2,
    //       food_kind: recipe.RCP_PAT2,
    //       info_weight: recipe.INFO_WGT,
    //       info_calorie: parseInt(recipe.INFO_ENG),
    //       carbohydrate: parseInt(recipe.INFO_CAR),
    //       protein: parseInt(recipe.INFO_PRO),
    //       fat: parseInt(recipe.INFO_FAT),
    //       natrium: parseInt(recipe.INFO_NA),
    //       image_url: recipe.ATT_FILE_NO_MK,
    //       ingredients: recipe.RCP_PARTS_DTLS,
    //     })

    //     const result = row.map((recipe) => mappingFn(recipe))

    //     // 트랜잭션 시작
    //     await db.sequelize.transaction(async (t) => {
    //       // 데이터베이스에 데이터 삽입
    //       await db.sequelize.models.Recipe.bulkCreate(result, { transaction: t })
    //     })

    return Response.json("공공 데이터 옮기는 API")
  } catch (error) {
    //     console.error("Error fetching and inserting data:", error)
    //     return Response.error()
  }
}
