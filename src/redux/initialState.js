const initialState = {
    posts: [
        {
            id: '1',
            title: 'Article title',
            shortDescription: 'Short description of the article...',
            content: 'Main content of the article',
            publishedDate: new Date ('01-12-2021'),
            author: 'John Doe'
        },
        {
            id: '2',
            title: 'Article title 2',
            shortDescription: 'Short description of the article 2...',
            content: 'Main content of the article 2',
            publishedDate: new Date ('02-12-2021'),
            author: 'John Doe 2'
        },
        {
            id: '3',
            title: 'Article title 3',
            shortDescription: 'Short description of the article 3...',
            content: 'Main content of the article 3',
            publishedDate: new Date ('03-12-2021'),
            author: 'John Doe 3'
        },
        {
            id: '4',
            title: 'Article title 4',
            shortDescription: 'Short description of the article 4...',
            content: 'Main content of the article 4',
            publishedDate: new Date ('04-12-2021'),
            author: 'John Doe 4'
        }
    ],
    categories: [
        {
            id: '5',
            title: 'Sport'
        },
        {
            id: '6',
            title: 'News'
        },
        {
            id: '7',
            title: 'Movies'
        }
    ]

}

export default initialState