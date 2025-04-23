$(document).ready(function(){
    // 遍歷每一個輪播區域
    $('.slideshow').each(function() {
        var $carousel = $(this); // 當前輪播
        var slides = $carousel.find('.mySlides');
        var dots = $carousel.find('.dot');
        var slideIndex = 0;
        var timeoutVar;  // 記錄計時器 ID

        // 初始化當前輪播
        showSlides(slideIndex);

        // prev 和 next 操作
        $carousel.find('.prev').click(function(){
            plusSlides(-1);
        });

        $carousel.find('.next').click(function(){
            plusSlides(1);
        });

        // 圓點操作
        dots.click(function(){
            var i = $(this).index();
            currentSlide(i);
        });

        // 顯示下一張或上一張
        function plusSlides(n) {
            clearTimeout(timeoutVar);  // 重置計時器
            showSlides(slideIndex += n);
        }

        // 根據圓點顯示對應圖片
        function currentSlide(n) {
            clearTimeout(timeoutVar);  // 重置計時器
            showSlides(slideIndex = n);
        }

        // 自動輪播
        function autoSlide(){
            clearTimeout(timeoutVar);  // 重置計時器
            slideIndex++;
            showSlides(slideIndex);
        }

        // 顯示當前圖片
        function showSlides(n) {
            if (slideIndex >= slides.length) { slideIndex = 0; } // 當前圖片超出範圍，從頭開始
            if (slideIndex < 0) { slideIndex = slides.length - 1; } // 當前圖片小於0，顯示最後一張圖片

            slides.hide(); // 隱藏所有圖片
            dots.removeClass('active'); // 移除所有圓點的 active 類別
            slides.eq(slideIndex).show(); // 顯示當前圖片
            dots.eq(slideIndex).addClass('active'); // 為當前圓點添加 active 類別

            // 設置自動輪播
            timeoutVar = setTimeout(autoSlide, 5000); // 每5秒切換圖片
        }
    });
});
