const API = 'https://new-chat-najot-talim.herokuapp.com'

let server = io(API, { transports: ['websocket', 'polling']})


server.on('send message', data =>{
        
        if(data.type == 'text'){
                let template = textMsgTemplate.cloneNode(true)
                let wrapper = template.getElementById('text-wrapper')
                let img = template.getElementById('msg-img')
                let author = template.getElementById('msg-name')
                let message = template.getElementById('msg-text')
                let time = template.getElementById('msg-time')
    
                let user = users.find(user => user.userId == data.userId)
    
                wrapper.className = data.userId == userId ? "msg-wrapper msg-from" : "msg-wrapper"
                img.setAttribute('src', user.avatar)
                author.textContent = user.username
                message.textContent = data.message
                time.textContent = data.time
    
                chatMain.append(template)
            }
    
            else if(data.type == 'file'){
                let template = fileMsgTemplate.cloneNode(true)
                let wrapper = template.getElementById('file-wrapper')
                let img = template.getElementById('msg-img')
                let author = template.getElementById('msg-name')
                let obj = template.getElementById('msg-obj')
                let link = template.getElementById('msg-link')
                let time = template.getElementById('msg-time')
    
                let user = users.find(user => user.userId == data.userId)
    
                wrapper.className = data.userId == userId ? "msg-wrapper msg-from" : "msg-wrapper"
                img.setAttribute('src', user.avatar)
                author.textContent = user.username
                obj.setAttribute('data', data.file.view)
                link.setAttribute('href', data.file.download)
                time.textContent = data.time
    
                chatMain.append(template)
    
    
                let uploadedItem = uploadedFileItem.cloneNode(true)
                let uploadedLink = uploadedItem.getElementById('uploaded-link')
                let uploadedName = uploadedItem.getElementById('uploaded-name')
    
                uploadedLink.setAttribute('href', data.file.view)
                uploadedName.textContent = data.file.name
    
                uploadedFiles.append(uploadedItem)
            }

    
})