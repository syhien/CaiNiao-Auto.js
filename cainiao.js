click("包裹梦工厂");
sleep(3000 + 100 * Math.random());

while(!className("android.view.View").text("已完成16/16").exists()){
    click("做任务得包裹");
    if(text("领取").exists())
    {
        click("领取");
        sleep(2000 + 100 * Math.random());
        continue;
    }
    sleep(1500);
    click("去完成", 0);
    //必做浏览任务
    if(text("滑动开始计时").findOne(1500 + 100 * Math.random()))
    {
        toast("模拟浏览");
        //gesture(1000, [300, 600], [300, 300]);
        swipe(35, 1828, 35, 978, 1000 + 100 * Math.random());
        sleep(21000 + 100 * Math.random());
    }
    //加购物车
    if(className("android.view.View").textContains("加入购物车").findOne(1500))
    {
        toast("模拟加购");
        var cnt = 0;
        while(cnt < 5)
        {
            className("android.view.View").textStartsWith("¥").findOne().click();
            id("title_bar_container_view_title").waitFor();
            back();
            cnt++;
            className("android.view.View").textContains("加入购物车").waitFor();
        }
    }
    //天天红包浏览
    if(className("android.view.View").textContains("浏览本页面").findOne(1500 + 100 * Math.random()))
    {
        toast("模拟浏览");
        //gesture(1000, [300, 600], [300, 300]);
        swipe(35, 1828, 35, 978, 1000 + 100 * Math.random());
        text("已完成浏览任务").waitFor();
        sleep(500 + 100 * Math.random());
        back();
        text("忍痛离开").findOne(1000 + 100 * Math.random()).click();
    }
    
}
