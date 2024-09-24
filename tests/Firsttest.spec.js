const { test, expect } = require('@playwright/test');

test("first test", async( {page})=>{
    await page.goto("https://www.airbnb.co.in/");

    await page.locator("#bigsearch-query-location-input").fill("Benga")

    const inputcontent = await page.locator("#bigsearch-query-location-input").inputValue();

    const suggestionValue =  await page.locator("div[id=bigsearch-query-location-listbox]");
    const suggestionValues = await suggestionValue.locator("div[role='option']");

    const num = await suggestionValues.count()

    console.log("number of elements = ",num);

    for (let i = 0; i < 3; i++) {
        const text = await suggestionValues.nth(i).textContent(); // Accessing the i-th option
        console.log("Option " + (i + 1) + ": " + text);
    
    }
    console.log("this is the text",inputcontent);
})