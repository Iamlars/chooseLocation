## 中国省市区选择控件 `$.fn.chooseLocation`

> 省市区资料来源已不可考，不过谢谢那位大神了。

> 依赖 jquery.js, area.js

> jquery和area均未压缩，使用时请自便

### 功能

* 使用方法

  例子：`$('.select-group').chooseLocation();`,

  默认会选中 北京-北京-东城区

* 只选择省份

      <div class="select-group">
        <select class="pro"></select>
      </div>

* 选择省份和地级市

      <div class="select-group">
        <select class="pro"></select>
        <select class="city"></select>
      </div>

* 选择省/市/区

      <div class="select-group">
        <select class="pro"></select>
        <select class="city"></select>
        <select class="area"></select>
      </div>

* 有初始值的select

      <div class="select-group">
        <select class="pro">
          <option value="22"></option>
        </select>
        <select class="city"></select>
        <select class="area"></select>
      </div>

* 使select2美化样式

      $('.select2-theme select').select2({
        minimumResultsForSearch: Infinity
      });
