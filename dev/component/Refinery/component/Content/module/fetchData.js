module.handleFetchData = func => {
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

export default module;
