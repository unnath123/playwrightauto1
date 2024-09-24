const { test, expect } = require('@playwright/test');

test("second test", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    const table = await page.locator("table[name='BookTable']");

    const cols = await table.locator("th").count();

    console.log("this is the columns count = ",cols)

    const rows = await table.locator("tr")

    console.log("this is the rows count = ", await rows.count());

    const matchedRow = await rows.filter({
        has: page.locator("td"),
        hasText: "Animesh"
    })

    console.log("rows in answer ROW",await matchedRow.count());

    console.log("matched ROW", matchedRow)

    const arr = matchedRow.locator("td")

    for(let i=0; i<4; i++){
       const ans =  await arr.nth(i).textContent();
       console.log(ans)
    }

})
