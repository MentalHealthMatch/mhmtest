# mhmtest

1). /listAllUsers is now changed to GET /users. Assuming for this that the name and last name absolutely have to be two separate database calls, I created a promise.all and merge function to get the required data in the most optimal time.

2). /listallclasses is now changed to GET /classes.

Beyond this, I have separated out distinct routes/services, and have cleaned up function and variable names.
