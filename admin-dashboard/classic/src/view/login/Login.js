Ext.define('Admin.view.login.Login',{
    extend: 'Ext.window.Window',
    xtype: 'login',
    requires: [
        'Admin.view.login.LoginController',
        //'test.view.login.LoginController',
        'Ext.form.Panel'

    ],
    // listeners: {
    //     //监听页面初始化事件
    //     render: 'onLoginRender'
    // },

    controller: 'login',
    title: '用户登录',
    plain: true,
    closable: false,
    autoShow: true,
    items: {
        width: 430,
        height: 240,
        bodyPadding: 10,
        xtype: 'form',

        reference: 'form',

        items: [{

            xtype: 'textfield',

            name: 'UserId',

            fieldLabel: '用户名',

            allowBlank: false

        }, {

            xtype: 'textfield',

            name: 'PassWord',

            inputType: 'password',

            fieldLabel: '密&nbsp;&nbsp;&nbsp;码',

            allowBlank: false

        }, {

            xtype: 'displayfield',

            hideEmptyLabel: false,

            value: '密码不能为空'

        }],

        buttons: [{

            text: '登录',

            formBind: true,

            listeners: {

                click: 'onLoginClick'

            }

        }]

    }

});