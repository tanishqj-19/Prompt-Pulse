import { connectToDB } from "@utils/database";
import Prompt from "@modals/prompt";

export const GET = async (req, {params}) =>{
    try {
        await connectToDB();
        const userPrompts = await Prompt.find({creator: params.id}).populate('creator');

        return new Response(JSON.stringify(userPrompts), {status: 200}); 
    } catch (error) {
        return new Response("Failed to fetch all prompt", {status: 500});
    }
      
}