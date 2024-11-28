setInterval(() => {
  let date = new Date();
  let hr = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();

  let hrRotation = hr * 30 + min / 2 + sec / 12;
  let minRotation = 6 * min + sec / 10;
  let secRotation = 6 * sec;
  document.getElementById("hr").style.transform = `rotate(${hrRotation}deg)`;
  document.getElementById("min").style.transform = `rotate(${minRotation}deg)`;
  document.getElementById("sec").style.transform = `rotate(${secRotation}deg)`;
}, 1000);
