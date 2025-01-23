  document.onreadystatechange = function () {
    if (document.readyState === "complete") {
      cities = [];
      let xhr = new XMLHttpRequest();
      ul = document.getElementById("codelist");
      //xhr.open('GET', 'https://raw.githubusercontent.com/samayo/country-json/master/src/country-by-cities.json', true);
      xhr.open('GET', 'country-by-cities.json', true);
      xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
          const res = JSON.parse(xhr.responseText);
          Object.entries(res).forEach((entry) => {
           if(entry[1].hasOwnProperty('cities')) {
            Object.entries(entry[1].cities).forEach((city) => {
              if( ! /\s/g.test(city) ) {
                cities.push(city);
              }
            });
           }
          });
          for(i=1;i<11;i++){
            let li = document.createElement("li");
            //li.classList.add("codename");
            li.onclick = function() { navigator.clipboard.writeText(li.textContent || li.innerText); }
            number = Math.floor(Math.random() * 90) + 10;
            li.textContent = number+cities[ Math.floor(Math.random() * cities.length) ][1];
            let listItem = ul.appendChild(li); 
          }
        }
      };
      xhr.send();
    };
  };
