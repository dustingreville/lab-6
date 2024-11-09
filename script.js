function delay(ms) {
    return new Promise (resolve => setTimeout(resolve, ms));
}

let fetchUser = new Promise ((resolve, reject) => {
    let Dustin = true;
    if (Dustin) {
        resolve ("User retrieved successfully");
    } else {
        reject ("User not retrieved");
    }
});

fetchUser.then(result => {
    console.log(result);  
})

.catch(error =>{
    console.error("Failed to fetch user")
})

let fetchPosts = new Promise ((resolve, reject) => {
    let post = true;
    if (post) {
        resolve ("Posts retrieved successfully");
    } else {
        reject ("Posts not retrieved");
    }
});

fetchPosts.then(result => {
    console.log(result);  
})

.catch(error =>{
    console.error("Failed to fetch posts.")
})

let fetchComments = new Promise ((resolve, reject) => {
    let Comments = false;

    if (Comments) {
        resolve ("Comments retrieved successfully");
    } else {
        reject ("Failed to fetch comments.");
    }
});

fetchComments.then(result => {
    console.log(result);  
})

.catch(error =>{
    console.error("Failed to fetch comments.")
});



