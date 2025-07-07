import {comments} from "./data.js"
export async function GET() {
    return  Response.json(comments)
}