let currentPage = 1;

let limit = 3;

let itemArray = document.querySelectorAll('.item');

let pagesElement = document.querySelector('.pages');

const loadItems = () => {

    // window.scrollTo(0, 0);

    let startNo = limit * (currentPage - 1 );

    let endNo = limit * currentPage - 1 ;

    itemArray.forEach((item,idx) => {

        if(idx >= startNo && idx <= endNo){

            item.style.display = 'block';
        } else {

            item.style.display = 'none';
        }
    })

    

setPages();

}



const setPages = () => {

    // window.scrollTo(0, 0);

    let pageCount = Math.ceil(itemArray.length/ limit);

    document.querySelector('.pages').innerHTML = '';

    if(currentPage != 1 ){

        let prevElmt = document.createElement('li');

        prevElmt.innerText = 'PREV';

        prevElmt.setAttribute('onclick',`nextPage('${currentPage - 1}')`);

        pagesElement.appendChild(prevElmt);

    }
    

    for(i=1; i<= pageCount; i++){

        const pageNumberElmt = document.createElement('li');

        pageNumberElmt.innerText = i;

        if(i== currentPage){

            pageNumberElmt.classList.add('active');
        }

        pageNumberElmt.setAttribute('onclick',`nextPage('${i}')`);

        pagesElement.appendChild(pageNumberElmt);
    }

    if(currentPage != pageCount ){

        let nextElmt = document.createElement('li');

        nextElmt.innerText = 'NEXT';

        nextElmt.setAttribute('onclick',`nextPage('${Number(currentPage)+ 1}')`);
       
        pagesElement.appendChild(nextElmt);

    }


}

const nextPage = (i) => {

    currentPage=i;

    loadItems();

    window.scrollTo(0, 0);

    // console.log(currentPage);
}

loadItems();