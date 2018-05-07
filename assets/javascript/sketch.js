const damping = 0.9
const cols = 200
const rows = 200

let current = new Array(cols, rows)
let previous = new Array(cols, rows)

function setup(){
  createCanvas(200, 200)
  for(let i = 0; i < cols; i++){
    for(let j = 0; j < rows; j++){
      current[i][j] = 100
      previous[i][j] = 100
    }
  }
}

function draw(){
  background(0)
  loadPixels()
  for(let i = 1; i < cols-1; i++){
    for(let j = 1; j < rows-1; j++){
      current[i][j] = (
        previous[i-1][j] 
          + previous[i+1][j] 
          + previous[i][j-1] 
          + previous[i][j+1])/ 2 - previous[i][j]
      console.log(current)

      let index = i + j * cols
      pixels[index] = color(current[i][j])
    }
  }
  updatePixels
}
