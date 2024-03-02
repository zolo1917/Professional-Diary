import dotenv from 'dotenv'

export function loadConfig (){
    dotenv.config()
}

export function secretKey(): string {
    return process.env.SECRET_KEY || ''
}