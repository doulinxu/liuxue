/**
 * @file index.js
 * @author swan
 */
const app = getApp()

Page({
  data: {
    loading:true,
    loadingAnimate:{},
    content:{
      title:"新加坡莱佛士学院地理位置",
      author:"知乎者也",
      time:"2018-11-30",
      text:[
        "新加坡莱佛士设计学院简介",
        "新加坡莱佛士设计学院隶属于世界知名的莱佛士学院集团。新加坡莱佛士设计学院主攻时尚设计、多媒体设计、珠宝设计、游戏动漫设计等专业方向，开设本科及硕士学术学位课程，是去新加坡设计学校领域留学具备十足优势的高校。",
        "新加坡莱佛士设计学院隶属于世界知名的莱佛士学院集团。新加坡莱佛士设计学院主攻时尚设计、多媒体设计、珠宝设计、游戏动漫设计等专业方向，开设本科及硕士学术学位课程，是去新加坡设计学校领域留学具备十足优势的高校。",
        "新加坡莱佛士设计学院隶属于世界知名的莱佛士学院集团。新加坡莱佛士设计学院主攻时尚设计、多媒体设计、珠宝设计、游戏动漫设计等专业方向，开设本科及硕士学术学位课程，是去新加坡设计学校领域留学具备十足优势的高校。",
        "新加坡莱佛士设计学院隶属于世界知名的莱佛士学院集团。新加坡莱佛士设计学院主攻时尚设计、多媒体设计、珠宝设计、游戏动漫设计等专业方向，开设本科及硕士学术学位课程，是去新加坡设计学校领域留学具备十足优势的高校。",
        "新加坡莱佛士设计学院隶属于世界知名的莱佛士学院集团。新加坡莱佛士设计学院主攻时尚设计、多媒体设计、珠宝设计、游戏动漫设计等专业方向，开设本科及硕士学术学位课程，是去新加坡设计学校领域留学具备十足优势的高校。",
      ],
      articleAppeared:[
        {
          title:'新加坡国立大学就业情况好不好',
          views:'2425',
          time:'2018-03-29',
          imgUrl:'http://img.jupeixun.cn/article/000/105/188/105188.jpg',
        },
        {
          title:'新加坡国立大学就业情况好不好',
          views:'2425',
          time:'2018-03-29',
          imgUrl:'http://img.jupeixun.cn/article/000/105/188/105188.jpg',

        },
        {
          title:'新加坡国立大学就业情况好不好',
          views:'2425',
          time:'2018-03-29',
          imgUrl:'http://img.jupeixun.cn/article/000/105/188/105188.jpg',
        },
        {
          title:'新加坡国立大学就业情况好不好',
          views:'2425',
          time:'2018-03-29',
          imgUrl:'http://img.jupeixun.cn/article/000/105/188/105188.jpg',
        },
      ]
    }
  },
  loading:function(e) {
    var loading = swan.createAnimation(
      {
        duration: 1000,
         delay: 0,
        timingFunction: 'liner',
        transformOrigin: '50% 50% 0',
      }
    );
    this.loading = loading;
    this.setData({
        loadingAnimate: loading.export(),
    });
    var n = 0;
   //连续动画需要添加定时器,所传参数每次+1就行
    this.timeInterval = setInterval(function () {
      // animation.translateY(-60).step()
      n=n+1;
      this.loading.rotate(180 * (n)).step()
      this.setData({
        loadingAnimate: this.loading.export()
      })
    }.bind(this), 300)
  },
  stopLoading:function(e){
    clearInterval(this.timeInterval)
    this.timeInterval = 0;
    this.setData({
      loading:false,
    });
  },
  onLoad() {
    this.loading();
    const _this = this;
    setTimeout(function(){
      _this.stopLoading();
    },2000);
  },
  changeType: function(e) {
    this.setData({'currentType': e.currentTarget.dataset.code});
  }
})
