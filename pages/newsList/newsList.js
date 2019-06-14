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
    page:1,
    menu:[
    {
      name:'首页',
      cur:false,
    },
      {
      name:'资讯',
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
    let seoInfo = {
      title:'【聚培训网】优质教育培训机构就在聚培训网',
      seokeywords:'聚培训网,教育培训,教育培训机构,教育培训机构排名,语言培训,雅思培训,托福培训,小语种培训,英语培训',
      seodescription:'聚培训网(www.jupeixun.cn)提供优质教育培训机构及课程信息,汇集众多优质培训机构、培训课程和培训老师,近十万个教育培训课程班,包含语言培训班,雅思培训班,托福培训班,小语种培训班,英语培训班等,找培训机构排名、搜培训学校地址、选行业名师就上聚培训网!'
    };
    swan.setPageInfo && swan.setPageInfo({
        title: seoInfo.title,
        keywords: seoInfo.seokeywords,
        description: seoInfo.seodescription,
        success: function () {
            console.log('列表页页面基础信息设置完成');
        }
    });
    this.loading();
    const _this = this;
    setTimeout(function(){
      _this.stopLoading();
    },2000);
     swan.showLoading({
        title: '数据加载中',
        mask: true
    });
    var appInstance = getApp();
    swan.request({
      url: appInstance.api + 'bdprogram/list/c0/?page=3&pagesize=10', 
      method: 'GET',
      dataType: 'json',
      // data: {
      //     key: 'value'
      // },
      header: {
          'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res);
        if(res.statusCode === 200 && res.data.status === 200){
          var _data = res.data.data;
          _this.setData({
            newslist:_data.list,
            informationList:_data.news,
            loading:false,
          });
        }
        swan.hideLoading();
      },
      fail: function (err) {
          console.log('错误码：' + err.errCode);
          console.log('错误信息：' + err.errMsg);
      }
    });
  },
  changeUrl(e){
     swan.navigateTo({url:e.currentTarget.dataset.pointUrl});
  },
  changeToIndex(e){
    if(!e.currentTarget.dataset.cur){
      swan.navigateTo({url:e.currentTarget.dataset.pointUrl});
      this.scrollMenu();
    }
  },
  bindscroll(e){
    console.log(e);
  },
    onReachBottom:function(){
    //进行翻页操作
    const {page} = this.data;
    this.getLists(page)
    
  },
  getLists(page){
    swan.showLoading({
        title: '数据加载中',
        mask: true
    });
    var _this = this;
    var appInstance = getApp();
    swan.request({
      url: appInstance.api + 'bdprogram/list/c0/',
      data:{
        page,
        pageSize:10,
      },
      method: 'GET',
      dataType: 'json',
      header: {
          'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        if(res.statusCode === 200 && res.data.status === 200){
          var _data = res.data.data;
          _this.setData({
            newslist:_this.data.newslist.concat(_data.list),
            loading:false,
            page:_this.data.page += 1,
          });
          // seo信息
          // let seoInfo = {
          //   seokeywords:'小学作文,初中作文,高中作文,中考作文,高考作文,满分作文',
          //   seodescription:'聚培训作文频道涵盖了小学作文、初中作文、高中作文等,还包含了其它主题作文内容:中考作文,高考作文,满分作文,写人作文,写景作文等内容,查找各种主题作文内容,就上聚培训作文频道.'
          // };
          // swan.setPageInfo && swan.setPageInfo({
          //     title: _data.name,
          //     keywords: seoInfo.seokeywords,
          //     description: seoInfo.seodescription,
          //     success: function () {
          //         console.log('列表页页面基础信息设置完成');
          //     }
          // });
        }else{
          swan.showModal({
              title: '提示',
              content: '网络请求错误，请重新打开小程序',
              cancelColor: '#999999',
              success: function (res) {
                  if (res.confirm) {
                      
                  }
              }
          });
        }
        swan.hideLoading();
      },
      fail: function (err) {
          console.log('错误码：' + err.errCode);
          console.log('错误信息：' + err.errMsg);
          swan.showModal({
              title: '提示',
              content: '网络请求错误，请重新打开小程序',
              cancelColor: '#999999',
              success: function (res) {
                  if (res.confirm) {
                      
                  }
              }
          });
      }
    });
  },
})
