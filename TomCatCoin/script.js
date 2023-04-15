const text = document.querySelector('#text').innerText
const copybtn = document.getElementById('copy')
async function copyToClip (){
   try {
    await  navigator.clipboard.writeText(text)
   } catch (error) {
    console.log('Copy action failed')
   }
}

const copy = () => { 
  copyToClip()
  copybtn.innerText = 'Copied'
  setTimeout(() => {
    copybtn.innerText = 'Copy'
  }, 1000); 
}