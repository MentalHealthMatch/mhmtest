# mhmtest -- Zephyr Dear's Solution

## Primary Changes

* /listallclasses moved to /classes/ and made to work
* /listAllUsers moved to /users/ and refactored to use only one "database query"
* routes/databaseAccess.js split into db/database-access.js and db/mock-data.json
* primary routing logic moved out of routes/index.js into routes/users.js and routes/classes.js
* "database schema" improved to use firstName and lastName rather than name and last
* whatIsThisDoing() renamed to latency() 

## New Features

* RESTful CRUD operations implemented for both /users/ and /classes/
* All API endpoints and "database" operations placed under a test harness

## Possible Next Steps

Overall, the app assumes a happy path - clean data, well-formatted requests, and so on. In a real app, error handling and validation would be a priority. For this test, given the low importance of data integrity, I decided to leave it out-of-scope.

Authentication and authorization, similarly, would be important in the real world, but the implementation would likely hinge on the design of whatever frontend application is actually consuming this API. I also refrained from versioning the API or paginating the results, but would likely do those things pending a conversation about how, exactly, the data is being consumed, what it's used for, and under what circumstances we expect that to change.

Other changes would depend heavily on the intended use case of the application as a whole. For example, "users" is ambiguous, possibly referring to students, teachers, administrators, parents, or some combination of the above. Depending on high-level design considerations, an argument could be made for renaming the table, splitting it into multiple tables, or adding something like a "role" column.

From there, hypothetical domain-specific features like taking attendance, assigning grades, and creating a class schedule would be fairly straightforward to implement. Of course, some of these features dramatically increase the importance of appropriate authorization.

I would also consider renaming "classes" to "subjects" or something similar, and thus avoid JavaScript's very different understanding of what a "class" is. For the test, I decided to leave it, because it is an accurate user-facing word for the concept it describes.


## Original Instructions

A simple coding test in project form

This test is intended to test your basic facility with a Node JS Backend. As such, we're not going to explain much. We'll just say this:

Stylistically this is about as bad as we could do on short notice. You are free to fix any things that really annoy you, but those aren't core tasks.

Consider fixing bad name choices.  Feel free to rename methods and even URL paths to things that make sense to you.  There is no right or wrong, but
we'd like to get a sense of your style.  The structure is lame too.  If you want to move things to different files or folders, go nuts.

There are two core tasks:

1). the code that services "/listAllUsers" is awful and needs to be refactored

2). "/listallclasses" is broken and needs to be fixed.

Beyond this, you're free to add any functionality you think would be interesting for us to see and to get a sense of how you approach coding and problem solving.

When you're done, create a pull request and we'll take a look!
