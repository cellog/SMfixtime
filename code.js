(function() {
 var v = document.createElement('div');
 v.id = 'fixedtime';
 v.style.overflow = "hidden";
 v.style.textAlign = "center";
 v.style.fontFamily = "arial, helvetica";
 v.style.fontWeight = "bold";
 v.style.fontSize = "36px";
 v.style.color = "#fff";
 v.style.textShadow = "#000 0px 1px 3px";
 v.style.display = "none";
 document.getElementById('hora').insertAdjacentElement("beforeBegin", v);
 document.getElementById('hora').style.display = 'none';
 v.style.display = "block";
 var checkTime = function(i)
  {
  if (i<10)
    {
    i="0" + i;
    }
  return i;
  }
 var startTime = function()
 {
  var today=new Date();
  var h=today.getHours();
  var m=today.getMinutes();
  var s=today.getSeconds();
  // add a zero in front of numbers<10
  m=checkTime(m);
  s=checkTime(s);
  document.getElementById('fixedtime').innerHTML=h+":"+m+":"+s;
  t=setTimeout(function(){startTime()},500);
 }
 startTime();
})();
