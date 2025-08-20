const links = [
    {
        id: 1,
        url: '/',
        name: 'Home'
    },

    {
        id: 2,
        url: '#',
        name: 'About',
        submenu: [
            {
                id: 1,
                url: '/about',
                name: 'About Us'
            },
            
           
            {
                id: 4,
                url: '/admission',
                name: 'Admission'
            },
            {
                id: 5,
                url: '/principal-message',
                name: "Principal's Message"
            },
        ]
    },

    {
        id: 3,
        url: '#',
        name: 'Administration',
        submenu: [
            {
                id: 1,
                url: '/staff-details',
                name: 'Staff Details'
            },
            {
                id: 2,
                url: '/school-committee',
                name: 'School Committee'
            },
            {
                id: 4,
                url: '/fee-scholarship',
                name: 'Fee and Scholarship'
            },
            
        ]
    },

    {
        id: 4,
        url: '#',
        name: 'Academics',
        submenu: [
           
            {
                id: 2,
                url: '/list-of-books',
                name: 'List of Books'
            },
            {
                id: 3,
                url: '/school-at-glance',
                name: 'School at Glance'
            },
            {
                id: 4,
                url: '/holidays-list',
                name: 'Holidays List'
            },
            
        ]
    },

    {
        id: 5,
        url: '#',
        name: 'More',
        submenu: [
        
            {
                id: 2,
                url: '/school-activities',
                name: 'School Activities'
            },
            {
                id: 6,
                url: '/sports',
                name: 'Sports'
            },
           
        ]
    },

    {
        id: 6,
        url: '#',
        name: 'Gallery',
        submenu: [
            {
                id: 1,
                url: '/gallery',
                name: 'Gallery'
            },
            {
                id: 1,
                url: '/notice',
                name: 'Notice'
            },
        ]
    },

    {
        id: 7,
        url: '/contact',
        name: 'Contact Us'
    },
]

export default links;