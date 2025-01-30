let btn = document.querySelector('button');
let h2 = document.querySelector('h2');
let growth = document.querySelector('.growth');
let grow = 0;
let flag = 0;

btn.addEventListener('click', function () {
  if (flag == 0) {
    btn.disabled = true;
    let int = setInterval(function () {
      grow++;
      h2.innerHTML = grow + "%";
      growth.style.width = grow + "%";
    }, 50);

    setTimeout(function () {
      clearInterval(int);
      btn.innerHTML = "Downloaded";
      btn.disabled = false;
      flag = 1;
    }, 5000);
  } else {
    btn.innerHTML = "Download";
    h2.innerHTML = "0%";
    growth.style.width = "0%";
    grow = 0;
    flag = 0;
  }
});
