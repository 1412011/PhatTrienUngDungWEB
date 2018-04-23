
$('document').ready(function(){
    alert('sadad');

  $('.add-item-to-cart').on('click',function(){
  alert('ul');
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
                      <a href="#" class="remove remove-item-mini-cart">x</a>
                  </li> 
                `;
  $('ul.items').append(li_item); 
  $('ul.items li:last').show('normal');
});
});