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
