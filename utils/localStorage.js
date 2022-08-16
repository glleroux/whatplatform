const setToStorage = (journey) => {
    if(typeof window !== 'undefined'){
        if (!window.localStorage.frequentJourneys) {
            let frequentJourneys = []
            frequentJourneys[0] = [{...journey, count: 1}]
            window.localStorage.setItem('frequentJourneys', JSON.stringify(frequentJourneys))
        } else {
            let frequentJourneys = JSON.parse(window.localStorage.getItem('frequentJourneys'))
            
            frequentJourneys.push(journey)
            window.localStorage.setItem('frequentJourneys', JSON.stringify(frequentJourneys))
        }
    }
}

const getFromStorage = (key) => {
    if(typeof window !== 'undefined'){
        return window.localStorage.getItem(key)
    }
}

export {setToStorage, getFromStorage}