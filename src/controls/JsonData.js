import Images from '../utils/Images';

export default {
  data: [
    {
      id: 1,
      backgroundImg: Images.bg1,
      text: 'Mathematics',
      images: Images.maths,
      fillColor: '#ff3600',
    },
    {
      id: 2,
      backgroundImg: Images.bg2,
      images: Images.chart,
      text: 'Accountancy',
      fillColor: '#462066',
    },
    {
      id: 3,
      backgroundImg: Images.bg3,
      images: Images.economics,
      text: 'Economics',
      fillColor: '#005044',
    },
    {
      id: 4,
      backgroundImg: Images.bg4,
      images: Images.businessStudy,
      text: 'Business Studies',
      fillColor: '#113c9f',
    },
  ],

  profileData: [
    {
      text: '20167383033',
      images: Images.idCard,
    },
    {
      text: 'Aryan Kumar',
      images: Images.students,
    },
    {
      text: 'CBSE Board',
      images: Images.books,
    },
    {
      text: '11th',
      images: Images.mathss,
    },
    {
      text: 'English',
      images: Images.language,
    },
    {
      text: 'example@gmail.com',
      images: Images.email,
    },
    {
      text: '91-7838383838',
      images: Images.smartphone,
    },
    {
      text: 'Add your Birthday',
      images: Images.gift,
    },
    {
      text: 'Select Gender',
      images: Images.sexual,
    },
    {
      text: 'Add Address',
      images: Images.map,
    },
  ],
  ChooseClasses: [
    {
      id: 1,
      backgroundImg: Images.bg1,
      text: '12th-PCM',
      images: Images.maths,
    },
    {
      id: 2,
      backgroundImg: Images.bg2,
      images: Images.chart,
      text: '12th-Comm',
      fillColor: '#462066',
    },
    {
      id: 3,
      backgroundImg: Images.bg3,
      images: Images.economics,
      text: '11th-PCM',
      fillColor: '#005044',
    },
    {
      id: 4,
      backgroundImg: Images.bg4,
      images: Images.businessStudy,
      text: '11th-Comm',
      fillColor: '#113c9f',
    },
    {
      id: 5,
      backgroundImg: Images.bg1,
      text: '10th-Comm',
      images: Images.maths,
    },
    {
      id: 6,
      backgroundImg: Images.bg2,
      images: Images.chart,
      text: '10th-Science',
      fillColor: '#462066',
    },
    {
      id: 7,
      backgroundImg: Images.bg3,
      images: Images.economics,
      text: '9th',
      fillColor: '#005044',
    },
    {
      id: 8,
      backgroundImg: Images.bg4,
      images: Images.businessStudy,
      text: '8th',
      fillColor: '#113c9f',
    },

    {
      id: 9,
      backgroundImg: Images.bg1,
      text: '6th',
      images: Images.maths,
    },
    {
      id: 10,
      backgroundImg: Images.bg2,
      images: Images.chart,
      text: '5th',
      fillColor: '#462066',
    },
    {
      id: 11,
      backgroundImg: Images.bg3,
      images: Images.economics,
      text: '4th',
      fillColor: '#005044',
    },
    {
      id: 12,
      backgroundImg: Images.bg4,
      images: Images.businessStudy,
      text: '3rd',
      fillColor: '#113c9f',
    },
  ],

  SelectLanguage: [
    {
      id: 1,
      backgroundImg: Images.bg1,
      text: 'Hindi',
      images: Images.hindi,
    },
    {
      id: 2,
      backgroundImg: Images.bg2,
      images: Images.english,
      text: 'English',
    },
    {
      id: 3,
      backgroundImg: Images.bg3,
      images: Images.hinglish,
      text: 'Hinglish',
    },
  ],

  Drawerdata: [
    {
      id: 1,
      mainTxt: 'Account',
      mainImg: Images.Account,
      isSelected:false ,
      subArr: [
        {id: 1, name: 'Profile', Image: Images.students , navigate:"Profile"},
        {id: 2, name: 'Edu Wallet', Image: Images.wallat,navigate:"EduWallet"},
        {id: 3, name: 'Buy a Course', Image: Images.buyACourse,navigate:"BuyCourseScreen"},
        {id: 4, name: 'My Course', Image: Images.myCourse,navigate:"MyCourseScreen"},
        {id: 5, name: 'Rewards', Image: Images.medal,navigate:"Profile"},
        {id: 6, name: 'Parent Account', Image: Images.parentAc,navigate:"Profile"},
      ]
    },
    {

      id: 2,
      mainTxt: 'Learn',
      mainImg: Images.learn,
      isSelected:false ,
      subArr: [
        {id: 1, name: 'My Goals', Image: Images.mygoal},
        {id: 2, name: 'My Progress Report', Image: Images.myprogressReport},
        {id: 3, name: 'Expert Answers', Image: Images.expert},
        {id: 4, name: 'Dictionary', Image: Images.dictionary},
        {id: 6, name: 'My Downloads', Image: Images.download},
      ]},
      {

      id: 3,
      mainTxt: 'About',
      mainImg: Images.about,
      isSelected:false ,
      subArr: [
        {id: 1, name: 'About us', Image: Images.aboutUs},
        {id: 2, name: 'Terms & Conditions', Image: Images.termsConditions},
        {id: 3, name: 'Disclaimer', Image: Images.myCourse},
        {id: 4, name: 'Privacy Policy', Image: Images.privacy},
      ]},
      {
        id: 4,
        mainTxt: 'Edu Support',
        mainImg: Images.supports,
        subArr:[]
        
      },
      {
        id: 5,
        mainTxt: 'Refer & Earn',
        mainImg: Images.buyACourse,
        subArr:[]
      },
      {
        id: 6,
        mainTxt: 'Logout',
        mainImg: Images.logout,
        subArr:[]
      }

     
  
  ],

EduWallet:["+ ADD EDU-COINS", "VIEW TRANSACTION HISTORY","BUY COURSE"], 

buyCourses: [
  {
    id: 1,
    backgroundImg: Images.bg1,
    text: 'Mathematics',
    images: Images.maths,
    fillColor: '#ff3600',
  },
  {
    id: 2,
    backgroundImg: Images.bg2,
    images: Images.chart,
    text: 'Accountancy',
    fillColor: '#462066',
  },
  {
    id: 3,
    backgroundImg: Images.bg3,
    images: Images.economics,
    text: 'Economics',
    fillColor: '#005044',
  },
  {
    id: 4,
    backgroundImg: Images.bg4,
    images: Images.businessStudy,
    text: 'Business Studies',
    fillColor: '#113c9f',
  },
  {
    id: 1,
    backgroundImg: Images.bg1,
    text: 'Mathematics',
    images: Images.maths,
    fillColor: '#ff3600',
  },
  {
    id: 2,
    backgroundImg: Images.bg2,
    images: Images.chart,
    text: 'Accountancy',
    fillColor: '#462066',
  },
  {
    id: 3,
    backgroundImg: Images.bg3,
    images: Images.economics,
    text: 'Economics',
    fillColor: '#005044',
  },
  {
    id: 4,
    backgroundImg: Images.bg4,
    images: Images.businessStudy,
    text: 'Business Studies',
    fillColor: '#113c9f',
  },
  {
    id: 1,
    backgroundImg: Images.bg1,
    text: 'Mathematics',
    images: Images.maths,
    fillColor: '#ff3600',
  },
  {
    id: 2,
    backgroundImg: Images.bg2,
    images: Images.chart,
    text: 'Accountancy',
    fillColor: '#462066',
  },
  {
    id: 3,
    backgroundImg: Images.bg3,
    images: Images.economics,
    text: 'Economics',
    fillColor: '#005044',
  },
  {
    id: 4,
    backgroundImg: Images.bg4,
    images: Images.businessStudy,
    text: 'Business Studies',
    fillColor: '#113c9f',
  },
],


};
