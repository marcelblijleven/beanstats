import root from "@/lib/beanconqueror/proto/generated/beanconqueror";

const decodeUrl = (url: string) => {
    const params = (new URL(url)).searchParams;

    let i = 0;
    let sharedBeans = "";

    while (true) {
        const param = params.get(`shareUserBean${i}`) ?? "";

        if (param === "") {
            break;
        }

        sharedBeans += decodeURIComponent(param);
        i++;
    }
    return atob(sharedBeans.replaceAll(" ", "+"))
}

export function decodeMessage(url: string) {
    const sharedBean = decodeUrl(url);
    const buffer = new Uint8Array([...Array.from(sharedBean)].map((char) => char.charCodeAt(0)));
    return root.beanconqueror.BeanProto.decode(buffer);
}
