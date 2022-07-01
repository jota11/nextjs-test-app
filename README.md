# nextjs-test-app
A very simple test of Next.js, using Prisma for the database.
<br>
Cry your eyes out with the style.

---

## Running locally
You will need a local server to run this.
* Modify the [.env](https://github.com/jota11/nextjs-test-app/blob/master/.env) file to your liking
* Start a local server of your liking
* Do the [Prisma](https://github.com/prisma/prisma) stuff (of your liking)
* Populate the DB with some values of your liking
* `npm run dev` [of your liking]

---

## API Endpoints
### `/api/users`
* GET - Returns all users
* POST - Inserts a new user
    * DATA: name, email, username, password

### `/api/users/[ID]`
* GET - Returns the specified user
* DELETE - Deletes the specified user
* PATCH - Updates the specified user data

### `/api/users/[ID]/posts`
* GET - Returns all posts from the specified user

### `/api/posts/`
* GET - Returns all posts
* POST - Inserts a new post into the database
    * DATA: author_id *(user ID)*, title, content

### `/api/posts/[ID]`
* GET - Returns the specified post
* DELETE - Delete the specified post
* PATCH - Updates the specified post
    * DATA: title, content

---
Confused by the `JSON.parse(JSON.stringify(data))` in the return props? [Reason](https://github.com/vercel/next.js/issues/11993#issuecomment-617937409).