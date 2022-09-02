function coverLayer(tag) {
        with ($('.over')) {
            if (tag == 1) {
                css('height', $(document).height());
                css('display', 'block');
                css('opacity', 1);

                css("background", "rgba(220,220,220,0.5)");
            }
            else {
                css('display', 'none');
            }
        }
    }
    function OpenTu(src) {
        //var currImg = $('.amplifyImg img');
        coverLayer(1);
        var tempContainer = $('<div class=tempContainer></div>');//图片容器

        with (tempContainer) {//width方法等同于$(this)
            appendTo("body");
            var windowWidth = $(window).width();
            var windowHeight = $(window).height();
            //获取图片原始宽度、高度
            var orignImg = new Image();
            //orignImg.src = currImg.attr("src");
            orignImg.src =src;

            orignImg.onload = function() {

                var currImgWidth = orignImg.width;
                var currImgHeight = orignImg.height;
                if (currImgWidth < windowWidth) {//为了让图片不失真，当图片宽度较小的时候，保留原图
                    if (currImgHeight < windowHeight) {
                        var topHeight = (windowHeight - currImgHeight) / 2;
                        if (topHeight > 35) {
                            topHeight = topHeight - 35;
                            css('top', topHeight);
                        } else {
                            css('top', 0);
                        }
                        //html('< img border=0 src=' + currImg.attr('src') + '>');
                        html('< img border=0 src=' + src + '>');
                    } else {
                        css('top', 0);
                        //html('< img border=0 src=' + currImg.attr('src') + ' height=' + windowHeight + '>');
                        html('< img border=0 src=' + src + ' height=' + windowHeight + '>');
                    }
                } else {
                    var currImgChangeHeight = (currImgHeight * windowWidth) / currImgWidth;
                    if (currImgChangeHeight < windowHeight) {
                        var topHeight = (windowHeight - currImgChangeHeight) / 2;
                        if (topHeight > 35) {
                            topHeight = topHeight - 35;
                            css('top', topHeight);
                        } else {
                            css('top', 0);
                        }
                        //html('< img border=0 src=' + currImg.attr('src') + ' width=' + windowWidth + ';>');
                        html('< img border=0 src=' + src + ' width=' + windowWidth + ';>');
                    } else {
                        css('top', 0);
                        //html('< img border=0 src=' + currImg.attr('src') + ' width=' + windowWidth + '; height=' + windowHeight + '>');
                        html('< img border=0 src=' + src + ' width=' + windowWidth + '; height=' + windowHeight + '>');
                    }
                }
            }

        }
        $(".over").click(function () {
            $('.tempContainer').remove();
            coverLayer(0);
        });
        tempContainer.click(function () {
            $('.tempContainer').remove();
            coverLayer(0);
        });
    }

