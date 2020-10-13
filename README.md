# mhmtest

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


---

#### Note : I have completed two core tasks mentioned above and with that I have fixed files structure and code logic for better time and space complexity in users data fetch 

---

1. Quick steps to run program 

After downloading repo goto `mhtest` folder and run `npm install` it will download all dependencies required to run program from package.json and then run `npm start` which will trigger nodemon mainly used for devlopement to auto run after changes saved

Then goto postman or web browser or you can use curl call, I have uploaded export script from POSTMAN - `Mhtest.postman_collection.json` inside Mhtest folder

I have changed path from `/listAllUsers` to `/api/v1/users`
    -   Methods will define what actions te perform
        -   Get     -   *will return all users*
        -   Post    -   *will created new users*     -   (Not implemented just added metthod)
        -   Delete  -   *Delete users -  need to pass id as parameter*    -   not implemented
        -   Put     -   *Update users -  need to pass id as parameter*    -   not implemented

------

eg API call to get all users

```
    GET - http://localhost:3000/api/v1/users
```

eg API call to create Users with params - not implemented

```
    POST - http://localhost:3000/api/v1/users
```

to Get allclasses

```
    GET - http://localhost:3000/api/v1/classes
```