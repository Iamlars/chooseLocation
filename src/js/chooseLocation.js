;(function($){
  function ChooseLocation(obj){
    this.pro = obj.find('.pro');
    this.city = obj.find('.city');
    this.area = obj.find('.area');

    this.setPath();
    this.init();
    this.change();
  }

  ChooseLocation.prototype.allCitys = hotcity;

  ChooseLocation.prototype.setPath = function(){
    $.each(this.allCitys,function(i,n){
      n.index = i;
      $.each(n.citys,function(j,k){
        k.index = i+'_'+j;
      })
    });
  };
  ChooseLocation.prototype.init = function(){
      var pValue = this.pro.val(),
          CValue = this.city.val(),
          AValue = this.area.val();

      this.showProv();
      this.showCity();
      this.showArea();

      if(pValue){
        this.pro.find('option[value="'+pValue+'"]').attr('selected','selected');
        this.showCity();
        this.showArea();
      }
      if(CValue){
        this.city.find('option[value="'+CValue+'"]').attr('selected','selected');
        this.showArea();
      }
      if(AValue){
        this.area.find('option[value="'+AValue+'"]').attr('selected','selected');
      }
  };
  ChooseLocation.prototype.change = function(){
    var that = this;

    this.pro.change(function(){
      that.showCity();
      that.showArea();
    });

    this.city.change(function(){
      that.showArea();
    });

  };
  ChooseLocation.prototype.showProv = function(){
    this.pro.html(this.buildOption(this.allCitys)).change();
  };
  ChooseLocation.prototype.showCity = function(){
    if(!this.city.length){return}
    var index = this.pro.find("option:selected").attr("index");
    this.city.html(this.buildOption( this.allCitys[index].citys )).change();
  };
  ChooseLocation.prototype.showArea = function(){
    if(!this.area.length){return}
    var index = this.city.find("option:selected").attr("index").split('_'),
        pid = index[0],
        cid = index[1];
    this.area.html(this.buildOption( this.allCitys[pid].citys[cid].countys )).change();
  };
  ChooseLocation.prototype.buildOption = function(array){
    var html = '';
    $.each(array,function(i,n){
      html += '<option value="'+n.area_id+'" index="'+n.index+'">'+n.area_name+'</option>';
    });
    return html;
  };



  $.fn.chooseLocation = function(){
      this.each(function(i,n){
        new ChooseLocation($(n));
      });
  };

}(window.jQuery,undefined));
