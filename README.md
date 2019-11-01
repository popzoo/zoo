# zoo
   <ul>
    <li>时光轴页面展示，采用canvas技术渲染气泡，结合jquery的动画效果！</li>
重磅推出新一代人工智能AI小思，包括对话机器人、知识图谱、语义理解、自然语言处理工具。知识图谱融合了两千五百多万的实体，拥有亿级别的实体属性关系，机器人采用了基于知识图谱的语义感知与理解，致力于最强认知大脑。自然语言处理工具包的功能有：中文分词、词性标注、命名实体识别、关键词提取、文本摘要、新词发现、情感分析等。</li>
  </ul>
    <table>
        <tr><td><a href="https://popzoo.github.io/zoo/" target="_blank"><img src="https://rawcdn.githack.com/popzoo/zoo/912024488fd12525db0917d8a3adcc58bd374783/img/timelineshow.jpg" width="100%"></a></td></tr>
   </table>
   <ul>
    <li>新增<a href="https://popzoo.github.io/zoo/" style=" color:red; text-decoration:none" target="_blank">时光轴</a>展示功能，大家可以从这里查看脚本的出生，成长的历程，而且还集成了AI人工小思机器人的聊天功能呦，常用的聊天弹幕，就是这个小家伙发出的，很智能，有木有！</li>
  </ul>


# 斗鱼部分常用接口API
// 鱼吧个人信息的json接口(iframe跨域)
https://yuba.douyu.com/wbapi/web/user/info

// 指定房间的礼物列表
https://gift.douyucdn.cn/api/gift/v2/web/list?rid=4616567

// 所有礼物静态图片
https://webconf.douyucdn.cn/resource/common/gift/flash/gift_effect.json

// 房间详细信息
https://www.douyu.com/betard/99999
room -- cityname    "close_notice_ctime": false,  "close_notice_always": false,
        
// 房间大致信息，在线人数、信用、开播时间等                   
https://www.douyu.com/swf_api/h5room/6241733               

// 获取用户ip地址
https://www.douyu.com/lapi/live/getH5Play/582074     post请求

// 斗鱼所有房间信息
https://www.douyu.com/japi/weblist/apinc/rec/list?num=20&page=66
https://www.douyu.com/japi/weblist/apinc/rec/list?num=20&offset=66

// 签到json 接口列表，显示前100
https://www.douyu.com/japi/roomuserlevel/apinc/getSignInRankInfoList?rid=5175753

https://webconf.douyucdn.cn/resource/common/activity/activity_answer_setting_w.json

// 全部车队接口
https://webconf.douyucdn.cn/resource/common/fleet/fleet_config.json

// 全部礼物API
https://webconf.douyucdn.cn/resource/common/gift/flash/gift_effect.json

//关注列表数据，带分页
https://www.douyu.com/wgapi/livenc/liveweb/follow/list

// 特别关注列表
https://www.douyu.com/wgapi/livenc/liveweb/follow/special

斗鱼车队签到
https://msg.douyu.com/v3/motorcade/signs/weekly?mid=%40TGS%234X6OTS7FD&timestamp=0.9802432343430942

// 斗鱼粉丝牌数据API
https://webconf.douyucdn.cn/resource/common/fans_medal_web_v2.json

// 随机火力全开房间号
https://www.douyu.com/japi/firepower/apinc/activeTask/getRecRid
