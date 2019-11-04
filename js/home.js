//  热门排行 
$.ajax({
    type:'get',
    url:'http://47.111.184.55:8888/api/v1/index/rank',
    success:function(data){
        // console.log(data);  
        var html = template('hotTpl', {data : data.data});
        // console.log(html);  
		$('#hotBox').html(html);
    }
})

// 最新评论
$.ajax({
    type:'get',
    url:'http://47.111.184.55:8888/api/v1/index/latest_comment',
    success:function(data){  
        // console.log(data);
        var html = template('newsTpl', {data : data.data});
        // console.log(html);  
		$('#newsBox').html(html);
    }
})
// 焦点
$.ajax({
    type:'get',
    url:'http://47.111.184.55:8888/api/v1/index/attention',
    success:function(data){  
        console.log(data);
        var html = template('focusTpl', {data : data.data});
        // console.log(html);  
		$('#focusBox').html(html);
    }
})
