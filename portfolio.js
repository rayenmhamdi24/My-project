function makeProfil(name,certificates,email,facebook,tiktok,hobbies){
    return{
        name:name,
        certificates:certificates,
        email:email,
        facebook:facebook,
       tiktok:tiktok,
        hobbies:hobbies
       }
    }
     var profil=makeProfil(
         "Rayen Mhamdi",
       ["NLP" ,"ITL"  ,"Reiki"],
       "mailto:rayenm374@gmail.com",
      "https://www.facebook.com/profile.php?id=100011786647410&mibextid=ZbWKwL", 
        "https://www.tiktok.com/@rayemhamdi2024?_t=8p1k3JTjytN&_r=1",
        ["singing","watching movies"]
     )


$("body").append(
 `<div ${profil.name}</div>
  <div> ${profil.certificates} </div>
  <div><a href=" ${profil.email} ">Email me </a></div>
  <div><a href="${ profil.facebook}">Facebook </a></div>
   <div><a href=${ profil.tiktok}>TikTok</a></div>
  <div>${profil.hobbies} </div>`)
   

    
    

    
       
       
   