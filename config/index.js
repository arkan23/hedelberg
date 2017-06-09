/**
 * Created by gavrilushkin_a on 21.04.2017.
 */

import nconf from 'nconf';

nconf.argv()
    .env()
    .file({ file: 'config.json' });

module.exports=nconf;