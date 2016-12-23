module.fetchData = func => {
    const rawData = {};

    const url = 'https://cdn.contentful.com/spaces/gju6m3ezaxar/entries?content_type=jsonFull&include=10&limit=200&access_token=e887c7cd3298dd5e14cce7cd22523670abea9de380aef548efcbcb4b3a612ee9';

    fetch(url, {
        method: 'GET',
        mode: 'cors',
        cache: 'default',
    })
        .then(response =>
            response.json()
        )
        .then(json => {
            const array = json.items[0].fields.jsonFull.feed.entry;

            array.forEach(item => {
                if (!rawData[item.gsx$person.$t]) {
                    rawData[item.gsx$person.$t] = {};
                }

                if (!rawData[item.gsx$person.$t][item.gsx$trait.$t]) {
                    rawData[item.gsx$person.$t][item.gsx$trait.$t] = [];
                }

                rawData[item.gsx$person.$t][item.gsx$trait.$t].push({
                    clickouturl: item.gsx$clickouturl.$t,
                    describe: item.gsx$description70charactersmax.$t,
                    image: item.gsx$image.$t,
                    itemname: item.gsx$itemname.$t,
                    price: item.gsx$price.$t,
                    type: item.gsx$type.$t,
                });
            });

            if (typeof func === 'function') func(rawData);
        });
};

module.isEmpty = obj => {
    for (const name in obj) {
        return false;
    }

    return true;
};

module.shuffle = array => {
    let currentIndex = array.length,
        temporaryValue,
        randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
};

module.initArray = length => {
    const array = [];

    for (let i = 0; i < length - 1; i++) {
        array.push(i);
    }

    return array;
};

export default module;
