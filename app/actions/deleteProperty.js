"use server"
import cloudinary from '@/config/cloudinary';
import connectDB from '@/config/db';
import Property from '@/models/Property';
import { getSessionUser } from '@/utils/getSessionUser'

 export default async function deleteProperty(propertyId) {
    await connectDB();
    const sessionUser = await getSessionUser();
    if(!sessionUser || !sessionUser.userId){
        throw new Error('User Id Is Required');
    }
    const {userId} = sessionUser;

    const property = await Property.findById(propertyId);
    if(!property) throw new Error("Property Not Found");

    if(property.owner.toString() !== userId) throw new Error("Unauthorized");

    

    const publidIds = property.images.map((imageUrl) => {
        const parts = imageUrl.split('/');
        return parts.at(-1).split('.').at(0);
    });
    if(publidIds.length > 0) {
        for(let publicId in publidIds){
            await cloudinary.uploader.destroy('propertypulse/'+publicId);
        }
    }
    await property.deleteOne();
}