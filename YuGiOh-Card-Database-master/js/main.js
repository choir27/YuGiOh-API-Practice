class DOM{
  getDOM(ele){
    return document.querySelector(ele)
  }
}

let dom = new DOM()

class SearchYuGiOh{
  getCard(){
    fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php')
    .then(res=>res.json())
    .then(data=>{
      let value = dom.getDOM('input').value.trim().toLowerCase()
      data.data.forEach(ele=>{
        console.log(ele.name)
       if(ele.name.toLowerCase()===value){
        dom.getDOM('h2').innerText = ele.name
        dom.getDOM('p').innerText = ele.desc
        dom.getDOM('img').src = ele.card_images[0].image_url
      }
      })
      })
    }
}

let search = new SearchYuGiOh()

  dom.getDOM('#submit').addEventListener('click',search.getCard)


  class OpenNav{
   navSlide(){
      document.getElementById("sidebar").style.width = "20%";
      document.getElementById("close").style.display = "block";
      document.getElementById("open").style.display = "none";
      document.querySelector('.sideContent').style.display = 'flex';
    }
  }

  class CloseNav{
    navSlide() {
      document.getElementById("sidebar").style.width = "0";
      document.getElementById("close").style.display = "none";
      document.getElementById("open").style.display = "block";
      document.querySelector('.sideContent').style.display = 'none';
    }
  }

  let openNav = new OpenNav()
  let closeNav = new CloseNav()

  document.querySelector('#close').addEventListener('click',closeNav.navSlide)
  document.querySelector('#open').addEventListener('click',openNav.navSlide)

  