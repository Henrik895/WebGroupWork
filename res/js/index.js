let posts = [
    {'avatar':'./res/images/no_avatar.jpg', 'timestamp':'Sep 18, 2020 15:16', 'image':'./res/images/temp/placeholder1.jpg', 'text':'I think it\'s going to rain'},
    {'avatar':'./res/images/no_avatar.jpg', 'timestamp':'Sep 18, 2020 14:23', 'image':'', 'text':'How can mirrors be real if our eyes aren\'t real?'},
    {'avatar':'./res/images/temp/duck.png', 'timestamp':'Sep 17, 2020 13:10', 'image':'./res/images/temp/lemonadestand.jpg', 'text':'Wanted some grapes but they only serve lemonade?!\n★☆☆☆☆ NO THANKS!!'},
    {'avatar':'./res/images/temp/rb.jpg', 'timestamp':'Sep 16, 2020 17:05', 'image':'./res/images/temp/peepo2.jpg', 'text':'@HeydoubleU this guy is cute'},
    {'avatar':'./res/images/temp/peepo.jpg', 'timestamp':'Sep 16, 2020 7:15', 'image':'./res/images/temp/mungus.webp', 'text':'Among Us announces an official new E-Sports League. 6 new Teams and Team Captains revealed. Click here to read more.'},
    {'avatar':'./res/images/temp/soda.png', 'timestamp':'Sep 14, 2020 11:15', 'image':'./res/images/temp/flamewrath.jpg', 'text':'Silence you fools.'},
    {'avatar':'./res/images/temp/mrbeast.jpg', 'timestamp':'Sep 13, 2020 11:15', 'image':'./res/images/temp/markrober.jpg', 'text':'Mark Rober'},
    {'avatar':'./res/images/temp/michael.jpg', 'timestamp':'Sep 12, 2020 17:05', 'image':'./res/images/temp/reeves.jpg', 'text':'one of those nights'},
    {'avatar':'./res/images/temp/minx.jpg', 'timestamp':'Sep 11, 2020 11:15', 'image':'./res/images/temp/manny.jpg', 'text':'@jschlatt'},
    {'avatar':'./res/images/temp/lirik.png', 'timestamp':'Sep 10, 2020 17:05', 'image':'./res/images/temp/cats.jpg', 'text':''},
    {'avatar':'./res/images/temp/doc.jpg', 'timestamp':'Sep 10, 2020 1:10', 'image':'', 'text':'Anyways, um... I bought a whole bunch of shungite rocks, do you know what shungite is? Anybody know what shungite is? No, not Suge Knight, I think he\'s locked up in prison. I\'m talkin\' shungite. Anyways, it\'s a two billion year-old like, rock stone that protects against frequencies and unwanted frequencies that may be traveling in the air. That\'s my story, I bought a whole bunch of stuff. Put \'em around the la casa. Little pyramids, stuff like that.'},
]
var counter = 0;

function addPost(post) {
    let container = document.getElementById('postList')

    let postContainer = document.createElement('div')
    postContainer.className = 'postContainer'

    let postHeader = document.createElement('div')
    postHeader.className = 'postHeader'
    postContainer.appendChild(postHeader)

    let postAvatar = document.createElement('img')
    postAvatar.src = post['avatar']
    postAvatar.alt = 'avatar'
    postHeader.appendChild(postAvatar)

    let postTimestamp = document.createElement('span')
    postTimestamp.innerText = post['timestamp']
    postHeader.appendChild(postTimestamp)

    let postContent = document.createElement('div')
    postContent.className = 'postContent'
    postContainer.appendChild(postContent)

    if (post['image']){
        let postImageDiv = document.createElement('div')
        postImageDiv.className = 'postImage'
        postContent.append(postImageDiv)

        let postImage = document.createElement('img')
        postImage.src = post['image']
        postImage.alt = 'image'
        postImageDiv.appendChild(postImage)
    }

    if (post['text']){
        let postTextDiv = document.createElement('div')
        postTextDiv.className = 'postText'
        postContent.appendChild(postTextDiv)

        let postTextSpan = document.createElement('span')
        postTextSpan.innerText = post['text']
        postTextDiv.append(postTextSpan)
    }

    let postFooter = document.createElement('div')
    postFooter.className = 'postFooter'
    postContainer.appendChild(postFooter)

    let likeButton = document.createElement('button')
    likeButton.className = 'primaryButton'
    postFooter.appendChild(likeButton)

    let likeIcon = document.createElement('span')
    likeIcon.className = 'material-icons likeIcon'
    likeIcon.innerHTML = 'thumb_up'
    likeButton.appendChild(likeIcon)

    container.appendChild(postContainer);
}

function addNPosts(n, posts){
    /*If we had an API to call, this is where it would happen.*/
    let amount = n+counter
    for (let i = counter; i < amount; i++) {
        if (posts[i]){
            addPost(posts[i])
            counter++;
        } else {
            document.getElementById("nextButton").innerHTML = "No more messages to load"
        }
    }
}

addNPosts(5, posts)