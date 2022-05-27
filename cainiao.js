auto.waitFor();
app.launchApp("菜鸟");

enterJobPage();

while (1) {
    log("准备做任务");
    nextMission = text("去完成").findOne();
    nextMission.click();
    log("点击去完成");
    //等待加载完成任务页面，可能要调整
    sleep(1000);
    if (text("滑动开始计时").exists()) {
        log("滑动开始计时");
        swipe(35 + random(10, 20), 1828 + random(10, 20), 35 + random(10, 20), 978 + random(10, 20), 1000 + random(100, 200));
        swipe(35 + random(10, 20), 1828 + random(10, 20), 35 + random(10, 20), 978 + random(10, 20), 1000 + random(100, 200));
        swipe(35 + random(10, 20), 1828 + random(10, 20), 35 + random(10, 20), 978 + random(10, 20), 1000 + random(100, 200));
        sleep(35000);

        back();
        enterJobPage();
        continue;
    }

    log("不认识的任务");
    toast("不认识的任务");
    back();
    enterJobPage();
}

toast("尽可能地完成任务");

function enterJobPage() {
    text("包裹梦工厂").waitFor();
    click("包裹梦工厂");
    text("做任务得碎片").waitFor();
    click("做任务得碎片");
    text("去完成").waitFor();
    sleep(1000);
}
