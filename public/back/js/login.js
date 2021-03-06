/**
 * Created by Administrator on 2017/11/8.
 */
$(function(){
//    登录表单校验
//    1. 用户名密码不能为空
//    2. 密码不能为空
//    密码长度是6-12位

//    获取到表单
    var $form = $("form");
//    调用bootstrapValidator 校验表单


})

//使用表单校验插件
$(formSelector).bootstrapValidator({
    //1. 指定不校验的类型，默认为[':disabled', ':hidden', ':not(:visible)'],可以不设置
    // excluded: [':disabled', ':hidden', ':not(:visible)'],

    //2. 指定校验时的图标显示，默认是bootstrap风格
    feedbackIcons: {
        valid: 'glyphicon glyphicon-ok',
        invalid: 'glyphicon glyphicon-remove',
        validating: 'glyphicon glyphicon-refresh'
    },

    //3. 指定校验字段
    fields: {
        //校验用户名，对应name表单的name属性
        username: {
            validators: {
                //不能为空
                notEmpty: {
                    message: '用户名不能为空'
                },
                callback: {
                    message: '用户名错误'
                },
                password: {
                    validators: {
                        //不能为空
                        notEmpty: {
                            message: '密码不能为空'
                        },
                        //长度校验
                        stringLength: {
                            min: 6,
                            max: 12,
                            message: '密码长度是6-12位'
                        },
                        callback: {
                            message: '密码错误'
                        },
                        //正则校验
                        regexp: {
                            regexp: /^[a-zA-Z0-9_\.]+$/,
                            message: '用户名由数字字母下划线和.组成'
                        }
                    }
                },
            }

});