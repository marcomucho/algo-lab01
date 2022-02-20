import { faker } from '@faker-js/faker'
import * as fs from 'fs'

const size = 75_000;

for (let i = 0; i < size; i++) {
    fs.writeFileSync('stringData.txt', faker.name.firstName() + '\n', { flag: 'a' })
    fs.writeFileSync('numberData.txt', Math.ceil(Math.random() * size) + '\n', { flag: 'a' })
}