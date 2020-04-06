var personInfo = { "Peoples" : [
  { "name" : "안젤리나 졸리", "link" : "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2F194%2F201405201551252851.jpg&type=u111_139&quality=95" ,
  "Ename" : "Angelina Jolie", "position" : "말레피센트 역" , "important" : 1},
  { "name" : "엘르 패닝", "link" : "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2F107%2F201704101441437641.jpg&type=u111_139&quality=95" ,
  "Ename" : "Elle Fanning", "position" : "오로라 역" , "important" : 1},
  { "name" : "미셸 파이퍼", "link" : "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2F74%2F201910071715179841.jpg&type=u111_139&quality=95" ,
  "Ename" : "Michelle Pfeiffer", "position" : "잉그리스 왕비 역" , "important" : 1},
  { "name" : "샘 라일리", "link" : "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2F126%2F201803231639018131.jpg&type=u111_139&quality=95",
  "Ename" : "Sam Riley", "position" : "디아발 역" , "important" : 1},
  { "name" : "치웨텔 에지오포", "link" : "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2F126%2F201910071725564171.jpg&type=u111_139&quality=95" ,
  "Ename" : "Chiwetel Ejiofor", "position" : "코널 역" , "important" : 1},
  { "name" : "요아킴 뢰닝" , "link" : "https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2F108%2F20130114160520441.jpeg&type=u111_139&quality=95" ,
  "Ename" : "Joachim Ronning" , "position" : "감독" , "important" : 0}
] 
};

var MoveInfo = {"Screen" : [
  {
    "Sname" : "CGV",
    "img" : "https://vignette.wikia.nocookie.net/logopedia/images/9/9f/Cgv_logo.png/revision/latest?cb=20180828170655",
    "home":"http://www.cgv.co.kr/movies/detail-view/?midx=81887",
    "price" : "https://t1.daumcdn.net/cfile/tistory/2441C94A56D0803E16",
  },
  {
    "Sname" : "LOTTE CINEMA",
    "img" : "https://file.namu.moe/file/2e40a344f57329adbc1ffa5d184a59a5540b93113de3d9a29bade3cad32af68b",
    "home":"http://www.lottecinema.co.kr/LCHS/Contents/Movie/Movie-Detail-View.aspx?movie=14314",
    "price" : "http://mblogthumb1.phinf.naver.net/MjAxODA1MDNfMSAg/MDAxNTI1MjgzMjc0MTgz.figwYr2X-LZpzyUnD49rh6M-kWcRbLyIDiRkJXZpFNEg.nDCv2fN5fH9cwgV9r2ImBjRXXtFPRjnhw-mt-H4IAXkg.PNG.urgoddes/%EC%BA%A1%EC%B2%98.PNG?type=w800",
  },
  {
    "Sname" : "MEGABOX",
    "img" : "https://image.uplus.co.kr/images/renewal/images/ps/pc/pb/submain/logo_megabox_250x130.png",
    "home":"http://www.megabox.co.kr/?menuId=movie",
    "price" : "https://t1.daumcdn.net/cfile/tistory/99E48E4C5A4CC98303",
  }
]};

function movieWrite(arr){

  for(var i = 0; i < arr.length; i++) {
    var Sname = arr[i].Sname;
    var PriceimgPath = arr[i].price;

    var onebrand = document.createElement("div");
    var screen = document.createElement("div");
    var brandImg = document.createElement("img");
    var linkurl = document.createElement("a");
    var priceTable = document.createElement("img");

    var Plus = document.createElement("img");
    Plus.className = "Plus";
    Plus.id = `plus_${i}`;
    Plus.setAttribute("src","../img/round-add-button.png");
    $(Plus).css('opacity','0');

    var PriceBtn = document.createElement("div");
    PriceBtn.className = "priceT";
    $(PriceBtn).text( arr[i].Sname + " 가격 보기");
    PriceBtn.id = `price_${i}`;

    onebrand.className = "screenInfo";
    onebrand.setAttribute("data-tab",`plus_${i}`);

    linkurl.className = "homePage";
    linkurl.setAttribute("href",`${arr[i].home}`);

    brandImg.className = "brandlogo";
    brandImg.setAttribute("src",`${arr[i].img}`);
    $(brandImg).css('width','180px');
    screen.className = "brandName";
    screen.appendChild(document.createTextNode(Sname));

    onebrand.append(brandImg);
    onebrand.append(screen);

    linkurl.append(Plus);
    linkurl.append(onebrand);

    $('#brands').append(PriceBtn);
    $('#brands').append(linkurl);
  }
}

$(document).ready(function(){
   
  peopleWrite(personInfo.Peoples);
  movieWrite(MoveInfo.Screen);
  
  $('ul.tabs li').click(function(){
    var tab_id = $(this).attr('data-tab');
 
    $('ul.tabs li').removeClass('yes');
    $('.tab-content').removeClass('yes');
 
    $(this).addClass('yes');
    $("#"+tab_id).addClass('yes');
  })

  $('.one').click(function(){
    $('.one').removeClass('o');
    $(this).addClass('o');
  })

  $('.people').hover(function(){
    var people_id = $(this).attr('data-tab');

    $(`#${people_id}`).css('width','300px');
    $(`#${people_id}`).css('opacity','1');
  })

  $('.screenInfo').mouseenter(function(){
    var Plus_id = $(this).attr('data-tab');
    $(`#${Plus_id}`).css('opacity','1');
  });

  $('.screenInfo').mouseleave(function(){
    var Plus_id = $(this).attr('data-tab');
    $(`#${Plus_id}`).css('opacity','0');
  });


  $('#price_0').click(function(){
    window.open("../html/cgv.html","CGV 가격","width=600, height=500, left=100, top=50");
  });

  $('#price_1').click(function(){
    window.open("../html/lotte.html","롯데시네마 가격","width=600, height=500, left=100, top=50");
  });

  $('#price_2').click(function(){
    window.open("../html/megabox.html","메가박스 가격","width=600, height=500, left=100, top=50");
  });

  $('#buying').click(function(){
    window.open("../html/buy.html","예매하기","width=600, height=500, left=100, top=50");
  });
})

var myVideo = document.getElementById("video1");

function playPause(){
  if (myVideo.paused){
    $('#play').css('background','rgb(34, 69, 115)');
    $('#play').css('color','#ffffff');
    $('#play').text("Pause");
    myVideo.play(); 
  }
  else{
    $('#play').css('background','#ffffff');
    $('#play').css('color','rgb(34, 69, 115)');
    $('#play').css('cursor','pointer');
    $('#play').text("Play");
    myVideo.pause(); 
  }
}

function choiceTime(time){
  //날짜와 시간 빈칸에 넣기
  $('#selectTime').empty();
  $('#selectTime').text(time);
}

function choiceDate(date){
  $('#selectDate').empty();
  $('#selectDate').text(date);
}

function peopleWrite(arr) {

  for(var i = 0; i < arr.length; i++) {
      var name = arr[i].name;
      var ename = arr[i].Ename;
      var position = arr[i].position;

      var info = document.createElement("div");
      var node = document.createElement("li");
      var imgT = document.createElement("img");

      var infoName = document.createElement("div");
      var infoEName = document.createElement("div");
      var infoPos = document.createElement("div");

      info.className = "NP";
      info.id = `people_${i}`;
      infoName.className = "Name";
      infoEName.className = "eName";
      infoPos.className = "position";
      node.className = "people";
      node.setAttribute("data-tab",`people_${i}`);
      imgT.className = `img-${i}`;

      imgT.setAttribute("src",`${arr[i].link}`);

      infoName.appendChild(document.createTextNode(name));
      infoEName.appendChild(document.createTextNode(ename));
      infoPos.appendChild(document.createTextNode(position));

      info.appendChild(infoName);
      info.appendChild(infoEName);
      info.appendChild(infoPos);

      node.appendChild(imgT);
      node.appendChild(info);

      if(arr[i].important == 0)
      {
        info.className = "dNP";
        document.getElementById('director').appendChild(imgT);
        document.getElementById('director').appendChild(info);
      }
      else{
        document.getElementById('peopleList').appendChild(node);
        document.getElementById('peopleList').appendChild(document.createElement("br"));
      }
      // var item = document.getElementsByClassName(node.className).item(0);
      // item.setAttribute("color","#90afcb");
  }

}