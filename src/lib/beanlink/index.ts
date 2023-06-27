export interface BeanLinkResponse {
    link: string;
    error?: string | undefined,
    name: string;
    roaster?: string | null;
}

const wait = (): Promise<string> => {
    return new Promise(resolve => setTimeout(resolve, 3000))
}

export async function getBeanLink(link: string): Promise<BeanLinkResponse> {
    console.log("bai")
    await wait()
    const response = await fetch("https://beanl.ink/add", {
        method: "POST",
        body: JSON.stringify({"link": link})
    });
    const data: BeanLinkResponse = await response.json();

    if (!!data.error) {
        throw new Error(data.error);
    }

    return data
}

export async function followBeanLink(link: string): Promise<string> {
    const response = await fetch(link);
    return response.url;
}
