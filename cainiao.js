auto.waitFor();
app.launchApp("菜鸟");

text("包裹梦工厂").waitFor();
click("包裹梦工厂");

text("做任务得包裹").waitFor();
click("做任务得包裹");
text("换一换").waitFor();
sleep(1000);

while (1) {
    log("准备做任务");
    nextMission = text("去完成").findOne();
    nextMission.click();
    log("点击去完成");
    //等待加载完成任务页面，可能要调整
    sleep(4000);
    if (text("滑动开始计时").exists()) {
        log("滑动开始计时");
        swipe(35 + random(10, 20), 1828 + random(10, 20), 35 + random(10, 20), 978 + random(10, 20), 1000 + random(100, 200));
        swipe(35 + random(10, 20), 1828 + random(10, 20), 35 + random(10, 20), 978 + random(10, 20), 1000 + random(100, 200));
        swipe(35 + random(10, 20), 1828 + random(10, 20), 35 + random(10, 20), 978 + random(10, 20), 1000 + random(100, 200));
        sleep(21000);

        back();
        text("包裹梦工厂").waitFor();
        click("包裹梦工厂");
        text("做任务得包裹").waitFor();
        click("做任务得包裹");
        text("换一换").waitFor();
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

        sleep(2000);
        back();
        text("包裹梦工厂").waitFor();
        click("包裹梦工厂");
        text("做任务得包裹").waitFor();
        click("做任务得包裹");
        text("换一换").waitFor();
        continue;
    }

    if (text("天天领红包").exists()) {
        log("天天领红包");
        sleep(500);
        if (text("x").exists()) {
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
        text("换一换").waitFor();
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
        text("换一换").waitFor();
        continue;
    }

    if (text("添加包裹").exists()) {
        log("添加包裹");
        sleep(1000);
        var numberInput = "1";
        id("package_import_edit_text").findOne().setText(numberInput);
        log(id("package_import_edit_text").findOne().text());
        
        while (!id("package_query_import_card_btn_layout").findOnce() || !id("package_query_import_card_btn_layout").findOnce().clickable()) {
            sleep(100);
            numberInput += random(0,9).toString();
            id("package_import_edit_text").findOne().setText(numberInput);
            log(id("package_import_edit_text").findOne().text());
            sleep(1000);
        }
        id("package_query_import_card_btn_layout").click();
        log("尝试添加包裹");
        sleep(5000);
        back();
        text("包裹梦工厂").waitFor();
        click("包裹梦工厂");
        text("做任务得包裹").waitFor();
        click("做任务得包裹");
        text("换一换").waitFor();
    }

    log("不认识的任务");
    toast("不认识的任务");
    back();
    click("换一换");
    sleep(2000);
}

toast("完成20个任务");