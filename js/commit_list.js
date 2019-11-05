$.ajax({
    type:'get',
    url:'http://47.111.184.55:8888/api/v1/admin/comment/search',
    success:function(data){  
        console.log(data);
        var html = template('commentTpl', {data : data});
        console.log(html);  
		$('#commentBox').html(html);
    }
})


