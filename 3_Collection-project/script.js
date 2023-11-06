const listLike = ["Boardgames", "Music", "Clothes", "Furniture", "Games", "Series", "Streamers"]

const Series = ["GOT", "Sex Education", "New Girl", "Outlander", "Something in the rain", "You", "Breaking Bad", "Trailor Park Boys", "The Way of the Househusband", "The White Lotus"]

const seriesCollection = [ {
    //first
    name: 'Game Of Thrones',
    director: ['David Benioff',' D.B. Weiss'],
    releaseDate: 'April 17, 2011',
    picture: './img/Game_of_Thrones_title_card.jpg',
    genre: 'Fantasy',
    cast: ['Emilia Clarke','Sophie Turner','Maisie Williams','Kit Harington','Lena Headey','Natalie Dormer','Pedro Pascal','Peter Dinklage']
},
    //second
{
    name:'Sex Education',
    director: 'Laurie Nunn',
    releaseDate: 'Januari 11 2019',
    picture:'../img/sex_education_.jpg', 
    genre: ['comedy','drame'],
    cast: ['Asa Butterfield','Emma Mackey','Ncuti Gatwa','Tanya Reynolds','Connor Swindells','Gillian Anderson','Mimi Keene','Patricia Allison']
},
    //third
{
    name:'New Girl',
    director:'Elizabeth Meriwether',
    releaseDate:'September 20, 2011',
    picture:'',
    genre:['sitcom','comedy'],
    cast:['Zooey Deschanel','Jake Johnson','Max Greenfield','Hannah Simone','Lamorne Morris','Damon Wayans, Jr.','Nasim Pedrad','Julian Morris']
},
    //fourth
{
    name:'Outlander',
    director:'Diana Gabaldon',
    releaseDate:'August 9, 2014',
    picture:'',
    genre:['drama','romantic'],
    cast:['Sam Heughan','Caitriona Balfe','Richard Rankin','Sophie Skelton','Tobias Menzies','Lauren Lyle','John Bell','Duncan Lacroix']
},
    //fifth
{
    name:'Something in the Rain',
    director:'Ahn Pan-seok',
    releaseDate:'March 30, 2018',
    picture:'',
    genre:['Romance', 'Drama'],
    cast:['Son Ye-jin', 'Jung Hae-in', 'Jang So-yeon', 'Jang Won-hyung']
},
    //sixth
{
    name:'You',
    director:['Greg Berlanti', 'Sera Gamble'],
    releaseDate:'September 9, 2018',
    picture:'',
    genre:['Thriller', 'Crime', 'Drama'],
    cast:['Penn Badgley', 'Victoria Pedretti', 'Elizabeth Lail', 'Shay Mitchell']
},
    //seventh
{
    name:'Breaking Bad',
    director:'Vince Gilligan',
    releaseDate:'January 20, 2008',
    picture:'',
    genre:[' Crime', 'Drama', 'Thriller'],
    cast:['Bryan Cranston', 'Aaron Paul', 'Anna Gunn', 'Dean Norris', 'Betsy Brandt', 'RJ Mitte', 'Bob Odenkirk', 'Giancarlo Esposito']
},
    //eight
{
    name:'Trailer Park Boys',
    director:['Mike Clattenburg', 'Robb Wells', 'John Paul Tremblay'],
    releaseDate:'April 22, 2001',
    picture:'',
    genre:['Comedy', 'Crime'],
    cast:['John Paul Tremblay', 'Robb Wells', 'Mike Smith', 'John Dunsworth', 'Patrick Roach']
},
    //nine
{
    name:'The Way of the Househusband',
    director:'Kousuke Oono',
    releaseDate:'April 8, 2021',
    picture:'',
    genre:['Comedy', 'Slice of Life'],
    cast:['Kenjiro Tsuda', 'Shizuka Ito', 'Kazuyuki Okitsu', 'Yoshimasa Hosoya'],
},
    //ten
{
    name:'The White Lotus',
    director:'Mike White',
    releaseDate:'July 11, 2021',
    picture:'',
    genre:['Comedy', 'Drama'],
    cast:['Murray Bartlett', 'Connie Britton', 'Jennifer Coolidge', 'Alexandra Daddario', 'Jake Lacy', 'Steve Zahn']
}
]

seriesCollection.forEach(series => {
    const card = document.createElement('div');
    card.className ='card';

    const img = document.createElement('img');
    img.src = series.picture;
    img.alt = series.name;
    img.className = 'card-image';

    const cardInfo = document.createElement('div');
    cardInfo.className = 'card-info';

    const title = document.createElement('h2');
    title.textContent = series.name;

    const director = document.createElement('p');
    director.innerHTML = `<strong>Director(s):</strong> ${series.director.join(', ')}`;

    const releaseDate = document.createElement('p');
    releaseDate.innerHTML = `<strong>Release Date:</strong> ${series.releaseDate}`;

    const genre = document.createElement('p');
    genre.innerHTML = `<strong>Genre(s):</strong> ${series.genre.join(', ')}`;

    const cast = document.createElement('p');
    cast.innerHTML = `<strong>Cast:</strong> ${series.cast.join(', ')}`;

    cardInfo.appendChild(title);
    cardInfo.appendChild(director);
    cardInfo.appendChild(releaseDate);
    cardInfo.appendChild(genre);
    cardInfo.appendChild(cast);

    card.appendChild(img);
    card.appendChild(cardInfo);

    cardContainer.appendChild(card);
});