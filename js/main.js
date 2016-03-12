$(document).ready(function() {
  $('button').click(function() {
    $target = $(this).attr('data-value');
    $current = $('.current').attr('data-value');
    $current = $current ? $current : 'loading';

    if($target == $current) {
      $('.logo').removeClass($current).addClass('loading');
      $(this).removeClass('current');
    }
    else {
      $('.logo').removeClass($current).addClass($target);
      $(this).siblings().removeClass('current');
      $(this).addClass('current');
    }

  });
});
