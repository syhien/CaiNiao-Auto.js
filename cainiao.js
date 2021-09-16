auto.waitFor();
app.launchApp("菜鸟");

text("包裹梦工厂").waitFor();
click("包裹梦工厂");

text("做任务得包裹").waitFor();
click("做任务得包裹");
text("任务数量").waitFor();
sleep(1000);

while (className("android.view.View").textStartsWith("已完成").findOnce().text() != "已完成16/16") {
    nextMission = text("去完成").findOne();
    nextMission.click();
    log("点击去完成");
    //等待加载完成任务页面，可能要调整
    sleep(2000);
    if (text("滑动开始计时").exists()) {
        log("滑动开始计时");
        swipe(35 + random(10, 20), 1828 + random(10, 20), 35 + random(10, 20), 978 + random(10, 20), 1000 + random(100, 200));
        swipe(35 + random(10, 20), 1828 + random(10, 20), 35 + random(10, 20), 978 + random(10, 20), 1000 + random(100, 200));
        swipe(35 + random(10, 20), 1828 + random(10, 20), 35 + random(10, 20), 978 + random(10, 20), 1000 + random(100, 200));
        sleep(2100);

        back();
        text("包裹梦工厂").waitFor();
        click("包裹梦工厂");
        text("做任务得包裹").waitFor();
        click("做任务得包裹");
        text("任务数量").waitFor();
        continue;
    }

    if (textContains("商品加入购物车").exists()) {
        log("商品加入购物车");
        //sleep(random(900,1300));
        for (var i = 0; i < 5; i++) {
            textStartsWith("¥").findOne().parent().click();
            id("title_bar_container_view_title").waitFor();
            sleep(500);
            back();
            sleep(500);
        }

        sleep(1000);
        back();
        text("包裹梦工厂").waitFor();
        click("包裹梦工厂");
        text("做任务得包裹").waitFor();
        click("做任务得包裹");
        text("任务数量").waitFor();
        continue;
    }

    if (text("天天领红包").exists()) {
        log("天天领红包");
        if (text("浏览本页面，红包可翻倍").exists()) {
            text("x").click();
            sleep(500);
        }
        swipe(35 + random(10, 20), 1828 + random(10, 20), 35 + random(10, 20), 978 + random(10, 20), 1000 + random(100, 200));
        swipe(35 + random(10, 20), 1828 + random(10, 20), 35 + random(10, 20), 978 + random(10, 20), 1000 + random(100, 200));
        swipe(35 + random(10, 20), 1828 + random(10, 20), 35 + random(10, 20), 978 + random(10, 20), 1000 + random(100, 200));
        sleep(21000);
        back();
        sleep(500);
        click("忍痛离开");

        sleep(1000);
        back();
        text("包裹梦工厂").waitFor();
        click("包裹梦工厂");
        text("做任务得包裹").waitFor();
        click("做任务得包裹");
        text("任务数量").waitFor();
        continue;
    }

    if (textStartsWith("O1CN01").exists()) {
        log("答题");
        sleep(500);
        textStartsWith("C、").click();

        sleep(1000);
        back();
        text("包裹梦工厂").waitFor();
        click("包裹梦工厂");
        text("做任务得包裹").waitFor();
        click("做任务得包裹");
        text("任务数量").waitFor();
        continue;
    }

    log("不认识的任务");
    click("做任务得包裹");
    text("任务数量").waitFor();
}

toast("完成16个任务");