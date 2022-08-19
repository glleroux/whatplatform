const setToStorage = (selection) => {

    console.log(selection)

    const stations = selection.origin.name && selection.dest.name 
    ? [{name: selection.origin.name}, {name: selection.dest.name}] 
    : [{name: selection.origin.name}]

    console.log('adding to ls: ', stations)
    
    if(typeof window !== 'undefined'){
        // if local storage item doesn't exist
        if (!window.localStorage.frequentStations) { //THIS WORKS
            // add it
            let frequentStations = stations.map(station => ({...station, count: 1}))
            window.localStorage.setItem('frequentStations', JSON.stringify(frequentStations))
            // if it does exist
        } else {
            // grab the existing item
            console.log('frequentStations already exists in local storage')
            let state = JSON.parse(window.localStorage.getItem('frequentStations'))
            // loop over each new station
            stations.forEach(newStation => {
                console.log('new station to add: ', newStation)
                // see if it exists in local storage item
                const index = state.findIndex((object) => object.name === newStation.name);
                // if it doesn't exist yet
                if (index === -1) {
                    console.log('doesnt exist yet: ', newStation)
                    //add it to the local storage item
                    state.push({ ...newStation, count: 1 });
                    //set the local storage item
                    console.log('updated state: ', state)
                    window.localStorage.setItem('frequentStations', JSON.stringify(state))
                    // if it does exist already
                } else {
                    console.log('exists already: ', newStation)
                    // increment its count
                    state = state.map((station) =>
                    station.name === newStation.name
                        ? { ...station, count: station.count + 1 }
                        : station
                    );
                    console.log('updated state: ', state)
                    //set the local storage item
                    window.localStorage.setItem('frequentStations', JSON.stringify(state))
                }
            })
        }
    }
};

const getFromStorage = (key) => {
    if(typeof window !== 'undefined'){
        if (!window.localStorage.key) {
            return null
        } else {
            return JSON.parse(window.localStorage.getItem(key))
        }
    }
}

export {setToStorage, getFromStorage}