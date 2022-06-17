let server = io('http://localhost:3000', { transports: ['websocket', 'polling']})


server.on('send message', data =>{
        
        let user = users.find(user => user.userId == msg.userId)

        let classname = data.userId == userId ? "msg-wrapper msg-from" : "msg-wrapper"

        let message = data.type == 'text' ? `
        <div id="text-wrapper" class="${classname}">
            <img id="msg-img" src="${user.avatar}" alt="profile-picture">
            <div class="msg-text">
                <p id="msg-name" class="msg-author">${user.username}</p>
                <p id="msg-text" class="msg">${data.message}</p>
                <p id="msg-time" class="time">${data.date}</p>
            </div>
        </div>
        ` : `
        <div id="file-wrapper" class="${classname}">
            <img id="msg-img" src="${user.avatar}" alt="profile-picture">
            <div class="msg-text">
                <p id="msg-name" class="msg-author">${user.username}</p>
                <object id="msg-obj" data="${data.file.view}" class="msg object-class"></object>
                <a id="msg-link" href="${data.file.download}">
                    <img src="./img/download.png" width="25px">
                </a>
                <p id="msg-time" class="time">19:00 PM</p>
            </div>
        </div>
        `

        chatMain.append(message)
    
})