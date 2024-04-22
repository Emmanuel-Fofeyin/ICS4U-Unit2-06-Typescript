/*
* The main program.
*
* @author  Emmanuel Fofeyin
* @version 1.0
* @since   2024-04-21
*/

import { Airplane } from './Airplane'
import { Jet } from './Jet'

const biplane = new Airplane()
biplane.setSpeed(212)
console.log(biplane.getSpeed())
const boeing = new Jet()
boeing.setSpeed(422)
console.log(boeing.getSpeed())
let counter = 0
while (counter < 4) {
    boeing.accelerate()
    console.log(boeing.getSpeed())
    if (boeing.getSpeed() > 5000) {
        biplane.setSpeed(biplane.getSpeed() * 2)
    } else {
        boeing.accelerate()
    }
  counter++
}
console.log(biplane.getSpeed())
