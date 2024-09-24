const { test, expect } = require('@playwright/test');

test("second test", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    const table = await page.locator("table[id='productTable']");

    const cols = await table.locator("thead tr th");
    const ColsCount = await cols.count();

    console.log("this is the columns count = ",ColsCount)

    const rows = await table.locator("tbody tr")

    const RowCount = await rows.count();

    console.log("this is the rows count = ", RowCount);

    // const matchedRow = await rows.filter({
    //     has: page.locator("td"),
    //     hasText: "Animesh"
    // })

   // console.log("rows in answer ROW",await matchedRow.count());
   // console.log("matched ROW", matchedRow)

   await gothillla(rows, page, "Product 1")
   await gothillla(rows, page, "Product 2")
   await gothillla(rows, page, "Product 3")

    // const arr = matchedRow.locator("td")
    // for(let i=0; i<4; i++){
    //    const ans =  await arr.nth(i).textContent();
    //    console.log(ans)
    // }
     

})

async function gothillla(rows, page, identifier){
    const matchedRow = await rows.filter({
        has: page.locator("td"),
        hasText: identifier
    })
    const arr = matchedRow.locator("td")
    await anotherOne(arr)
}

async function anotherOne(arr){
    for(let i=0; i<3; i++){
       const ans =  await arr.nth(i).textContent();
       console.log(ans);
    }
}
