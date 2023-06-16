import root from "@/lib/beanconqueror/proto/generated/beanconqueror";

const decodeBase64 = (encoded: string) => Buffer.from(encoded, "base64").toString("latin1");

const decodeUrl = (url: string) => {
    const params = (new URL(url)).searchParams;

    let i = 0;
    let sharedBean = "";

    while (true) {
        const param = params.get(`shareUserBean${i}`) || "";

        if (param === "") {
            break;
        }

        sharedBean += decodeBase64(param);
        i++;
    }

    return sharedBean
}

export function decodeMessage(url: string) {
    const sharedBean = decodeUrl(url);
    const buffer = Buffer.from(sharedBean, "latin1");
    return root.beanconqueror.BeanProto.decode(buffer);
}
