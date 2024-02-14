
import Message from './Message'


const Messages = () => {
    const containerStyle = {
        maxHeight: '400px', // Adjust the maximum height as needed
        overflowY: 'auto',
        msOverflowStyle: 'none', // Hides scrollbar on IE and Edge
        scrollbarWidth: 'none', // Hides scrollbar on Firefox
        '&::-webkit-scrollbar': {
          display: 'none', // Hides scrollbar on Chrome, Safari, and Opera
        },
      };
  return (
    <div  style={containerStyle}>
    <Message />
    <Message />
    <Message />
    <Message />
    <Message />
    <Message />
    <Message />
    <Message />
    <Message />
    <Message />
    
  </div>
  )
}

export default Messages