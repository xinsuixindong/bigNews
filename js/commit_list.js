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
// 搜索评论
$('#indexSearch').on('click', function () {
	// 获取到管理员选择的过滤条件
	var formData = $(this).serialize();
	// 向服务器端发送请求 根据条件索要文章列表数据
	$.ajax({
		type: 'get',
		url: 'http://47.111.184.55:8888/api/v1/admin/comment/search',
		data: formData,
		success: function (response) {
            console.log(response);           
			// var html = template('postsTpl', response);
			// $('#postsBox').html(html);
			// var page = template('pageTpl', response);
			// $('#page').html(page);
		}
	});
	// 阻止表单默认提交行为
	return false;
});

