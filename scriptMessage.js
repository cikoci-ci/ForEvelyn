const token = '8342997204:AAHG9gGEHUr3zFh5DUlWegj5_v4EUZVlPZY'
const chatId = '8278122169'


const nama = document.getElementById('nama')
const pesan = document.getElementById('pesan')
const tKirim = document.querySelector('.contact-form form')

tKirim.addEventListener('submit', function(e) {
    e.preventDefault();

    const text = `Nama: ${nama.value}\nPesan: \n${pesan.value}`;

    fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            chat_id: chatId,
            text: text
        })
    
    })
})
