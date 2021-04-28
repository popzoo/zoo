$(function(){//极速 	#FFBBFF
	var bigEvent =[
	{
	'year' : '<div onclick="showQRCode()" style="color:#FF83FA;text-decoration:none;">打赏</div>',
	'events' :[
	{
		'months' : 2,
		'times' :'<span style="color:#FFBBFF;">楼顶供奉大贤善名【*斌斌】</span>',
		'even' :'<span style="color:#FF83FA;">贤馈￥80元贤珍，贤师普济天下，名动寰宇！</span>'		
	},{		
		'months' : 2,
		'times' :'<span style="color:#FFBBFF;">楼顶供奉圣人祥名【**大石】</span>',
		'even' :'<span style="color:#FF83FA;">圣助￥100元圣宝，圣人恩泽天下，教化众生！</span>'
	},{
		'months' : 6,
		'times' :'<span style="color:#FFBBFF;">楼顶供奉智者慧名【**夜】</span>',
		'even' :'<span style="color:#FF83FA;">乐施￥58元宝币，智者仁布八荒，慧通古今！</span>'
	},{	
		'months' : 6,
		'times' :'<span style="color:#FFBBFF;">楼顶供奉子期友名【**0.0】</span>',
		'even' :'<span style="color:#FF83FA;">友捐￥52.10元金券，友人高山流水，义薄云天！</span>'
	},{		
		'months' : 10,
		'times' :'<span style="color:#FFBBFF;">楼顶供奉神皇鸿名【**清晨】</span>',
		'even' :'<span style="color:#FF83FA;">旨赐￥52元神玉，神皇权掌天下，醉卧美人！</span>'			
	},{	
		'months' : 10,
		'times' :'<span style="color:#FFBBFF;">楼顶供奉仙师尊名【**缺钱】</span>',
		'even' :'<span style="color:#FF83FA;">巨赠￥50元仙币，仙师法力通天，慈施万民！</span>'			
	}]},
	{
	'year' : '<div onclick="showQRCode()" style="color:lime;text-decoration:none;">捐助</div>',
	'events' :[		
	{
		'months' : 2,
		'times' :'<span style="color:#FFBBFF;">楼顶供奉君上大名【Pudding***】</span>',
		'even' :'<span style="color:#FF83FA;">巨赠￥40元重宝，君上财冲牛斗，义贯古今！</span>'
	},{				
		'months' : 2,
		'times' :'<span style="color:#FFBBFF;">楼顶供奉大人神名【**只看自己】</span>',
		'even' :'<span style="color:#FF83FA;">豪掷￥30元宝钞，大人仁冠八方，名誉九州！</span>'			
	},{
		'months' : 6,
		'times' :'<span style="color:#FFBBFF;">楼顶供奉太皇浩名【**毅】</span>',
		'even' :'<span style="color:#FF83FA;">恩赐￥20元皇币，太皇龙腾四海，星耀天下！</span>'		
	},{
		'months' : 6,
		'times' :'<span style="color:#FFBBFF;">楼顶供奉尊者雅名【坑气十足**】</span>',
		'even' :'<span style="color:#FF83FA;">硕捐￥10元宝币，尊者仗义疏财，彪炳千秋！</span>'			
	},{
		'months' : 10,
		'times' :'<span style="color:#FFBBFF;">楼顶供奉金主殊名【**亮】</span>',
		'even' :'<span style="color:#FF83FA;">恩馈￥10元宝刀，金主大爱无疆，万古长青！</span>'			
	},{
		'months' : 10,
		'times' :'<span style="color:#FFBBFF;">楼顶供奉公子美名【风火**】</span>',
		'even' :'<span style="color:#FF83FA;">义哺￥10元玉珠，公子汲水施恩，气吞山河！</span>'			
	}]},	
	{
	'year' : '<div onclick="showQRCode()" style="color:#4EEE94;text-decoration:none;">布施</div>',
	'events' :[		
	{
		'months' : 2,
		'times' :'<span style="color:#FFBBFF;">楼顶供奉侠士英名【**夜】</span>',
		'even' :'<span style="color:#FF83FA;">仗疏￥10元重器，侠士义高恩重，旷世超然！</span>'
	},{			
		'months' : 2,
		'times' :'<span style="color:#FFBBFF;">楼顶供奉大帅威名【**传颖】</span>',
		'even' :'<span style="color:#FF83FA;">飨馈￥10元军饷，大帅铮铮铁骨，威震八荒！</span>'
	},{			
		'months' : 6,
		'times' :'<span style="color:#FFBBFF;">楼顶供奉隐士匿名【2019-01-28】</span>',
		'even' :'<span style="color:#FF83FA;">答谢￥10元宝币，隐士云中白鹤，遗世独立！</span>'				
	},{			
		'months' : 6,
		'times' :'<span style="color:#FFBBFF;">楼顶供奉天师威名【若林**】</span>',
		'even' :'<span style="color:#FF83FA;">挥掷￥10元金珠，天师法力无边，举世绝伦！</span>'
	},{		
		'months' : 10,
		'times' :'<span style="color:#FFBBFF;">楼顶供奉神豪宝名【**燚】</span>',		
		'even' :'<span style="color:#FF83FA;">仁施￥10元金贝，神豪乐善好施，功德无量！</span>'						
	},{
		'months' : 10,
		'times' :'<span style="color:#FFBBFF;">楼顶供奉伟人贵名【**智伟】</span>',
		'even' :'<span style="color:#FF83FA;">瀚赏￥10元帝钞，伟人明德惟馨，仁义无双！</span>'			
	}]},
	{
	'year' : '<a href= "'+document.location.protocol+'//'+document.domain+'/personal.html" style="color:cyan;text-decoration:none;" target="_blank">定制</a>',
	'events' :[
	{
		'months' : 2,
		'times' :'<span style="color:#FFBBFF;">楼顶供奉教父耀名【碳水**】</span>',
		'even' :'<span style="color:#FF83FA;">布施￥10元神币，教父慈施黎民，善举无涯！</span>'		
	},{
		'months' : 2,
		'times' :'<span style="color:#FFBBFF;">楼顶供奉英雄伟名【**马铃薯】</span>',
		'even' :'<span style="color:#FF83FA;">温赠￥9.99元钻币，英雄深明大义，虚怀若谷！</span>'		
	},{
		'months' : 6,
		'times' :'<span style="color:#FFBBFF;">楼顶供奉高人贵名【肥鸡**】</span>',
		'even' :'<span style="color:#FF83FA;">荣捐￥6.66元宝贯，高人高山景行，义薄云天！</span>'		
	},{
		'months' : 6,
		'times' :'<span style="color:#FFBBFF;">楼顶供奉王者尊名【carso**】</span>',
		'even' :'<span style="color:#FF83FA;">敬送￥6.37元古泉，王者义塞天地，魂彻古今！</span>'		
	},{
		'months' : 10,
		'times' :'<span style="color:#FFBBFF;">楼顶供奉恩公威名【肥肉变成**】</span>',
		'even' :'<span style="color:#FF83FA;">义助￥5元大洋，恩人古道热肠，流芳百世！</span>'		

	},{
		'months' : 10,
		'times' :'<span style="color:#FFBBFF;">楼顶供奉曲星文名【**WskDn**】</span>',
		'even' :'<span style="color:#FF83FA;">挥书￥5元墨宝，文君风流倜傥，深谙世事！</span>'
		// 'months' : 10,
		// 'times' :'<span style="color:#FFBBFF;">楼顶供奉贵人荣名【**꧂】</span>',
		// 'even' :'<span style="color:#FF83FA;">礼赐￥5元银饼，贵人鼎助义施，胸怀百川！</span>'		
	}]},
	{
	'year' : '<a href="'+document.location.protocol+'//'+document.domain+'/hiddenManual.html" target="_blank" style="color:#BF3EFF;text-decoration:none;">点赞</a>',
	'events' :[
	{
		'months' : 2,
		'times' :'♨♨♨♨♨♨供奉香火♨♨♨♨♨♨',
		'even' :'Only donator can site this place!'		
	},{
		'months' : 2,
		'times' :'♨♨♨♨♨♨氤氲缭绕♨♨♨♨♨♨',
		'even' :'This building need many kind of person!'	
	},{		
		'months' : 6,
		'times' :'<span style="color:#CAFF70;">开启隐藏之路</span>',
		'even' :'<span style="color:lawngreen;">用户是否上传私有弹幕不影响隐藏功能的使用，但避免暴露还是建议大家用私有弹幕！</span>'
	},{			
		'months' : 6,
		'times' :'<span style="color:#CAFF70;">点赞无私捐助</span>',
		'even' :'<span style="color:lawngreen;">点击上方紫色字体的“点赞”按钮后，即可跳转到获取隐藏功能的详细使用教程的页面！</span>'	
	},{						
		'months' : 10,
		'times' :'<span style="color:#FFBBFF;">商人金铺，静候入驻</span>',// 殊名，仁馈 雪中送炭 仁播华夏 厚德载物 怀瑾握瑜 明德惟馨 云中白鹤  举世无双  绝世超伦 昆山片玉 头角峥嵘 无出其右 裒然举首 盖世无双
		'even' :'<span style="color:#FF83FA;">扫榻以待恩主大能入驻此间金店，日进斗金！</span>'
	},{		
		'months' : 10,
		'times' :'<span style="color:#FFBBFF;">商人宝位，虚以待座</span>',// 殊名，仁馈 雪中送炭 仁播华夏 厚德载物 怀瑾握瑜 明德惟馨 云中白鹤  举世无双  绝世超伦 昆山片玉 头角峥嵘 无出其右 裒然举首 盖世无双
		'even' :'<span style="color:#FF83FA;">拱手相迎仁君义公坐镇此方宝座，财源滚滚！</span>'					
	// },{
	// 	'months' : 10,
	// 	'times' :'<span style="color:#97FFFF;">鱼丸诚信红顶商人-微笑(QQ:527853199)</span>',
	// 	'even' :'<span style="color:#87CEEB;">竞猜交易模式的鱼丸商人，需要自己包0.1竞猜税，价格公道，诚信可靠，大额丸子交易力荐</span>'		
		// 'times' :'火力横扫，足迹万千', 
		// 'even' :'签到手速王，顶级车队logo'
	// },{
	// 	'months' : 10,
	// 	'times' :'<span style="color:#97FFFF;">鱼丸诚信红顶商人-大有可为(QQ:506730999)</span>', 
	// 	'even' :'<span style="color:#87CEEB;">车队交易模式的鱼丸商人，走红包无税，价格美丽，人品靠谱，小额交易(<40W丸)交易的首推</span>'		
		// 'times' :'笑傲鱼塘，睥睨水友',
		// 'even' :'满级粉丝牌子，幻神弹幕特效'			
	}]},
	// },{
	// 	'months' : 6,
	// 	'times' :'睥睨水友',
	// 	'even' :'满级粉丝牌子-有撒~'
	// },{
	// 	'months' : 6,
	// 	'times' :'笑傲鱼塘',
	// 	'even' :'幻神弹幕特效-有撒~'		
	// },{
	// 	'months' : 10,
	// 	'times' :'鲸吞万象',
	// 	'even' :'签到手速王-全都有撒'
	// },{
	// 	'months' : 10,
	// 	'times' :'火力横扫',
	// 	'even' :'顶级车队logo-有撒~'	
	{
	'year':"起点",
	'events' :[
	{
		'months' : 2,
		'times' :'V0.1.0',
		'even' :'根据斗鱼鱼塘任务的API接口，实现手动按钮火力房间搜索并跳转'
	},{
		'months' : 4,
		'times' :'V0.1.1',
		'even' :'火力搜寻的网址跳转计数，按日期形式序列化到 local Storage中，方便用户统计查看'	
	},{
		'months' : 8,
		'times' :'V0.1.2',
		'even' :'清理localStorage中无用的信息，同时也防止斗鱼收集用户行为信息'
	},{
		'months' : 10,
		'times' :'V0.1.3',
		'even' :'增加火力全开房间的筛选，热度筛选，当房间热度太高>50W 弹幕中奖几率低则跳过'
	}]},
	{
	'year' : "开发",
	'events' :[
	{
		'months' : 2,
		'times' :'V0.1.4',
		'even' :'奖品种类筛选，只有符合鱼丸和红包奖励才参与，鱼丸份数>2，单数>100，红包过滤常金额数目(0.01,0.1,0.5元)'
	},{
		'months' : 4,
		'times' :'V0.1.5',
		'even' :'参与条件筛选，是否需要成为粉丝才可以参与，如需要粉丝，则跳过'
	},{		
		'months' : 8,
		'times' :'V0.1.6',
		'even' :'禁言判断，如果之前被正浏览的房间禁言，则自动跳转'
	},{
		'months' : 10,
		'times' :'V0.1.7',
		'even' :'增加画质调整，因为是抢丸子，所以默认为最低画质，方法参考wah0713大神的功能'
	}]},
	{
	'year' : "编码",
	'events' :[
	{
		'months' : 2,
		'times' :'V0.2.0',
		'even' :'增加自动按钮的UI按钮和样式radio,实现手动自动自由切换的方案，由你喜好决定'
	},{
		'months' : 4,
		'times' :'V0.2.1',
		'even' :'增加复选框radio的记录功能，序列化 local Storage,记录上次跳转的操作'
	},{		
		'months' : 6,
		'times' :'V0.2.2',
		'even' :'新增满足筛选条件的当前房间自动关注与房间签到功能'
	},{
		'months' : 8,
		'times' :'V0.2.3',
		'even' :'添加默认关闭滚屏弹幕方法，用户可按需要在尾部主函数中注掉或打开此方法'
	},{
		'months' : 10,
		'times' :'V0.2.4',
		'even' :'添加默认关闭自动视频播放的方法，用户可按需要在尾部主函数中注掉或打开此方法'
	}]},
	{
	'year' : "增改",
	'events' :[
	{

		'months' : 2,
		'times' :'V0.2.5',
		'even' :'增加获取用户ID和用户昵称的函数，并序列化 local Storage中，方便标识不同用户数据统计'
	},{		
		'months' : 4,
		'times' :'V0.2.6',
		'even' :'增加获取当前房间的roomId,方便后续的json的URL请求和粉丝牌的logo寻找提供条件'
	},{
		'months' : 6,
		'times' :'V0.2.7',
		'even' :'加显示当前直播间在线人数，该方法参考greaseFork中qianjiachun大佬公布的斗鱼API接口'
	},{
		'months' : 8,
		'times' :'V0.2.8',
		'even' :'添加显示当前房间的信用值，满为12，最低为4，当信用<4,水友们无法送礼物'
	},{
		'months' : 10,
		'times' :'V0.2.9',
		'even' :'添加不绑定手机号发弹幕(前提是必须是其他账号登陆状态，非登陆状态不行)'
	}]},
	{
	'year' : "上线",
	'events' :[
	{
		'months' : 2,
		'times' :'V0.3.0',
		'even' :'正式上架GreaseFork,并增加皇帝的聊天弹幕特效，满级粉丝牌，满级账号120，满级房间16，炫酷车队logo，签到手气王'
	},{		
		'months' : 4,
		'times' :'V0.3.1',
		'even' :'增加超级皇帝的滚屏弹幕特效，绑定键盘回车和鼠标点击弹幕发送按钮，当用户发弹幕会自动触发'
	},{
		'months' : 6,
		'times' :'V0.3.2',
		'even' :'增加抓捕幻神弹幕特效的自动方法，自动保存local Storage两个 🍅🥦🍅 为前缀的键值'
	},{
		'months' : 8,
		'times' :'V0.3.3',
		'even' :'添加皇帝弹幕王者神豪的动态logo特效，修正了一些log的日志级别'
	},{
		'months' : 10,
		'times' :'V0.3.4',
		'even' :'增加了网址跳转前的房间过滤功能，自动过滤掉二次元、看电影、户外和人数>3000的房间'
	}]},
	{
	'year' : "修改",
	'events' :[
	{
		'months' : 2,
		'times' :'V0.3.5',
		'even' :'增加了当前直播间主播已经开启直播时间的计时，单位/分钟，增加了鼠标悬浮此区域的文字提示说明'
	},{		
		'months' : 4,
		'times' :'V0.3.6',
		'even' :'优化自动执行脚本初始化的时间，增加了当前房间的签到排行显示'
	},{
		'months' : 6,
		'times' :'V0.3.7',
		'even' :'增加弹幕轰炸功能，当前房间符合火力全开搜索条件时，则自动发送弹幕抢奖品'
	},{
		'months' : 8,
		'times' :'V0.3.8',
		'even' :'增加云端弹幕功能，根据房间分类选取符合类别的弹幕，增加云弹幕json接口的访问频次统计'
	},{
		'months' : 10,
		'times' :'V0.3.9',
		'even' :'增加滚屏弹幕和自动播放的记忆功能，满足用户在不同场景的不同需要'
	}]},
	{
	'year' : "迭代",
	'events' :[
	{
		'months' : 2,
		'times' :'V0.4.0',
		'even' :'优化房间自动签到的功能，初始化脚本后即可自动签到'
	},{		
		'months' : 4,
		'times' :'V0.4.1',
		'even' :'新增arrPoetry精选弹幕，与云精选弹幕混合使用，精选弹幕比例为1/5，普通弹幕比例为4/5'
	},{
		'months' : 6,
		'times' :'V0.4.2',
		'even' :'新增极速签到功能，直接调用签到API接口，检测到主播开播后极速签到，延迟为ms级别'
	},{
		'months' : 8,
		'times' :'V0.4.3',
		'even' :'修复鱼丸筛选丸子>1000时自动跳转的bug, 新增斗鱼车队条件筛选功能，增加下拉加载功能'
	},{
		'months' : 10,
		'times' :'V0.4.4',
		'even' :'新增鱼吧自动签到鱼吧收藏列表的所有鱼吧，签到完成后会有弹窗提示'
	}]},
	{
	'year' : "更新",
	'events' :[
	{
		'months' : 3,
		'times' :'V0.4.5',
		'even' :'修复极速自动签到cookie为空引发的无法签到的bug,免去用户手动签到获取cookie'
	},{
		'months' : 5,
		'times' :'V0.4.6',
		'even' :'新增幻神弹幕特效功能，此特效采用已被二珂牌斗鱼小手的实现的弹幕特效'
	},{
		'months' : 7,
		'times' :'V0.4.7',
		'even' :'新增车队一键签到，只要是打开车队的界面，就可以自动签到'
	},{
		'months' : 9,
		'times' :'V0.4.8',
		'even' :'去除了签到排行的排名显示功能， 因为这个API接口的数据是被延迟处理的'	
	}]},
	{
	'year' : "升级",
	'events' :[
	{
		'months' : 2,
		'times' :'V0.5.0',
		'even' :'重磅推出AI智能机器人-小思，拥有中文分词、词性标注、命名实体识别、文本摘要、新词发现、情感分析等'
	},{
		'months' : 4,
		'times' :'V0.5.1',
		'even' :'修改了界面UI提示效果，关键操作会有弹窗提示，增加用户体验的友好性'
	},{
		'months' : 6,
		'times' :'V0.5.2',
		'even' :'增加了全平台车队的数目统计，点击可以进入车队入口'
	},{
		'months' : 8,
		'times' :'V0.5.3',
		'even' :'二合一脚本和此安全脚本功能整合一起，合体版横空出世，每天自动跳转页面限100次'
	},{
		'months' : 10,
		'times' :'V0.5.4',
		'even' :'修复二合一脚本多处逻辑不合理的bug，优化代码逻辑结构'		
	}]},
	{
	'year' : "迭代",
	'events' :[
	{
		'months' : 2,
		'times' :'V0.5.5',
		'even' :'过滤了机器人一些弱智的聊天对话，限制回答弹幕的识别长度，修复了toast若提示闪屏的问题'
	},{
		'months' : 4,
		'times' :'V0.5.6',
		'even' :'新增一键打卡所有粉丝牌房间送荧光棒续牌子功能，每个有牌子的房间自动赠送一个荧光棒'
	},{
		'months' : 6,
		'times' :'V0.5.7',
		'even' :'扩充了云弹幕的语料库，增大火力重开的等待时间为2min，修复innerText为null的bug报错问题'
	},{
		'months' : 8,
		'times' :'V0.5.8',
		'even' :'新增感谢弹幕，感谢赠送礼物的人，新增中奖弹幕回复，随机抽取发表中奖感言，新增房间过滤功能'
	},{
		'months' : 10,
		'times' :'V0.5.9',
		'even' :'新增自动领取鱼所有鱼粮的功能，增添鱼粮按钮，可以一键领取鱼丸并自动参与一次小礼物抽奖'				
	}]},
	{
	'year' : "更新",
	'events' :[
	{
		'months' : 2,
		'times' :'V0.6.0',
		'even' :'新增天威幻神和年度神豪动态弹幕logo，新增房管图标，增加弹幕负载均衡，过滤AI白话，修复聊天bug'
	},{
		'months' : 4,
		'times' :'V0.6.1',
		'even' :'增加cdn加速云弹幕接口，由于之前访问github接口太过于频繁，被github限制接口访问速度，用cdn来提速'	
	},{
		'months' : 6,
		'times' :'V0.6.2',
		'even' :'去除谢礼弹幕，感谢自己的情况，修改车队签到为非聚焦模式Tab打开，修改@icon的cdn缓存，增设@icon64位图标'	
	},{
		'months' : 8,
		'times' :'V0.6.3',
		'even' :'增加主播礼物收益显示，增加直播间弹幕数量统计，修改房间真实人数API接口,修改直播累计时长为主播开播时间点'	
	},{
		'months' : 10,
		'times' :'V0.6.4',
		'even' :'优化时间显示日期，增加隐藏功能自动跳转前可以取关，去除遮挡按钮功能的三个斗鱼广告，增加火力分享'							
	}]},
	{
	'year' : "迭代",
	'events' :[
	{
		'months' : 2,
		'times' :'V0.6.5',
		'even' :'紧急修复二合一自动跳转不停止bug,修复快速签到第一次打开不响应的bug,签到轮询改为依据网络访问速度的队列任务'
	},{
		'months' : 4,
		'times' :'V0.6.6',
		'even' :'修复因斗鱼升级导致的火力全开跳转接口失效问题，修复无手机绑定时点鱼塘出现无限弹窗bug，修改fireinfo持久化'	
	},{
		'months' : 6,
		'times' :'V0.6.7',
		'even' :'修复二合一功能超过火力等待时间不自动跳转，清除每日跳转历史数据，新增加火力等待和跳转上限用户自定义参数'	
	},{
		'months' : 8,
		'times' :'V0.6.8',
		'even' :'限制机器人回答的长度范围，避免成为百科问答式回答，修改自定义参数礼物答谢和自动取关的功能密码'	
	},{
		'months' : 10,
		'times' :'V0.6.9',
		'even' :'新增自定义云弹幕功能，上传自己专属的云弹幕，文件名与斗鱼昵称一致，格式为json'							
	}]},
	{
	'year' : "更新",
	'events' :[
	{
		'months' : 2,
		'times' :'V0.7.0',
		'even' :'优化自动取关功能，白嫖抢丸子跑路不关注功能优化了，带牌粉丝牌的房间默认不取关，特殊关注的房间默认不取关'
	},{
		'months' : 3,
		'times' :'V0.7.1',
		'even' :'修复因斗鱼升级导致车队无法自动签到,昵称更新,弹幕和过滤网络节点优化，更新机制优化，清除localstorage延迟'	
	},{
		'months' : 6,
		'times' :'V0.7.2',
		'even' :'去除了自定义弹幕配置中需要设置AI过滤的配置列表参数，修复二合一开关关闭时弹幕轰炸无法自动发送弹幕的bug'	
	},{
		'months' : 7,
		'times' :'V0.7.3',
		'even' :'新增隐藏功能-关闭幻神特效功能，新增隐藏功能-不符合筛选房间的跳转延迟设置，优化公有弹幕和绑定缓存到浏览器'	
	},{
		'months' : 10,
		'times' :'V0.7.4',
		'even' :'去除@require依赖库，增加异地账号登陆自动跳转的，修复感谢主播弹幕undefined的bug，增加了小葫芦的统计'
	},{
		'months' : 11,
		'times' :'V0.7.5',
		'even' :'修改未开启礼物致谢功能，就发送感谢礼物弹幕的bug'			
	}]},
	{
	'year' : "升级",
	'events' :[
	{
		'months' : 2,
		'times' :'V0.8.0',
		'even' :'脚本改造升级，由原有单一的火力系统升级为火力系统+粉丝福利社两套系统，两套系统可以通过单选按钮无缝切换'
	},{
		'months' : 4,
		'times' :'V0.8.1',
		'even' :'修复私有弹幕缓存后无法正常解析的问题，修复二合一开关开启停止弹幕轰炸后无限跳转的bug问题'	
	},{
		'months' : 6,
		'times' :'V0.8.2',
		'even' :'感谢胖头鱼大佬修复切换账号鱼吧不签到，感谢坑尼酱修修alert阻断，修复版本号对比，修复火力节点的err'	
	},{
		'months' : 8,
		'times' :'V0.8.3',
		'even' :'增加过滤器的onerror的处理机制，增加标题栏播酱数据失效为0则与小葫芦数据自动切换,post请求优化'	
	},{
		'months' : 10,
		'times' :'V0.8.4',
		'even' :'修车队改签到后跳转的页面，增加用户版本号错误反馈机制，修复福利社抽奖无法参与没有关注的活动'							
	}]},
	{
	'year' : "迭代",
	'events' :[
	{
		'months' : 2,
		'times' :'V0.8.5',
		'even' :'增加鱼丸收益和红包收益数目显示，增加vip的推送节点功能'
	},{
		'months' : 4,
		'times' :'V0.8.6',
		'even' :'脚本安全升级，增加隐藏功能-用户匿名，优化中奖弹幕的随机发送时间，优化红包抽奖条件过滤'	
	},{
		'months' : 6,
		'times' :'V0.8.7',
		'even' :'新增一键清空背包小礼物的功能，优化访问速度，过滤一些刷新的重复操作'	
	},{
		'months' : 8,
		'times' :'V0.8.8',
		'even' :'修复网络错误的bug，增加节点缓存机制，增加脚本更新的地址跳转链接'	
	},{
		'months' : 10,
		'times' :'V0.8.9',
		'even' :'修复重启浏览器弹幕仍被本地缓存的bug，将极速签到功能整合到二合一开关和火力停止中'	
	}]},
	{
	'year' : "迭代",
	'events' :[
	{
		'months' : 2,
		'times' :'V0.9.0',
		'even' :'增大弹幕发送时隔，恢复启用隐藏功能“自动取关”功能，默认关闭，修复节点特殊符号的占用'
	},{
		'months' : 4,
		'times' :'V0.9.1',
		'even' :'修复极速签到和停止开火有时图标切换失灵的bug,增加弹幕自定义发送时间的基数,单位s'	
	},{
		'months' : 6,
		'times' :'V0.9.2',
		'even' :'修复新注册小号导致脚本模块为undefined的bug，修复签到和停火图标切换又失灵bug'	
	},{
		'months' : 8,
		'times' :'V0.9.3',
		'even' :'增大弹幕发言时间为13s，增加活动页面检测机制，降低进入小黑屋风险'
	},{
		'months' : 10,
		'times' :'V0.9.4',
		'even' :'修复鱼丸区功能提示被竞猜遮挡问题，去除冗余和注释代码，优化jump节点存储'
	}]},
	{
	'year' : "迭代",
	'events' :[
	{
		'months' : 2,
		'times' :'V0.9.5',
		'even' :'去除中奖/没中奖的发送弹幕，增大默认结束等待时间，过滤掉粉丝专场的发弹幕活动'
	},{
		'months' : 3,
		'times' :'V0.9.6',
		'even' :'修复PK导致的暂停按钮失效，更改红包鱼丸的跳转链接地址，修复鱼丸不刷新'	
	},{
		'months' : 6,
		'times' :'V0.9.7',
		'even' :'去除房间弹幕量的统计，增加个人弹幕发送量统计显示'	
	},{
		'months' : 7,
		'times' :'V0.9.8',
		'even' :'优化鱼丸筛选为鱼丸权重，优化主播房间停留时间，修复双开Storage没有共享'
	},{
		'months' : 10,
		'times' :'V0.9.9',
		'even' :'修复弹幕收藏为空异常，修复播酱错误，修复火力鱼翅抽奖，去除4000人数限制和户外和二次元'
		// 'even' :'……未来可期……'
	},{
		'months' : 11,
		'times' :'V1.0.0',
		'even' :'修复鱼塘寻宝失效的问题，自动寻宝改为3次，修改手动跳开火钮与二合一排'
		// 'even' :'……未来可期……'		
	}]},
	{
	'year' : "迭代",
	'events' :[
	{
		'months' : 2,
		'times' :'V1.0.1',
		'even' :'修复斗鱼升级适配脚本，修复小葫芦跨域访问，修复粉丝过滤的问题，精简斗鱼界面'
	},{
		'months' : 3,
		'times' :'V1.0.2',
		'even' :'修改背包礼物查询接口，改自动领取鱼粮为手动领取，防止鱼粮异常，增加样式屏蔽'	
	},{
		'months' : 6,
		'times' :'V1.0.3',
		'even' :'斗鱼薅羊毛V1.0开源免费版正式阵亡，更改为专为私人用户使用模式，九州哀叹，万马齐喑！'	
	},{
		'months' : 7,
		'times' :'V2.0.0',
		'even' :'启用私人定制模式，修改火力框架为发一条弹幕等待固定时间跳转，增加火力效率'
	},{
		'months' : 10,
		'times' :'V2.0.1',
		'even' :'修改火力全开接口为自己从各大板块抓取，暂不启用鱼塘接口的火力全开'
	},{
		'months' : 11,
		'times' :'V2.0.2',
		'even' :'增加跳转余时的用户自定义配置功能，增加一定延迟在发弹幕，去除火力采集功能'
	}]},
	{
	'year' : "迭代",
	'events' :[
	{
		'months' : 2,
		'times' :'V2.0.3',
		'even' :'增加鱼粮自定义配置，增加每天首次启动程序，自动打卡，自动鱼塘寻宝增加用户头像上传'
	},{
		'months' : 3,
		'times' :'V2.0.4',
		'even' :'去除粉丝福利社CSS过滤，增加鱼丸收益限制，可以弹幕配置收益上限，达到阈值后停止跳转'	
	},{
		'months' : 6,
		'times' :'V2.0.5',
		'even' :'延迟粉丝打卡时间，防止本机时间快于服务器时间导致失败'	
	},{
		'months' : 7,
		'times' :'V3.0.0',
		'even' :'薅羊毛集群V2.0挂掉，升级为V3.0自由火力-单打独斗+游击模式，更新火力抓取为平台轮询'
	},{
		'months' : 10,
		'times' :'V3.0.1',
		'even' :'增加粉丝火力房间提前过滤筛选，符合则跳转参与，不符合略过，修复setAttribute为空的异常'
	},{
		'months' : 11,
		'times' :'V3.0.X',
		'even' :'由于DY平台更改了中奖规则，导致后期本脚本只适合娱乐，背离初衷太远，故不再维护发布新版……'
	}]},	
	{
	'year' : '<div onclick="jumpToScanBoard()" style="color:#EE3B3B;text-decoration:none;">铲奸</div>',
	'events' :[
	{
		'months' : 2,
		'times' :'不忘初心',
		'even' :'⚡⚡⚡⚡⚡⚡神荼蓄力，地瘴灭魔⚡⚡⚡⚡⚡⚡'
	},{
		'months' : 2,
		'times' :'扫黑除恶',
		'even' :'⚡⚡⚡⚡⚡⚡郁垒发威，天雷诛邪⚡⚡⚡⚡⚡⚡'
	},{
		'months' : 6,
		'times' :'神罚囹圄',
		'even' :'⚡⚡⚡⚡⚡⚡坑戮水友遭天谴⚡⚡⚡⚡⚡⚡'
	},{
		'months' : 6,
		'times' :'待魔入瓮',
		'even' :'⚡⚡⚡⚡⚡⚡戕害忠良受神诛⚡⚡⚡⚡⚡⚡'
	},{			
		'months' : 10,
		'times' :'<span style="color:red;">楼底镇压大恶人-武林恶名[主播:*大干]</sapn>',
		'even' :'<span style="color:#EE3B3B;">薅羊毛大军滑铁卢之役(集体被禁半年)，以暴制暴将其封禁于九幽冥火之地狱，焚魂灼魄！</sapn>'
	},{
		'months' : 10,
		'times' :'<span style="color:red;">楼底囚禁大魔头-江湖臭名[主播:William*]</span>',
		'even' :'<span style="color:#EE3B3B;">发点弹幕抢鱼丸被诬刷屏禁言一年，这种脑残主播必须镇压在尸魂魔窟之深渊，不见天日！</sapn>'		
	}]},	
	{
	'year' : '<div onclick="jumpToScanBoard()" style="color:#EE3B3B;text-decoration:none;">除恶</div>',
	'events' :[
	{
		'months' : 2,
		'times' :'<span style="color:red;">楼底缧绁鱼丸骗子-老实人(1204950417)</sapn>',
		'even' :'<span style="color:#EE3B3B;">斗鱼鱼丸商的骗子，骗人鱼丸后跑路，必将其缚石沉江，浮尸氼毙！</sapn>'
	},{
		'months' : 2,
		'times' :'<span style="color:red;">楼底狴犴租号败类-雪花啤酒(2799596072)</sapn>',
		'even' :'<span style="color:#EE3B3B;">斗鱼租号的骗子，骗人钱财后跑路，必将其投掷于毒泽瘴窟，万虫噬咬！</sapn>'
	},{
		'months' : 6,
		'times' :'<span style="color:red;">楼底囹圄白嫖恶霸——双氧水(2410136205)</sapn>',
		'even' :'<span style="color:#EE3B3B;">薅羊毛首席白嫖恶霸，小人无信，众人唾弃！</sapn>'
	},{
		'months' : 6,
		'times' :'<span style="color:red;">楼底桎梏白嫖土匪——Ｍｒ．。(9879184)</span>',
		'even' :'<span style="color:#EE3B3B;">薅羊毛亚席白嫖土匪，失信公布，罪不容恕！</sapn>'
	},{			
		'months' : 10,
		'times' :'<span style="color:red;">……未完待续……</span>',
		'even' :'<span style="color:#EE3B3B;">薅羊毛因各位恶势力的诋毁与攻讦而愈发强大！</sapn>'
		// 'even' :'<span style="color:#EE3B3B;">薅羊毛第三位白嫖山贼，山贼无信，遗臭万年！</sapn>'
	},{
		'months' : 10,
		'times' :'<span style="color:red;">……敬请期待……</span>',
		'even' :'<span style="color:#EE3B3B;">恭候各路山贼土匪，恶霸流氓，入彀此榜哈……</sapn>'	
	}]}];
	$('.event_wrap').eventFlow({'events':bigEvent});
})
// 公告栏
// let coreMsg = "庚子鼠年清明节，望帝啼鹃，悼念COVID抗疫中英勇就义的白衣天使们，不负民族使命，点燃华夏希望；抚胸回首，也祭奠薅羊毛惨遭屠戮的大军，爱心驰援沙场，马革裹尸埋冢……哽咽难语……<br>";
// coreMsg+="奉天承运，群主诏曰：由于薅羊毛最近在DY平台为非作歹，乱带节奏，人身攻击，破坏生态，四宗罪合并处罚，被斗鱼官方正式封杀，";
// coreMsg+="薅羊毛大军惨遭“长平屠戮”彻底覆灭，群主恶贯满盈，罄竹难书，人神共愤，天诛地灭。遂从即日起，薅羊毛宣布——彻底阵亡，钦此！！！";
// coreMsg+="特写——落霞中映衬群主凝血颤巍的身影，他回首硝烟弥漫的战场和倒在血腥屠戮下的袍泽，俯身竭力捧起阵前焚麓血染的大纛，仰天长啸——“薅羊毛，亡了！”";
// coreMsg+="言罢，轰然倒地，一代天骄和薅羊毛洪荒大军就此陨落！万马齐喑，愁雨惨淡鹧鸪鸣哀歌——致敬薅羊毛，为DY直播间带来温暖的峥嵘岁月！";
// coreMsg+="瓦釜雷鸣，大雨滂沱血染覆苍天——悼念吾袍泽，为薅羊毛开疆拓土冲锋陷阵的将士英烈……全剧终!公元庚子鼠年如月末旬群主绝笔……";
let coreMsg="popzoo网址运行即将一年，但也即将走入历史，感谢大家一年多的支持与鼓励，有过辉煌的门庭若市，也有过没落的门可罗雀。旧网址popzoo.xyz域名于2020-12-12正式终结。凡是过往，皆是序章，热爱这里的人，则不负卿一片冰心在玉壶。本站决定采用新域名为<a href='//popzoo.ga' style='color:green;' target='_blank'>传送</a>popzoo.ga，虽然脚本阵亡了，但柔情似水，佳期如梦，江东子弟多才俊，卷土重来未可知，还望各位惠存！<br>最后引用金庸先生《神雕侠侣》的片尾词来回敬诸位——今番良晤，豪兴不浅，他日江湖相逢，再当杯酒言欢。咱们就此别过……";
document.getElementById("home_main_notice").innerHTML=coreMsg;
// document.getElementById("home_main_notice").style.setAttribute("text-align","center");   https://popzoo.github.io/zoo/
// 目前薅羊毛大军已经严重超饱和，出现了狼多羊少的局面，不利于良性生态循环，而且斗鱼又一轮人机杀戮模式血腥来袭，为避免大军遭受“长平屠戮”，所以斑竹紧急关闭了薅羊毛外部入口，目前仅供群内老用户使用，如非特殊关系户，不再接纳新生小花旦；同时也请咱们老用户持节云中，最近尽量少用薅羊毛，也不要将之向外公开或发给外人使用，否则视情节列入薅羊毛永久失信名单，还望大家周知和体谅，后期看行情恢复！ 另外使用私有弹幕的老铁，请别把唐诗古文照搬上来，都动手改下与斗鱼房间适配，或者就用最经典稳妥的666弹幕，切勿把弹幕生态也搞的乌七八黑的。若大家有其他网站薅羊毛的好想法，可以找群主侃侃，若能砍出一片薅羊毛的新天地，施主乃功德无量，胜造百级浮屠。重温下我们滴口号——羊毛在，梦就在，薅羊毛奏停不下来，巴扎嘿！';
// 最近斗鱼增强了小黑屋机制，强烈建议大家把弹幕时隔和跳转延迟和结束等待都调大，最好不要多开页面否则肯能会进小黑屋，私有弹幕改成666水一点，自己直接拷贝公用弹幕的上传的懒人都尽量都改下！顺便喊下口号——只要羊还在，羊毛奏事属于薅羊毛大军滴~！威武撒！
// document.getElementById("home_main_notice").innerHTML='薅羊毛脚本最近使用公用弹幕的经常被房间封号，所以强烈建议大家把自己弹幕改为"666"，"一发入魂"等比较水的弹幕哈，防止大军在此出现集体滑铁卢事件哈！另外薅羊毛多开教程已经新鲜出炉，想要体验四开、八开、十二开……的小伙伴们赶快<a href="https://popzoo.github.io/zoo/manyOpen.html" target="_blank"><strong style="color:	#48D1CC;">点击这里</strong></a>试试哈，电脑崩死了可别喷小编哈，俺也只是方法的搬运工！';
// 打赏码
function showQRCode(){
	let QRCodeObject= document.getElementById("qr_code_pic");
	if(QRCodeObject!=undefined){
		if(QRCodeObject.style.display=="none"){
			QRCodeObject.style.display = "inherit";
		}else{
			QRCodeObject.style.display = "none";
		}
	}
}
// 多开教程
function jumpToScanBoard(){
	window.open(document.location.protocol+'//'+document.domain+'/manyOpen.html','_blank');
}