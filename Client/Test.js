const { openBrowser, goto, textBox, focus, write, click, closeBrowser } = require('taiko');

(async () => {
    try {
        await openBrowser();
        await goto("http://13.57.246.185:3000");
        isTitleExists = await text(/To do List/i).exists()
        if(!isTitleExists){
            process.exit(1);
        }; 
        await focus(textBox());
        await write("Test Taiko");
        await click("Add");
        islistItemExists = await listItem("Test Taiko").exists()
        if(!islistItemExists){
            process.exit(1);
        };  
    } catch (error) {
        console.error(error);
    } finally {
        await closeBrowser();
    }
})();