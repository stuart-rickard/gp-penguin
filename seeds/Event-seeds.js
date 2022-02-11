const sequelize = require('../config/connection');
const { Event } = require('../models');

const eventdata = [
    {
        title: 'Office party',
        days: '',
        invite_emails: ''
    },
    {
        title: 'Birthdat party',
        days: '',
        invite_emails: ''
    },
    {
        title: 'Work meeting',
        days: '',
        invite_emails: ''
    },
    {
        title: 'Hike',
        days: '',
        invite_emails: ''
    },
    {
        title: 'Surf',
        days: '',
        invite_emails: ''
    }
];
const eventSeeds = () => User.bulkCreate(eventdata, { individualHooks: true });

module.exports = eventSeeds;