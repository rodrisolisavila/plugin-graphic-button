(function () {

   var new_tag = {};

   new_tag['gbutton'] = {
      pm: {
         color: "black",
         font_color: "",
         storage: null,
         target: null,
         name: "",
         text: "",
         x: "auto",
         y: "",
         width: "",
         height: "",
         size: 30,
         graphic: "",
         enterimg: "",
         cm: "true",
         clickse: "",
         enterse: "",
         leavese: "",
         face: ""
      },
      start: function (pm) {
         var target_layer = null;
         (target_layer = this.kag.layer.getFreeLayer()).css("z-index", 999999);
         var j_button = $("<div class='glink_button'>" + pm.text + "</div>");
         j_button.css("position", "absolute");
         j_button.css("cursor", "pointer");
         j_button.css("z-index", 99999999);
         j_button.css("font-size", pm.size + "px");
         "" != pm.font_color && j_button.css("color", $.convertColor(pm.font_color));
         "" != pm.height && j_button.css("height", pm.height + "px");
         "" != pm.width && j_button.css("width", pm.width + "px");
         if ("" != pm.graphic) {
            j_button.removeClass("glink_button").addClass("button_graphic");
            var img_url = "./data/image/" + pm.graphic;
            j_button.css("background-image", "url(" + img_url + ")");
            j_button.css("background-repeat", "no-repeat");
            j_button.css("background-position", "center center");
            j_button.css("background-size", "100% 100%")
         } else j_button.addClass(pm.color);
         "" != pm.face ? j_button.css("font-family", pm.face) : "" != this.kag.stat.font.face && j_button.css("font-family", this.kag.stat.font.face);
         if ("auto" == pm.x) {
            var sc_width = parseInt(this.kag.config.scWidth),
               center = Math.floor(parseInt(j_button.css("width")) / 2),
               first_left = Math.floor(sc_width / 2) - center;
            j_button.css("left", first_left + "px")
         } else "" == pm.x ? j_button.css("left", this.kag.stat.locate.x + "px") : j_button.css("left", pm.x + "px");
         "" == pm.y ? j_button.css("top", this.kag.stat.locate.y + "px") : j_button.css("top", pm.y + "px");
         $.setName(j_button, pm.name);
         this.kag.event.addEventElement({
            tag: "gbutton",
            j_target: j_button,
            pm: pm
         });
         this.setEvent(j_button, pm);
         target_layer.append(j_button);
         target_layer.show();
         this.kag.ftag.nextOrder()
      },
      setEvent: function (j_button, pm) {
         var that = TYRANO;
         ! function () {
            pm.target, pm.storage;
            var _pm = pm,
               preexp = that.kag.embScript(pm.preexp);
            j_button.click((function (e) {
               "" != _pm.clickse && that.kag.ftag.startTag("playse", {
                  storage: _pm.clickse,
                  stop: !0
               });
               if (1 != that.kag.stat.is_strong_stop) return !1;
               !0;
               "" != _pm.exp && that.kag.embScript(_pm.exp, preexp);
               that.kag.layer.showEventLayer();
               "true" == pm.cm && that.kag.ftag.startTag("cm", {});
               that.kag.ftag.startTag("jump", _pm);
               "true" == that.kag.stat.skip_link ? e.stopPropagation() : that.kag.stat.is_skip = !1
            }));
            j_button.hover((function () {
               if ("" != _pm.enterimg) {
                  var enterimg_url = "./data/image/" + _pm.enterimg;
                  j_button.css("background-image", "url(" + enterimg_url + ")")
               }
               "" != _pm.enterse && that.kag.ftag.startTag("playse", {
                  storage: _pm.enterse,
                  stop: !0
               })
            }), (function () {
               if ("" != _pm.enterimg) {
                  var img_url = "./data/image/" + _pm.graphic;
                  j_button.css("background-image", "url(" + img_url + ")")
               }
               "" != _pm.leavese && that.kag.ftag.startTag("playse", {
                  storage: _pm.leavese,
                  stop: !0
               })
            }))
         }()
      }
   };

   for (var key in new_tag) {
      var tag = new_tag[key];
      tag.kag = TYRANO.kag;
      TYRANO.kag.ftag.master_tag[key] = tag;
   };

}());