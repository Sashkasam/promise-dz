/* eslint-disable no-undef */

import GameSavingLoader from "../GameSavingLoader.js";

test('class must return the object', () => {
    const expected = {
        id: 9,
        created: 1546300800,
        userInfo : {
            id: 1,
            name: "Hitman",
            level: 10,
            points: 2000
        },
    };
    return expect(GameSavingLoader.load()).resolves.toEqual(expected);
});