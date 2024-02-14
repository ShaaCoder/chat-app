import React from 'react'

const Message = () => {
  return (
    <div className='chat chat-end'>
        <div className='chat-image avatar'>
            <div className='w-10 rounded-full'>
                <img src="https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_1280.png" alt="tailwind" />
            </div>
        </div>
        <div className={`chat-bubble text-white  pb-2`}>hello'whats doing cutiyeh</div>
        <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>19-8-92</div>
    </div>
  )
}

export default Message