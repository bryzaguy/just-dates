const express = require('express')
const app = express()

const profiles = [{
  name: 'Stacy',
  age: 34,
  imageUrl: 'https://scstylecaster.files.wordpress.com/2016/05/girl_in_bikini_selfportrait-cropped-proto-custom_9.jpg'
}, {
  name: 'Jessica',
  age: 29,
  imageUrl: 'https://s-media-cache-ak0.pinimg.com/originals/9b/54/ef/9b54efc37ed81d0b92a47d86ff324ca7.jpg'
}, {
  name: 'Beth',
  age: 28,
  imageUrl: 'http://4.bp.blogspot.com/_wNPMPm0OcYQ/S-J-6DAnSNI/AAAAAAAANmQ/j1KVNUkdFGg/s640/Hot-Jeanette-Biedermann-Photoshoot-002.jpg'
}, {
  name: 'Sara',
  age: 30,
  imageUrl: 'http://ilarge.lisimg.com/image/7623225/1118full-my-profile.jpg'
}, {
  name: 'Jen',
  age: 33,
  imageUrl: 'http://tvgupshup.com/wp-content/uploads/2013/04/Saba_Qamar_white_dress.jpg'
}]

app.get('/profiles', function (req, res) {
  res.send(profiles)
})

app.listen(3300, function () {
  console.log('Example app listening on port 3300!')
})