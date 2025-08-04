import { beanInformationFormSchema } from "@/lib/beanconqueror/validations/bean-information-form-schema";
import { createUrlFromFormSchema } from "@/lib/beanconqueror/proto/proto-helpers";
import { NextResponse } from "next/server";
import { getBeanLink } from "@/lib/beanlink";

export function GET() {
  return NextResponse.json({
    example: {
      "coffeeName": "Ethiopian Yirgacheffe",
      "roaster": "Sample Roastery",
      "roastingDate": "2025-07-26T00:00:00.000Z",
      "beanRoastingType": "ESPRESSO",
      "degreeOfRoast": [3],
      "roast": "CITY_ROAST",
      "beanMix": "SINGLE_ORIGIN",
      "weight": "250",
      "cost": "15",
      "flavourProfile": "Floral, citrus, tea-like",
      "cuppingPoints": "87",
      "decaffeinated": false,
      "website": "https://sampleroastery.com",
      "eanArticle": "1234567890123",
      "notes": "A light and bright Ethiopian coffee",
      "varietyInformation": [
        {
          "country": "Ethiopia",
          "region": "Yirgacheffe",
          "farm": "Halo Beriti",
          "farmer": "Various Smallholders",
          "elevation": "2000m",
          "variety": "Heirloom",
          "processing": "Washed",
          "harvested": "2025",
          "percentage": "100",
          "certification": "Organic",
          "purchasePrice": "5",
          "fobPrice": "4"
        }
      ]
    }
  });
}

export async function POST(req: Request) {
  const body = beanInformationFormSchema.safeParse((await req.json()));

  if (!body.success) {
    const { errors } = body.error;

    return NextResponse.json({
      error: { message: "Invalid request data", errors }
    }, { status: 400 });
  }

  const beanconquerorUrl = createUrlFromFormSchema(body.data);
  const beanLink = await getBeanLink(beanconquerorUrl);

  return NextResponse.json({ qr: beanLink });
}
