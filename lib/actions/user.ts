import User from "../models/users.models"
import { connect } from "../mongodb/mongoose"

type UserProps = {
    id: string,
    first_name: string,
    last_name: string,
    image_url: string,
    email_addresses: string,
}

export async function createOrUpdateUser(id, first_name, last_name, image_url, email_addresses ){
    try {
        await connect()
        const user = await User.findOneAndUpdate({clerkId:id},{
            $set:{
                firstName: first_name,
                lastName: last_name,
                profilePicture: image_url,
                email:email_addresses[0].email_address
            }
        })
        return user
    } catch (error) {
        console.log('Error: Could not create or update user', error)
    }
}


export async function deleteUser(id: string){
    try {
        await connect()
        await User.findOneAndDelete({clerkId:id})
    } catch (error) {
        console.log('Error: Could not delete user', error)
    }
}