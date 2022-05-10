function updateHTML() {
    //Global HTML Updates
    
    //Tab HTML Updates
}

const tabIDs = ['manpower','equipment','finances','battleground','promotions','settings','achievements']

function tabChangeHTML() {
    for(let i = 0; i < tabIDs.length; i++)
        DOMCacheGetOrSet(tabIDs[i] + 'Area').style.display = i === data.currentTab ? 'flex' : 'none'
}
