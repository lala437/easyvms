layui.config({  // common.js是配置layui扩展模块的目录，每个页面都需要引入
    defaultTheme: 'theme-default', // 默认主题
    getAjaxHeaders: function (url) {
        var headers = [];
        headers.push({name: 'X-CSRF-TOKEN', value: document.getElementById('csrf-token').getAttribute('content')});
        return headers;
    },
    // 请求完成后预处理
    ajaxSuccessBefore: function (res, url, obj) {
        if(res.code == 422) {
            res.error = obj.xhr.responseJSON.errors ;
        }
        return true;
    },
    defaultLoading: 2,
    version: '318',   // 更新组件缓存，设为true不缓存，也可以设一个固定值
    base: '/webstatic/admin/asset/module/'
}).extend({
    steps: 'steps/steps',
    notice: 'notice/notice',
    cascader: 'cascader/cascader',
    dropdown: 'dropdown/dropdown',
    fileChoose: 'fileChoose/fileChoose',
    Split: 'Split/Split',
    Cropper: 'Cropper/Cropper',
    tagsInput: 'tagsInput/tagsInput',
    citypicker: 'city-picker/city-picker',
    introJs: 'introJs/introJs',
    zTree: 'zTree/zTree',
    wangEditor: 'wangEditor/wangEditor'
}).use(['layer', 'admin'], function () {
    var $ = layui.jquery;
    var layer = layui.layer;
    var admin = layui.admin;

});

/** 获取当前项目的根路径，通过获取layui.js全路径截取assets之前的地址 */
function getProjectUrl() {
    var layuiDir = layui.cache.dir;
    if (!layuiDir) {
        var js = document.scripts, last = js.length - 1, src;
        for (var i = last; i > 0; i--) {
            if (js[i].readyState === 'interactive') {
                src = js[i].src;
                break;
            }
        }
        var jsPath = src || js[last].src;
        layuiDir = jsPath.substring(0, jsPath.lastIndexOf('/') + 1);
    }
    return layuiDir.substring(0, layuiDir.indexOf('assets'));
}

function parse_video_address_decode(val) {
    return JSON.parse(val).join("\n");
}

function parse_video_address_encode(val) {
    return JSON.stringify(val.split("\n"));
}

function crtTimeFtt(val, row) {
    if (val != null || val!="") {
        let date = new Date(val);
        return date.getFullYear() + '-' + zf(date.getMonth() + 1) + '-' + zf(date.getDate())+ " "+zf(date.getHours())+":"+zf(date.getMinutes())+":"+zf(date.getSeconds());
    }
    return  ""
}

function zf(num){
    if (parseInt(num)<=9){
        return "0"+num
    }
    return num
}
