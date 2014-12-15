var maxHeight = 0;

$("div.withSameHeight").each(function(){
  if ($(this).height() > maxHeight) { maxHeight = $(this).height(); }
});

$("div.withSameHeight").height(maxHeight);
