import {decodeMessage} from "@/lib/beanconqueror/proto";
import {type NextRequest, NextResponse} from "next/server";

type Body = {
  url: string
}

interface RequestWithBody extends NextRequest  {
  json: () => Promise<Body>;
}

/**
 * Endpoint for decoding a Beanconqueror share url into a JSON object.
 * This endpoint expects a json body with an url property.
 * @param req
 * @constructor
 */
export async function POST(req: RequestWithBody) {
  const body = await req.json();
  const url = body.url;

  if (url === null) {
    return NextResponse.json({"error": "missing url in body"}, {status: 400});
  }

  const bean = decodeMessage(url);

  return NextResponse.json(bean);
}
