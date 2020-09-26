let posts = [
    {'avatar':'./res/images/no_avatar.jpg', 'timestamp':'Sep 18, 2020 15:16', 'image':'./res/images/placeholder1.jpg', 'text':'I think it\'s going to rain'},
    {'avatar':'./res/images/no_avatar.jpg', 'timestamp':'Sep 18, 2020 14:23', 'image':'', 'text':'How can mirrors be real if our eyes aren\'t real?'},
    {'avatar':'./res/images/no_avatar.jpg', 'timestamp':'Sep 18, 2020 11:10', 'image':'./res/images/placeholder2.jpg', 'text':'Last night\'s dream'}
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
    for (let i = counter; i < n+counter; i++) {
        if (posts[i]){
            addPost(posts[i])
        }
    }
}

addNPosts(5, posts)