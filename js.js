$(document).ready(
    function(){
        var btn1 = $(".btn_1");
        var btn2 = $(".btn_2");
        var btn3 = $(".btn_3");
        var btn4 = $(".btn_4");

        function jump(url){
            window.location.href = url;
        }

        btn1.click(function(){window.location.href="./about.html";});
        btn2.click(function(){window.location.href="./project.html";});
    }
)