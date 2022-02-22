var config = {
    style: 'mapbox://styles/mapbox/streets-v11',
    accessToken: 'pk.eyJ1Ijoic2VhZm9ydHJlc3MiLCJhIjoiY2t6aXNjMnBxNGVwbzJ1cGgxMjFndGM3cSJ9.9Dl8dwoUi9TCgW9C_apv7Q',
    showMarkers: true,
    markerColor: '#3FB1CE',
    theme: 'light',
    use3dTerrain: false,
    use3dBuildings: false,
    title: 'Historic Springdale',
    subtitle: 'Some cool old things in and around downtown Springdale',
    byline: 'Shiloh Museum of History',
    footer: 'Source: source citations, etc.',
    chapters: [
        {
            id: 'chamber-of-commerce',
            alignment: 'left',
            hidden: false,
            title: 'Chamber of Commerce',
            image: 'images/chamber.jpeg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
                center: [-94.13256818928295, 36.18539912139829],
                zoom: 18,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'shiloh-museum',
            alignment: 'right',
            hidden: false,
            title: 'Shiloh Museum of Ozark History',
            image: 'images/shiloh.jpg',
            description: `The Shiloh Museum began in 1965 with the City of Springdale's purchase of a significant collection of Native American artifacts gathered over the course of sixty years by Springdale resident Guy Howard. The collection contained some 10,000 prehistoric and historic artifacts and 260 books and pamphlets on anthropology and archeology.`,
            location: {
                center: [-94.13185265611227, 36.18678584969321],
                zoom: 18,
                pitch: 60,
                bearing: 0,
                speed: 0.3
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'bluff-cemetery',
            alignment: 'left',
            hidden: false,
            title: 'Bluff Cemetery',
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
            location: {
                center: [-94.13266446842297, 36.192597264071054],
                zoom: 17.5,
                pitch: 60,
                bearing: 0,
                speed: 0.3
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};


