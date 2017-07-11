// Work section tab-accardion
$(".category li").click(function(){
    var self = $(this);
    var contentItem = $(".content .tabItem");
    var dataVal = self.attr("data-val");
    self.parent().find("li").removeClass("active");
    self.addClass("active");
    contentItem.removeClass("active");
    contentItem.eq(dataVal).addClass("active");

})
// End of work section

