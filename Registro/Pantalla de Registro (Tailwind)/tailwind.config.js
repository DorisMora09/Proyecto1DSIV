/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: { 
    extend: { 
      margin:{ 
        '600px': '600px', 
         '1307px':'1307px', 
         '375px':'350px', 
         '-259':'-259px'
      } ,
      colors:{ 
        browna:'#9C6D46' ,
        brownb:'#684A31', 
        gris:'#D9D9D9'
      }
    }, 
    fontFamily:{ 
      inknut:['Inknut Antiqua'] ,
      imbue:['Imbue']
    }  , 
   
  
  },
  plugins: [],
}

