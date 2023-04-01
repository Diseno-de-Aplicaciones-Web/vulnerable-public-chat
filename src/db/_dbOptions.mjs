let dbOptions

switch (process.env.NODE_ENV) {
    case 'production':
    case 'staging':
        dbOptions = process.env.DB_URL
        break;

    default:
        dbOptions = {
            dialect: 'sqlite',
            storage: './database.sqlite'
        }
        break;
}

export default dbOptions