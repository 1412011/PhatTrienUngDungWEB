
$('document').ready(function(){

  $('a.add_to_cart').on('click',function(){

    var item_name = 'IPhone X 256 GB';
    var item_img = 'images/imgs/ip-x-w-0.png';
    var item_price = '34 790 000 đ';
    var item_quantity = 1;
    var li_item = `
                    <li class="item">
                      <a href="#" class="product-media"><img src="images/mn1.jpg" alt="img"></a>
                      <div class="product-info">
                          <div class="price">
                              <label class="unit-price">10 000 000đ</label>
                              <label class="lable-mulx-minicart" style="color: #000;">x</label>                            
                              <a href="javascript:;" class="sign minus"><i class="fa fa-minus"></i></a>
                              <label class="quantity-mini-cart">1</label>                       
                              <a href="javascript:;" class="sign plus"><i class="fa fa-plus"></i></a>
                          </div>
                          <div class="product-name"><a href="#">OPPO F7 128 GB</a></div>
                      </div>
                      <a href="javascript:;" class="remove-li">x</a>
                    </li>  
                  `;
    $('ul.items').append(li_item); 
    var count = parseInt($('span.count:first').text());
    ++count;
    $('span.count').text(count);
  });

  // remove product cart 
  $('a.remove-li').on('click',function(){
    $(this).parent().remove();

  });

  $('a.remove-item-cart').on('click',function(){
    $(this).parent().parent().remove();
  });


  //only press number product cart 
  $('#quantity-cart,#text-onlynumber').on('keypress',function(e){
    
      if(e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57))
      {
        return false;
      }
  });

  //  + -  số lượng ở mini cart
  $('.price .minus').on('click', function(){
      culc_money(-1);
  });
  $('.price .plus').on('click', function(){
      culc_money(1);
  });

  function culc_money(id){
    var quantity = parseInt($('label.quantity-mini-cart:first').text());

      if(id < 0){
        if(quantity<2)return;
        --quantity;
      }else ++quantity;

      $('label.quantity-mini-cart').text(quantity);

      //tăng tiền tổng
      var fm_price = $('label.unit-price:first').text();
      var unitprice = getMoney(fm_price);

      var t = $('.subtotal span:first').text();
      var total = getMoney(t);

      if(id < 0){
          total = total - unitprice;
      }else total = total + unitprice;

      var fm_total = formatMoney(total);
      $('.subtotal span').text(fm_total);
      $('.header-mini-cart span.total').text(fm_total);
    
  }

  function getMoney(fm_money){
    var fm = fm_money.replace(/ /g,"");
    var fm = fm.replace("đ","");
    var money = parseInt(fm);
    return money;
  }
  function formatMoney(money){
    var strmoney = money.toString();

    var l = strmoney.length;
    var sodayphay = Math.ceil(l/3) - 1;
    for(var i = 1;i<= sodayphay; i++){
      strmoney = insert(strmoney,l-i*3,' ');
    }
    strmoney = strmoney + 'đ';
    return strmoney;
  }
  function insert(str, index, value) {
    return str.substr(0, index) + value + str.substr(index);
  }

});