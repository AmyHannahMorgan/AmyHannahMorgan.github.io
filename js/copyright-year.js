const yearHTML = document.querySelector('#copyrightYear'),
thisYear = new Date();

yearHTML.innerHTML = thisYear.getFullYear();
