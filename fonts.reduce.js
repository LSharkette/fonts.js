function computeStats(){
  var sums= fonts.reduce(sumWinAndMacStatus,{win:0, mac:0});

    function sumWinAndMacStatus (accum, font){
    accum.win+= font.win;
    accum.mac+= font.mac;
    return accum;
  }

sums.win/= fonts.length;
sums.mac/= fonts.length;

return sums;

}

function drawStats(){
  var stats=computeStats();

  document.querySelector('.win-stats .percentage').textContent=Math.round/;
  document.querySelector('.win-stats .percentage').textContent=Math.round/;
}

console.log(computeStats());

}) ();

//
