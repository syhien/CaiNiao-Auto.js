auto.waitFor();
app.launchApp("菜鸟");

enterJobPage();

while (1) {
    log("准备做任务");

    nextMissionButton = text("去完成").findOne();
    // 获取任务描述
    missionDesc = nextMissionButton.parent().parent().child(1).child(0).child(0).text();
    log("任务描述：" + missionDesc);

    // “浏览主会场”开头任务
    if (missionDesc.startsWith("浏览主会场")) {
        log("主会场浏览任务");
        nextMissionButton.click();
        sleep(1000);
        log("滑动开始计时");
        swipe(35 + random(10, 20), 1828 + random(10, 20), 35 + random(10, 20), 978 + random(10, 20), 1000 + random(100, 200));
        swipe(35 + random(10, 20), 1828 + random(10, 20), 35 + random(10, 20), 978 + random(10, 20), 1000 + random(100, 200));
        swipe(35 + random(10, 20), 1828 + random(10, 20), 35 + random(10, 20), 978 + random(10, 20), 1000 + random(100, 200));
        sleep(35000);

        back();
        enterJobPage();
        continue;
    }

    // "浏览天天领红包"开头任务
    if (missionDesc.startsWith("浏览天天领红包")) {
        log("天天领红包浏览任务");
        nextMissionButton.click();
        if (text("x").exists()) {
            text("x").click();
            sleep(500);
        }
        sleep(3000);
        sleep(21000);
        back();
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
