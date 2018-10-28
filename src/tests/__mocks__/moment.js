//Note: this is a mock library. Test files will use this while the actual component will use the real library

// Note: must import moment this way, otherwise it creates a stacktrace error
const moment = require.requireActual('moment');

export default (timestamp = 0) => {
    return moment(timestamp);
};