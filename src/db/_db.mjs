import { Sequelize }  from 'sequelize';

const db = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite'
});

export default db