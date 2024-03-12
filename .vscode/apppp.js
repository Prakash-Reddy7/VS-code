
    // Your Ext JS code here
    Ext.create('Ext.tab.Panel', {
        renderTo: Ext.getBody(),
        height: 200,
        width: 300,
        items: [
            {
                xtype: 'panel',
                title: 'Tab One',
                html: 'The first tab',
                listeners: {
                    render: function () {
                        Ext.MessageBox.alert('Rendered One', 'Tab One was rendered.');
                    }
                }
            },
            {
                title: 'Tab Two',
                html: 'The second tab',
                listeners: {
                    render: function () {
                        Ext.MessageBox.alert('Rendered One', 'Tab Two was rendered.');
                    }
                }
            }
        ]
    });
});
