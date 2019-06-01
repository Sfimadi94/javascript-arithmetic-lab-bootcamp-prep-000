var a = 10
var b = 20

beforeEach(function() {
  a = Math.floor(Math.random() * 1000)
  b = Math.floor(Math.random() * 1000)
})

function add(){
  return a + b
}