/**
 * @file index.js
 * @author swan
 */
const app = getApp()

Page({
  data: {
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
    ]
  },
  changeUrl(e){
     swan.navigateTo({url:e.currentTarget.dataset.pointUrl});
  },
  onLoad() {
    
  },
  changeType: function(e) {
    this.setData({'currentType': e.currentTarget.dataset.code});
  }
})
