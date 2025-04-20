const search = function () {

    const input = document.querySelector('.search-block > input')
    const searchBtn = document.querySelector('.search-block > button')
    // console.log(input);
    // console.log(searchBtn);
  
    searchBtn.addEventListener('click', () => {
        console.log(input.value);
      });

    // input.addEventListener('input', (event) => {
    //     console.log(event.target.value);
    // })
}

search()