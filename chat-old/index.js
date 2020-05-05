// Messages
const msgList = document.querySelector('#msg-list');
const msgForm = document.querySelector('#msg-form');
const msgBar = document.querySelector("#msg-bar");

msgForm.addEventListener('submit', evt => {
    evt.preventDefault();
    if (msgBar.value === '') return;

    const msg = document.createElement('li');
    const content = `<span class="msg-author">${nick}#${discrim}</span>\n<p class="msg">${msgBar.value}</p>`;
    msg.innerHTML = content;
    msgList.appendChild(msg);
    msgBar.value = '';

    msgList.scrollTop = msgList.scrollHeight;
});
