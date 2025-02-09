const tileData = [
  {
    title: "Pre-Ceremony Shots",
    stockData: [
      {
        imageUrl: "makeup (2).jpg",
        discription:
          "Getting Ready: Capture the bride and groom getting ready, focusing on candid moments like the bride's makeup, the groom fixing his tie, or a bridesmaid adjusting the dress.",
      },
      {
        imageUrl: "groom-dress.webp",
        discription:
          "Details: Highlight close-ups of the wedding dress, shoes, jewelry, rings, bouquet, and invitation suite.",
      },

      {
        imageUrl: "first-look-lin-jirsa-1.jpg",
        discription:
          "First Look: Photograph the emotional reaction during the first look between the bride and groom.",
      },
    ],
  },
  {
    title: "Ceremony Shots",
    stockData: [
      {
        imageUrl: "wed walk 2.jpg",
        discription:
          "The Aisle Walk: Nap the bride walking down the aisle and the groom’s reaction.",
      },
      {
        imageUrl: "look.jpg",
        discription:
          "Vows: Zoom in on hands, facial expressions, or tearful moments during the exchange of vows.",
      },

      {
        imageUrl: "Kerala-Wedding-Photography-55-1200x800.jpg",
        discription:
          "Wide Angle: Use a wide-angle lens to capture the entire venue and the couple at the altar.",
      },
    ],
  },
  {
    title: "Post-Ceremony Portraits",
    stockData: [
      {
        imageUrl: "Kerala-Wedding-Photography-75.jpg",
        discription:
          "Golden Hour Glow: Schedule couple portraits during the golden hour for soft, romantic lighting.",
      },
      {
        imageUrl: "mirror.jpg",
        discription:
          "Reflection Shots: Use mirrors, puddles, or glass to create artistic reflection effects.",
      },

      {
        imageUrl: "candid.jpg",
        discription:
          "Candid Laughter: Encourage the couple to share a joke or moment to capture genuine smiles.",
      },
    ],
  },
  {
    title: "Group and Family Shots",
    stockData: [
      {
        imageUrl: "AMILY AND FRNDS.jpg",
        discription:
          "Generational Photo: Include grandparents and other older relatives for a meaningful family portrait.",
      },
      {
        imageUrl: "Kerala-Wedding-Photography-55-1200x800.jpg",
        discription:
          "Fun Bridal Party: Have the bridal party jump, strike silly poses, or cheer with confetti.",
      },

      {
        imageUrl: "first-look-lin-jirsa-1.jpg",
        discription:
          "First Look: Photograph the emotional reaction during the first look between the bride and groom.",
      },
    ],
  },
  {
    title: "Reception Fun",
    stockData: [
      {
        imageUrl: "Kerala-Christian-Enagement-Pics-186-1200x800.jpg",
        discription:
          "First Dance: Focus on the couple and the ambiance, such as string lights or a sparkler exit.",
      },
      {
        imageUrl: "RECEPTION.webp",
        discription:
          "Decor Details: Document the centerpieces, cake, and venue setup before guests arrive.",
      },

      {
        imageUrl: "RECEPTION MOMENTS.webp",
        discription:
          "Candid Guests: Photograph heartfelt moments like kids playing, laughter, or toasts.",
      },
    ],
  },
  
];
document.addEventListener("DOMContentLoaded", () => {
  const mainContainer = document.querySelectorAll(".container1");

  if (mainContainer) {
    tileData.forEach((tile) => {
      const h3 = document.createElement("h3");
      h3.innerText = tile.title;
      mainContainer[0].appendChild(h3);

      const wedCntr = document.createElement("div");
      wedCntr.setAttribute("class", "wedcntr");
      tile.stockData.forEach((stock) => {
        const subWedcntr = document.createElement("div");
        subWedcntr.setAttribute("class", "sub-wed-cntr");

        const para = document.createElement("p");
        para.appendChild(document.createTextNode(stock.discription));
        subWedcntr.appendChild(para);
        

        const imgCntr = document.createElement("div");
        imgCntr.setAttribute("class", "img-cntr");
        const image =document.createElement("img");
        image.setAttribute("src","asset/images/photography/"+stock.imageUrl);
        imgCntr.value= stock;
        imgCntr.setAttribute ("onclick", "imageOpen(this.value)");
        imgCntr.appendChild(image);
        subWedcntr.appendChild(imgCntr);
        wedCntr.appendChild(subWedcntr);

      });
      mainContainer[0].appendChild(wedCntr);
    });
  } else {
    console.error("not found");
  }
});
function imageOpen(stock) {
  const modal=document.querySelectorAll(".imgModal");
  modal[0].setAttribute("src",`asset/images/photography/${stock.imageUrl}`);
  const modalImgCntr=document.querySelectorAll(".modalCntr");
  modalImgCntr[0].setAttribute("style","display:grid");
  document.body.style.position="fixed";
};

function  closeModal(){
  const modalImgCntr=document.querySelectorAll(".modalCntr");
  modalImgCntr[0].setAttribute("style","display:none");
  document.body.style.position="";
}
