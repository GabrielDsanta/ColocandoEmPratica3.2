// const submitFormBtn = document.querySelector('button')
// const brandInput = document.querySelector('#brand')
// const modelInput = document.querySelector('#model')
// const yearInput = document.querySelector('#year')
// const valueInput = document.querySelector('#value')
// const colorInput = document.querySelector('#color')
// const automaticInput = document.querySelectorAll('#automatic')

// let newCarLocalStorage = []
// let newCar = {}
// let showAllCarsOnStorage

// window.localStorage.getItem('newCar') != null && (
//     showAllCarsOnStorage = window.localStorage.getItem('newCar'),
//     showAllCarsOnStorage = JSON.parse(showAllCarsOnStorage),
//     showAllCarsOnStorage.map((item) => {
//         console.log(item)
//     })
// )

// for (const iterator of automaticInput) {
//     iterator.addEventListener('click', (e) => {
//         newCar.Automatic = e.target.value
//     })
// }

// submitFormBtn.addEventListener('click', (e) => {
//     let newCarToLocalStorage
//     e.preventDefault()
//     newCar = {
//         ...newCar,
//         Brand: brandInput.value,
//         Model: modelInput.value,
//         Year: yearInput.value,
//         Value: valueInput.value,
//         Color: colorInput.value,
//     }

//     window.localStorage.getItem('newCar') !== null && (
//         newCarToLocalStorage = window.localStorage.getItem('newCar'),
//         newCarLocalStorage.push(JSON.parse(newCarToLocalStorage))
//     )
//     newCarLocalStorage.push(newCar)
//     window.localStorage.setItem('newCar', JSON.stringify(newCarLocalStorage))
// })



// Segunda Parte do Exercicio

const Cars = [
    {
        Brand: 'Fiat',
        Model: 'Toro',
        Year: '2022',
        Value: '130000',
        Color: 'Branca',
    },
    {
        Brand: 'Honda',
        Model: 'Civic',
        Year: '2022',
        Value: '100000',
        Color: 'Preto',
    },
    {
        Brand: 'Chevrolet',
        Model: 'Onix',
        Year: '2022',
        Value: '100000',
        Color: 'Preto',
    },
    {
        Brand: 'Ford',
        Model: 'Fusion',
        Year: '2022',
        Value: '100000',
        Color: 'Preto',
    },
    {
        Brand: 'Fiat',
        Model: 'FastBack',
        Year: '2022',
        Value: '130000',
        Color: 'Branca',
    },
]

// console.log(SearchCarsByBrand(Cars, 'Fiat'))
console.log(ViewCarsAvailable(Cars))

function SearchCarsByBrand(array, brand){
    return array.filter((item) => item.Brand === brand)
}

function ViewCarsAvailable(array){
    let ListOfCarsAvailable = []
    array.forEach((item) => {
        array.every(x => ListOfCarsAvailable.includes(x.Brand) === false) && (ListOfCarsAvailable.push(item.Brand))
    })

    return ListOfCarsAvailable
}