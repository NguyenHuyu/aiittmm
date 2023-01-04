/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    fontSize: {
      sm: '0.8rem',
      smm:'0.5rem',
      s007:'0.6rem',
      s077:'0.7rem',
      s07:'0.85rem',
      smmm:'0.4rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
      '6xl': '3.663rem',
    },
    extend: {
      backgroundImage: {
        'footer-texture': "url('/src/assets/—Pngtree—blue connection line backgroundl_1238386.png')",
        'background-news':"url('/src/assets/banner-header.jpg)"
      },
      width:{
        100: "100px",
        150: "150px",
        190: "190px",
        225: "225px",
        275: "275px",
        300: "300px",
        340: "340px",
        350: "350px",
        375: "375px",
        460: "460px",
        656: "656px",
        880: "880px",
        508: "508px",
      },
      height:{
        80:"80px",
        150:"150px",
        225:"225px",
        300:"300px",
        340:"340px",
        370:"370px",
        420:"420px",
        510:"510px",
        600:"600px",
        685:"685px",
        800:"800px",
        864:"864px",
        1200:"1200px",
        2000:"3850px",
        "90vh":"90vh",
        "12vh":"12vh",
        "80vh":"80vh",
        "72vh":"72vh",
      },
      minWidth:{
        210:"210px",
        350:"350px",
        620:"620px"
      },
      screens:{
        sm:"640px", 
        md:"768px",
        lg:"1024px",
        xl:"1280px",
        "2xl":"1536px"
      },
      colors:{
        headingColor: "#2e2e2e",
        textColor:"#515151",
        cartNumbg:"#e80013",
        primary:"#f5f3f3",
        headerColor:"#040063",
        bgHFto:"#6e6e70",
        gbHFfrom:"#6c6c6e",
        bgSitemap:"9da34c",
        bgBody:"#dddddd",
        bgCard:"#f6f6f6",
        bgCardB:"F6F6F6"
      },
    },
  },
  plugins: [],
}
