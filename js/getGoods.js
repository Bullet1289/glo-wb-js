const getGoods = () => {
    const links = document.querySelectorAll('.navigation-link')



    const getData = () => {
        fetch('/db/db.json')
            .then((res) => res.json())
            .then((data) => {
                localStorage.setItem('goods', JSON.stringify(data));
                console.log('Данные сохранены:', data);
            })
    }

    links.forEach((link) => {
        // console.log(link);
        link.addEventListener('click', (event) => {
            event.preventDefault()
            getData()
        })
    })
    // localStorage.setItem('goods', JSON.stringify({name: 'all'}))
    // localStorage.setItem('goods', JSON.stringify([1,2,3,4,5]))
    // console.log(JSON.parse(localStorage.getItem('goods'))); 
    // const goods = JSON.parse(localStorage.getItem('goods'))
    // console.log(goods);

    // localStorage.removeItem('goods')
    // console.log(localStorage);


}

getGoods()