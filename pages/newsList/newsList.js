/**
 * @file index.js
 * @author swan
 */
const app = getApp()

Page({
  data: {
    loadingAnimate:{},
    loading:true,
    _height:0,
    animationData:{},
    menu:[
    {
      name:'首页',
      cur:false,
    },
      {
      name:'咨询',
      cur:true,
    }
    ],
    newslist:[
      {
        imgUrl:'http://img.jupeixun.cn/organize/default.jpg',
        title:'新加坡莱佛士学员地理位置新加坡莱佛士学员地理位置',
        author:'知乎者也',
        time:'2018-11-30',
        pointUrl:'',
      },
      {
        imgUrl:'http://img.jupeixun.cn/organize/default.jpg',
        title:'新加坡莱佛士学员地理位置新加坡莱佛士学员地理位置',
        author:'知乎者也',
        time:'2018-11-30',
        pointUrl:'',
      },
      {
        imgUrl:'http://img.jupeixun.cn/organize/default.jpg',
        title:'新加坡莱佛士学员地理位置新加坡莱佛士学员地理位置',
        author:'知乎者也',
        time:'2018-11-30',
        pointUrl:'',
      },
      {
        imgUrl:'http://img.jupeixun.cn/organize/default.jpg',
        title:'新加坡莱佛士学员地理位置新加坡莱佛士学员地理位置',
        author:'知乎者也',
        time:'2018-11-30',
        pointUrl:'',
      },
      {
        imgUrl:'http://img.jupeixun.cn/organize/default.jpg',
        title:'新加坡莱佛士学员地理位置新加坡莱佛士学员地理位置',
        author:'知乎者也',
        time:'2018-11-30',
        pointUrl:'',
      },{
        imgUrl:'http://img.jupeixun.cn/organize/default.jpg',
        title:'新加坡莱佛士学员地理位置新加坡莱佛士学员地理位置',
        author:'知乎者也',
        time:'2018-11-30',
        pointUrl:'',
      },
      {
        imgUrl:'http://img.jupeixun.cn/organize/default.jpg',
        title:'新加坡莱佛士学员地理位置新加坡莱佛士学员地理位置',
        author:'知乎者也',
        time:'2018-11-30',
        pointUrl:'',
      },
      {
        imgUrl:'http://img.jupeixun.cn/organize/default.jpg',
        title:'新加坡莱佛士学员地理位置新加坡莱佛士学员地理位置',
        author:'知乎者也',
        time:'2018-11-30',
        pointUrl:'',
      }

    ]
  },
  returnIndex(e){
      swan.navigateBack();
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
  scrollMenu: function (e) {
        var animation = swan.createAnimation();
        let _height = this.data._height;
        if(_height == 0){
          _height = '100%';
        }else{
          _height = 0;
        }
        animation.height(_height).step();
        this.setData({
            animationData: animation.export(),
            _height:_height,
        });
    },
  onLoad() {
    this.loading();
    const _this = this;
    setTimeout(function(){
      _this.stopLoading();
    },2000);
  },
  changeUrl(e){
     swan.navigateTo({url:e.currentTarget.dataset.pointUrl});
  },
})
