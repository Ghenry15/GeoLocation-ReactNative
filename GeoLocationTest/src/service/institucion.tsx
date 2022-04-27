export const getLocationInst = async (id: number) => {
    const routes = [
        {
            id: 1,
            name: 'EPES N 54',
            cords: {
                latitude: -26.186689983874324,
                longitude: -58.17562256414176,
            }
        },
        {
            id: 2,
            name: 'EPES N 365',
            cords: {
                latitude: -26.2009,
                longitude: -58.2068,
            }
        },
        {
            id: 3,
            name: 'EPES N 365',
            cords: {
                latitude: -26.1336,
                longitude: -58.1869,
            }
        },
    ];

    return routes.filter(item => item.id === id);
}