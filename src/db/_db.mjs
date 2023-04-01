import { Sequelize }  from 'sequelize';
import dbOptions from './_dbOptions.mjs';

const db = new Sequelize(dbOptions);

export default db