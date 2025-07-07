let books = [
    {
        title: "Love",
        authorName: "VHH",
        releaseYear: 1950
    },
    {
        title: "Math",
        authorName: "VHH",
        releaseYear: 1233
    },
    {
        title: "Math",
        authorName: "VHH",
        releaseYear: 2022
    },
];

function sortByYear(book1, book2) {
    if (book1.releaseYear < book2.releaseYear) {
        return -1;
    }else if(book1.releaseYear > book2.releaseYear){
        return 1;
    }else{
        return 0
    }    
}

const filteredBooks = books.filter(function (element,index,array) {
    return element.releaseYear <= 1950;
})

filteredBooks.sort(sortByYear);
