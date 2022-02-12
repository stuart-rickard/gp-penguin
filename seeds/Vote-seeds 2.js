const { Vote } = require('../models');

const votedata = [
    {
        user_id: 1,
        event_id: 1,
        days: ''
    },
    {
        user_id: 2,
        event_id: 2,
        days: ''
    },
    {
        user_id: 3,
        event_id: 1,
        days: ''
    },
    {
        user_id: 4,
        event_id: 1,
        days: ''
    },
    {
        user_id: 5,
        event_id: 4,
        days: ''
    },
    {
        user_id: 6,
        event_id: 1,
        days: ''
    },
    {
        user_id: 7,
        event_id: 1,
        days: ''
    },
    {
        user_id: 8,
        event_id: 1,
        days: ''
    }
];

const voteSeeds = () => Vote.bulkCreate(votedata);

module.exports = voteSeeds;
