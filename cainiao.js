if (currentPackage() != "com.cainiao.wireless") {
    app.launch("com.cainiao.wireless");
    sleep(5000 + 100 * Math.random());
}

click("包裹梦工厂");
sleep(3000 + 100 * Math.random());

while (!className("android.view.View").text("已完成16/16").exists()) {
    click("做任务得包裹");
    // if (text("领取") != null) {
    //     click("领取");
    //     sleep(2000 + 100 * Math.random());
    //     continue;
    // }
    sleep(1500);
    click("去完成", 0);
    //必做浏览任务
    if (text("滑动开始计时").findOne(1500 + 100 * Math.random())) {
        toast("模拟浏览");
        sleep(500);
        //gesture(1000, [300, 600], [300, 300]);
        swipe(35, 1828, 35, 978, 1000 + 100 * Math.random());
        sleep(21000 + 100 * Math.random());
    }
    //加购物车
    if (className("android.view.View").textContains("加入购物车").findOne(1500)) {
        toast("模拟加购");
        var cnt = 0;
        while (cnt < 5) {
            sleep(500);
            className("android.view.View").textStartsWith("¥").findOne().click();
            id("title_bar_container_view_title").waitFor();
            sleep(500);
            back();
            cnt++;
            className("android.view.View").textContains("加入购物车").waitFor();
        }
        continue;
    }
    //答题无脑选C
    if (textStartsWith("O1CN01").findOne(1500 + 100 * Math.random())) {
        textStartsWith("C、").click();
        sleep(1000 + 100 * Math.random());
        if (textStartsWith("关闭") != null) {
            textStartsWith("关闭").click();
            sleep(1000 + 100 * Math.random());
        }
        else {
            textStartsWith("换一题").click();
            sleep(1000 + 100 * Math.random());
        }
    }
}

toast("结束");