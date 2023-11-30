import { connectToDB } from "@utils/database";
import Prompt from "@modals/prompt";

export const GET = async (req) =>{
    try {
        await connectToDB();
        const prompts = await Prompt.find({}).populate('creator');

        return new Response(JSON.stringify(prompts), {status: 200}); 
    } catch (error) {
        return new Response("Failed to fetch all prompt", {status: 500});
    }
};