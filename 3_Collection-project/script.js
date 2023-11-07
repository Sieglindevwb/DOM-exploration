const cardContainer = document.querySelector('.card-container');
const overlay = document.querySelector('.overlay');

cardContainer.addEventListener('mouseover', (event) => {
    if (event.target.classList.contains('card')) {
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'; // Dark semi-transparent background on hover
    }
});

cardContainer.addEventListener('mouseout', () => {
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)'; // Transparent background when not hovering
});


const seriesCollection = [ {
    //first
    genre: ['fantasy'],
    name: 'Game Of Thrones',
    director: ['David Benioff',' D.B. Weiss'],
    releaseDate: 'April 17, 2011',
    picture: '../img/Game_of_Thrones_title_card.jpg',
    cast: ['Emilia Clarke','Sophie Turner','Maisie Williams','Kit Harington','Lena Headey','Natalie Dormer','Pedro Pascal','Peter Dinklage'],
    trailer:'https://www.youtube.com/watch?v=KPLWWIOCOOQ'
},
    //second
{
    genre: ['comedy','drama'],
    name:'Sex Education',
    director: ['Laurie Nunn'],
    releaseDate: 'Januari 11 2019',
    picture:'../img/sex_education_.jpg', 
    cast: ['Asa Butterfield','Emma Mackey','Ncuti Gatwa','Tanya Reynolds','Connor Swindells','Gillian Anderson','Mimi Keene','Patricia Allison'],
    trailer:'https://www.youtube.com/watch?v=Hd2ldTR-WpI'
},
    //third
{
    genre:['sitcom','comedy'],
    name:'New Girl',
    director:['Elizabeth Meriwether'],
    releaseDate:'September 20, 2011',
    picture:'../img/new_girl.jpg',
    cast:['Zooey Deschanel','Jake Johnson','Max Greenfield','Hannah Simone','Lamorne Morris','Damon Wayans, Jr.','Nasim Pedrad','Julian Morris'],
    trailer:'https://www.youtube.com/watch?v=19jvAM1oZRA'
},
    //fourth
{
    genre:['drama','romance'],
    name:'Outlander',
    director:['Diana Gabaldon'],
    releaseDate:'August 9, 2014',
    picture:'../img/Outlander.jpg',
    cast:['Sam Heughan','Caitriona Balfe','Richard Rankin','Sophie Skelton','Tobias Menzies','Lauren Lyle','John Bell','Duncan Lacroix'],
    trailer:'https://www.youtube.com/watch?v=PFFKjptRr7Y'
},
    //fifth
{
    genre:['romance', 'drama'],
    name:'Something in the Rain',
    director:['Ahn Pan-seok'],
    releaseDate:'March 30, 2018',
    picture:'../img/Sonething_In_The_Rain.jpg',
    cast:['Son Ye-jin', 'Jung Hae-in', 'Jang So-yeon', 'Jang Won-hyung'],
    trailer:'https://www.youtube.com/watch?v=7RGk6NXwbrY'
},
    //sixth
{
    genre:['thriller', 'crime', 'drama'],
    name:'You',
    director:['Greg Berlanti', 'Sera Gamble'],
    releaseDate:'September 9, 2018',
    picture:'../img/You.jpg',
    cast:['Penn Badgley', 'Victoria Pedretti', 'Elizabeth Lail', 'Shay Mitchell'],
    trailer:'https://www.youtube.com/watch?v=srx7fSBwvF4'
},
    //seventh
{
    genre:['crime', 'drama', 'thriller'],
    name:'Breaking Bad',
    director:['Vince Gilligan'],
    releaseDate:'January 20, 2008',
    picture:'../img/breaking_bad.jpg',
    cast:['Bryan Cranston', 'Aaron Paul', 'Anna Gunn', 'Dean Norris', 'Betsy Brandt', 'RJ Mitte', 'Bob Odenkirk', 'Giancarlo Esposito'],
    trailer:'https://www.youtube.com/watch?v=HhesaQXLuRY'
},
    //eight
{
    genre:['comedy', 'crime'],
    name:'Trailer Park Boys',
    director:['Mike Clattenburg', 'Robb Wells', 'John Paul Tremblay'],
    releaseDate:'April 22, 2001',
    picture:'../img/trailer_park_boys.jpg',
    cast:['John Paul Tremblay', 'Robb Wells', 'Mike Smith', 'John Dunsworth', 'Patrick Roach'],
    trailer:'https://www.youtube.com/watch?v=dOHY2qsA_tM'
},
    //nine
{
    genre:['comedy', 'drama'],
    name:'The Way of the Househusband',
    director:['Kousuke Oono'],
    releaseDate:'April 8, 2021',
    picture:'../img/Househusband_.jpg',
    cast:['Kenjiro Tsuda', 'Shizuka Ito', 'Kazuyuki Okitsu', 'Yoshimasa Hosoya'],
    trailer:'https://www.youtube.com/watch?v=cvZ9thKolOA'
},
    //ten
{
    genre:['comedy', 'drama'],
    name:'The White Lotus',
    director:['Mike White'],
    releaseDate:'July 11, 2021',
    picture:'../img/the_white_lotus.jpg',
    cast:['Murray Bartlett', 'Connie Britton', 'Jennifer Coolidge', 'Alexandra Daddario', 'Jake Lacy', 'Steve Zahn'],
    trailer:'https://www.youtube.com/watch?v=TGLq7_MonZ4'
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

    const genreColors = ['blue','green']
    let colorIndex = 0;

    const genrePadding = '5px';
    const borderRadius = '1rem';

    const genre = document.createElement('p');
    genre.className = 'genre';
    if (Array.isArray(series.genre)) {
    series.genre.forEach(genreItem => {
        const genreSpan = document.createElement('span');
        genreSpan.textContent = genreItem;
        genreSpan.style.backgroundColor = genreColors[colorIndex]; // Assign color dynamically
        genreSpan.style.padding = genrePadding;
        genreSpan.style.borderRadius = borderRadius;
        genre.appendChild(genreSpan);
        genre.appendChild(document.createTextNode(' ')); // Add space between genres

        // Toggle color index for alternating colors
        colorIndex = 1 - colorIndex;
    });
    } else {
        const genreSpan = document.createElement('span');
        genreSpan.textContent = series.genre;
        genreSpan.style.color = genreColors[colorIndex]; // Assign color dynamically
        genre.appendChild(genreSpan);
    }

    const title = document.createElement('h2');
    title.className = 'title'
    title.textContent = series.name;

    const director = document.createElement('p');
    director.className = 'director'
    director.innerHTML = `${Array.isArray(series.director) ? series.director.join(', ') : series.director}`;

    const releaseDate = document.createElement('p');
    releaseDate.innerHTML = `<strong>Release Date:</strong> ${Array.isArray(series.releaseDate) ? series.releaseDate.join(', ') : series.releaseDate}`;

    const cast = document.createElement('p');
    cast.innerHTML = `<strong>Cast:</strong> ${series.cast.join(', ')}`;

    const trailer = document.createElement('a');
    trailer.href = series.trailer;
    trailer.textContent = 'Watch Trailer';
    trailer.className = 'btn';

    cardInfo.appendChild(genre);
    cardInfo.appendChild(title);
    cardInfo.appendChild(director);
    cardInfo.appendChild(releaseDate);
    cardInfo.appendChild(cast);

    card.appendChild(img);
    card.appendChild(cardInfo);
    card.appendChild(trailer)

    cardContainer.append(card);
 });
