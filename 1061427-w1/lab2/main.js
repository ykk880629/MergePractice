$(function() {
    $("input").on("click", function() {
        //alert("Hi");
        var numberOfListItem = $("li").length;
        var randomChildNumber = Math.floor(Math.random() * numberOfListItem);
        var imgs = ["https://images.zi.org.tw/baliman/2019/12/29174448/1577612688-9b2f8136c11fcb694d6fcea2c64a7540-1080x565.jpg",
            "https://leafyeh.com/wp-content/uploads/flickr/33343552143_bc9af96c26_o.jpg",
            "https://buuz.tw/wp-content/uploads/20190722193326_79.jpg"
        ];
        $("h1").text($("li").eq(randomChildNumber).text());
        document.getElementById("pic").src = imgs[randomChildNumber];
    });
});