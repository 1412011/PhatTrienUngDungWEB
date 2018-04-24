
$('document').ready(function(){

  $('a.add_to_cart').on('click',function(){

    var item_name = 'IPhone X 256 GB';
    var item_img = 'images/imgs/ip-x-w-0.png';
    var item_price = '34.790.000 đ'
    var li_item = `
                    <li class="item">
                        <a href="#" class="product-media"><img src="`+ item_img +`" alt="img"></a>
                        <div class="product-info">
                            <div class="price">`+ item_price +` x 1</div>
                            <div class="product-name"><a href="#">`+ item_name +`</a></div>
                        </div>
                        <a href="javascript:;" class="remove">x</a>
                    </li> 
                  `;
    $('ul.items').append(li_item); 
    $('ul.items li:last').show('normal');
    var count = parseInt($('span.count:first').text());
    alert(count);
    ++count;
    $('span.count').text(count);
  });

  // remove product cart 
  $('a.remove').on('click',function(){
    $(this).parent().remove();
  });

  //only press number product cart 
  $('#quantity-cart,#text-onlynumber').on('keypress',function(e){
    
      if(e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57))
      {
        return false;
      }
  });

});