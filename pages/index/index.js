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
        menuList:[
        {
          name:'首页',
          cur:true,
        },
          {
          name:'资讯',
          cur:false,
        }
        ],
    menu:[
      {
        name:'find_school',
        text:'找学校',
        url:'/pages/newsList/newsList',
      },
       {
        name:'find_top',
        text:'找专业',
        url:'/pages/newsList/newsList',
      },
       {
        name:'select_usa',
        text:'找留学',
        url:'/pages/newsList/newsList',
      },
       {
        name:'find_ask',
        text:'问答',
        url:'/pages/newsList/newsList',
      },
       {
        name:'select_school',
        text:'选机构',
        url:'/pages/newsList/newsList',
      },
       {
        name:'select_book',
        text:'选课程',
        url:'/pages/newsList/newsList',
      },
       {
        name:'find_course',
        text:'咨询',
        url:'/pages/newsList/newsList',
      },
       {
        name:'calc',
        text:'申请留学',
        url:'/pages/newsList/newsList',
      },
      
    ],
    conner:[
      {
        name:'01',
        text:'2019QS世界大学排行'
      },
       {
        name:'02',
        text:'2019USNEWS美国综合性大学排名'
      },
       {
        name:'03',
        text:'2019USNEWS澳大利亚大学排名'
      },
    ],
    currentType:'1',
    type:[
      {
        name:'美洲',
        code:'1',
      },
      {
        name:'欧洲',
        code:'2',
      },
      {
        name:'澳洲',
        code:'3',
      },
      {
        name:'亚洲',
        code:'4',
      },
    ],
    currentInformation:1,
    information:[
      {
        name:"最新留学",
        code:"1",
      },
       {
        name:"出国考试",
        code:"2",
      },
    ],
    school:[
      {
        name:'玛丽鲍德温学院',
        src:'http://img.jupeixun.cn/liuxue/000/000/749/749.png',
        description:'Mary Baldwin College，缩写MBC',
        rank:'31'
      },
      {
        name:'玛丽鲍德温学院',
        src:'http://img.jupeixun.cn/liuxue/000/000/749/749.png',
        description:'Mary Baldwin College，缩写MBC',
        rank:'31'
      },
      {
        name:'玛丽鲍德温学院',
        src:'http://img.jupeixun.cn/liuxue/000/000/749/749.png',
        description:'Mary Baldwin College，缩写MBC',
        rank:'31'
      },
      {
        name:'玛丽鲍德温学院',
        src:'http://img.jupeixun.cn/liuxue/000/000/749/749.png',
        description:'Mary Baldwin College，缩写MBC',
        rank:'31'
      }
    ],
    informationList:[
      {
        name:'玛丽鲍德温学院',
        src:'http://img.jupeixun.cn/liuxue/000/000/749/749.png',
        description:'Mary Baldwin College，缩写MBC',
        rank:'31'
      },
      {
        name:'玛丽鲍德温学院',
        src:'http://img.jupeixun.cn/liuxue/000/000/749/749.png',
        description:'Mary Baldwin College，缩写MBC',
        rank:'31'
      },
      {
        name:'玛丽鲍德温学院',
        src:'http://img.jupeixun.cn/liuxue/000/000/749/749.png',
        description:'Mary Baldwin College，缩写MBC',
        rank:'31'
      },
      {
        name:'玛丽鲍德温学院',
        src:'http://img.jupeixun.cn/liuxue/000/000/749/749.png',
        description:'Mary Baldwin College，缩写MBC',
        rank:'31'
      }
    ]
  },
  changeUrl(e){
     swan.navigateTo({url:e.currentTarget.dataset.pointUrl});
  },
  changeToList(e){
    if(!e.currentTarget.dataset.cur){
      swan.navigateTo({url:e.currentTarget.dataset.pointUrl});
      this.scrollMenu();
    }
  },
  onLoad() {
    swan.showLoading({
        title: '数据加载中',
        mask: true
    });
    var _this = this;
    var appInstance = getApp();
    swan.request({
      url: appInstance.api + 'bdprogram/home/', 
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
            school:_data.school,
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
  changeType: function(e) {
    this.setData({'currentType': e.currentTarget.dataset.code});
  },
   changeInformation: function(e) {
    this.setData({'currentInformation': e.currentTarget.dataset.code});
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
})
