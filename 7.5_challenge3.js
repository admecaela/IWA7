const leoName = 'Leo'
const leoSurname = 'Musvaire     '
const leoBalance = '-9394'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'

const divider = '----------------------------------'

// Only change below this line

const owed = ((-1 * leoBalance) + (-1 * sarahBalance)).toFixed(2)
const leo = console.log(  '${leoName} ${leoSurname} \Owed : R\ ${(- 1* leoBalance).toFixed(2) }'  )
const sarah = console.log(  '${sarahName} ${sarahSurname} \Owed : R\ ${(-1 * sarahBalance).toFixed(2) }'  )

const total = "Total amount owed: R"
const result = divider +'\n'  + total + owed +'\n' + divider

console.log(result)