// STRETCH
const cars = [
    {
    vin: '11122233344455590',
    make: 'ford',
    model: 'fiesta',
    mileage: 76100,
    title: 'clean',
    transmission: 'manual',
    },
    {
        vin: '22222666669999912',
        make: 'ford',
        model: 'fusion',
        mileage: 96700,
        title: 'salvage',
        },
        {
            vin: '33333333333333333',
            make: 'toyota',
            model: 'corolla',
            mileage: 22100,
            },
    
]

exports.seed = async function(knex){
await knex('cars').truncate()
await knex('cars').insert(cars)
}
