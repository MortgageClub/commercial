//= require admin/plugins/loaders/pace.min
//= require jquery
//= require jquery_ujs
//= require admin/core/libraries/bootstrap.min
//= require admin/plugins/loaders/blockui.min
//= require admin/plugins/ui/nicescroll.min
//= require admin/plugins/ui/drilldown
//= require admin/plugins/ui/fab.min

//= require admin/plugins/ui/moment/moment.min
//= require admin/plugins/pickers/daterangepicker

$.fn.filterGroups = function(options) {
  var settings = $.extend({}, options);
  return this.each(function(){
    var $select = $(this);
    // Clone the optgroups to data, then remove them from dom
    $select.data('fg-original-groups', $select.find('optgroup').clone()).children('optgroup').remove();

    $(settings.groupSelector).change(function(){
      var $this = $(this);
      var optgroup_label = $this.val();
      if(optgroup_label != ""){
        var $temp = $select.data('fg-original-groups').filter('optgroup[label=' + optgroup_label + ']');
        var $optgroup = $select.data('fg-original-groups').filter('optgroup[label=' + optgroup_label + ']').clone();
        $select.children('optgroup').remove();
        $select.append($optgroup);
      }
    }).change();
  });
};