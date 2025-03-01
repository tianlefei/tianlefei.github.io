$(function() {
    $('#yes').click(function(event) {
        // 先隐藏按钮
        $('.btn-groups').hide();
        modal('我会一直爱你！(^_^)', function() {
            $('.page_one').addClass('hide');
            $('.page_two').removeClass('hide');
            fireworks();
        });
    });
    $('#no').click(function(event) {
        // 先隐藏按钮
        $('.btn-groups').hide();
        modal('明人不说暗话！', A);
    });
});

function A() {
    modal('我喜欢你！', B);
}

function B() {
    modal('我想鼓起勇气！', C);
}

function C() {
    modal('请你不要拒绝我', D);
}

function D() {
    modal('拒绝我，不存在的', E);
}

function E() {
    modal('这辈子都不可能让你离开我', F);
}

function F() {
    modal('跟我走吧', G);
}

function G() {
    modal('房产证上写你名', H);
}

function H() {
    modal('我会做饭', I);
}

function I() {
    modal('爱你。么么哒！', J)
}

function J() {
    modal('行，我们去民政局登记吧', function() {
        fireworks();
    });
}

function fireworks() {
    $('.page_one').addClass('hide');
    initAnimate();
}

function modal(content, callback) {
    var tpl = '<div class="container">'+
        '<div class="mask"></div>'+
        '<div class="modal">'+
        '<p>'+ content +'</p>'+
        '<button type="button" id="confirm" class="confirm">确定</button>'+
        '</div>'+
        '</div>';
    $('body').append(tpl);
    
    // 点击确定按钮时关闭弹窗
    $(document).on('click', '.confirm', function() {
        $('.container').remove();
        callback();
    });
}
