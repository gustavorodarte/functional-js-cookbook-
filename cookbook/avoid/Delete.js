// don't

delete foo;
delete foo.bar;
delete foo[bar]

// do

const omit = require('crocks/helpers/omit');

const fooWithoutBar = omit('bar', foo);
const fooWithoutField = omit(bar, foo);
