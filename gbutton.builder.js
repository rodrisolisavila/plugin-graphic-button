'use strict';
module.exports = class plugin_setting {
    
    constructor(TB) {
        
        this.TB = TB;
        
        this.name= TB.$.s("グラフィックボタン");
        this.plugin_text= TB.$.s("通常の状態とホバー状態のための画像を使用してボタンを作成できます。さらに、クリックしたとき、ホバーしたとき、ホバーから出るときに音声を追加することもできます。");
        this.plugin_img = "gbutton.gif";
        
    }
    
    
    //インストールを実行した時、１度だけ走ります。フォルダのコピーなどにご活用ください。
    triggerInstall(){
        
    }
    
    //コンポーネント情報を取得する。
    defineComponents(){
        
        var cmp = {};
        var TB = this.TB;
        
        cmp["gbutton"] = {
            
            "info":{
                
                "default":true,
                "name":TB.$.s("グラフィックボタン"),
                "help":TB.$.s("カスタムボタンを画像と音声を使って作成することができます。"),
                "icon":"s-icon-star-full"
                
            },
            
            
            "component":{
                
                name : TB.$.s("グラフィックボタン"),
                
                header : function(obj) {
                    return obj.data.pm.name;
                },
                
                component_type : "Simple",
                
                //ビューに渡す固定値
                
                default_view : {
                    icon : "s-icon-star-full",
                    icon_color : "#FFFF99",
                    category : "plugin"
                },
                
                //paramとひもづけるためのマップ
                param_view : {
                },
            
                param:{
                    
                    "graphic" : {
                        type : "ImageSelect",
                        file_path : "image/",
                        base_img_url : "data/image/",
                        name : TB.$.s("normal image"), 
                        help : TB.$.s("Change the background image."), 
                        vital : true, 
                        default_val : "",
                        line_preview: "on",
                        validate : {
                            required : true
                        }
                    },
                    "enterimg" : {
                        type : "ImageSelect",
                        file_path : "image/",
                        base_img_url : "data/image/",
                        name : TB.$.s("hover image"), 
                        help : TB.$.s("Change the background image."), 
                        vital : true, 
                        default_val : "",
                        line_preview: "on",
                        validate : {
                            required : true
                        }
                    },

                    "size" : {
                        type : "Num", 
                        name : "size", 
                        unit : "px’",
                        help : TB.$.s("Change scale"),
                        
                        default_val : 1,
                        
                        validate : {
                            number : true 
                        }
        
                    },

                    "width" : {
                        type : "Num",
                        name : TB.$.s("width"),
                        unit : TB.$.s("px"),
                        help : TB.$.s("Change width"),
                        validate : {
                            number : true
                        }
                        //    default_val:3000,
                    },
                    
                    "height" : {
                        
                        type : "Num",
                        name : TB.$.s("height"),
                        unit : TB.$.s("px"),
                        help : TB.$.s("Change height"),
                        validate : {
                            number : true
                        }
                        
                    },

                    "x" : {
                        type : "Num",
                        name : TB.$.s("x position"),
                        unit : TB.$.s("px"),
                        help : TB.$.s("Change x position"),
                        validate : {
                            number : true
                        }
                        //    default_val:3000,
                    },
                    "y" : {
                        type : "Num",
                        name : TB.$.s("y position"),
                        unit : TB.$.s("px"),
                        help : TB.$.s("Change y position"),
                        validate : {
                            number : true
                        }
                        //    default_val:3000,
                    },
                    "storage" : TB._pm_type["storage"],
                    "target" : TB._pm_type["target"],
                    
                },
                
                           
            }
            
        };
        
            
                
        return cmp;
    
        
    }
    
    test(){
        
        
    }
        
}

