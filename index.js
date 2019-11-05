//文章分类
$.ajax({
    type:'get',
    url:'http://47.111.184.55:8888/api/v1/index/category?list=5',
    success:function(data){  
        console.log(data);
        var html = template('classifyTpl', {data : data.data});
        // console.log(html);  
        $('#classify2').html(html);
        $('#classify').html(html);
    }
})

//热点图
$.ajax({
    type: 'get',
    url: 'http://47.111.184.55:8888/api/v1/index/hotpic',
    success: function (data) {
        console.log(data)
       var html = template('photoTpl', data.data)
       $('#focus_list').html(html);
       $('#focus_list').children(':first').prop('className','first')
    }
})
