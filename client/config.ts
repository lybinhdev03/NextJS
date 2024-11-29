import { error } from "console";
import { z } from "zod";

const configShema = z.object({
    NEXT_PUBLIC_API_ENDPOINT : z.string(),
    NEXT_PUBLIC_URL : z.string()
});

const configProject = configShema.safeParse({
    NEXT_PUBLIC_API_ENDPOINT : process.env.NEXT_PUBLIC_API_ENDPOINT,
    NEXT_PUBLIC_URL : process.env.NEXT_PUBLIC_URL
});

if(!configProject.success){
    console.error(configProject.error.errors);
    throw new Error('các khai báo biến môi trường không hợp lệ');
}

const envConfig = configProject.data;

export default envConfig;