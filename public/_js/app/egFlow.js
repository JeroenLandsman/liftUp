(function() {
    var formWrap = document.getElementById( 'fs-form-wrap' );

    new FForm( formWrap, {
        onReview : function() {
            classie.add( document.body, 'overview' ); // for demo purposes only
        }
    } );
})();

(function() {
    var offerItem = document.querySelectorAll('.js-offerItem');

    Array.from(offerItem).forEach(item => {
        item.addEventListener('click', function(event) {


            //document.querySelector('input[name="chb"]', this).prop("checked",true);
            [].forEach.call(offerItem, function(el) {
                el.classList.remove("offer__item--checked");
            });
            this.classList.add('offer__item--checked');
        });
    });
})();

function showTotals() {
    console.log('test')

    var navDots = $('.fs-nav-dots');

    if (navDots.find('button:eq(7)').hasClass('fs-dot-current')){
        $('.container--header__totals').show();
        $('.container--header__totals-price').hide();
        $('.container--header__totals-price1').show();
    }

    if (navDots.find('button:eq(8)').hasClass('fs-dot-current')){
        $('.container--header__totals').show();
        $('.container--header__totals-price').hide();
        $('.container--header__totals-price2').show();
    }

    if (navDots.find('button:eq(9)').hasClass('fs-dot-current')){
        $('.container--header__totals').show();
        $('.container--header__totals-price').hide();
        $('.container--header__totals-price3').show();
    }

    if (navDots.find('button:eq(10)').hasClass('fs-dot-current')){
        $('.container--header__totals').show();
        $('.container--header__totals-price').hide();
        $('.container--header__totals-price4').show();
    }
}
