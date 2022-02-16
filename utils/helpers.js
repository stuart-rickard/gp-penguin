// function defined up here so that the pluarlize
// function can use it.
function get_day_votes(day, event_votes){
    let count = 0;

    for(var i = 0; i < event_votes.length; i++){
        if(event_votes[i].days.includes(day)){
            count += 1;
        }
    }

    return count;
}

module.exports = {
    get_day_votes: get_day_votes,
    pluralize: (day, event_votes)=>{
        const count = get_day_votes(day, event_votes);

        if(count == 1){
            return 'Vote';
        }

        return 'Votes';
    }
}